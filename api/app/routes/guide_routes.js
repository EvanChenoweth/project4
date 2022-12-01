// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for items
const Guide = require('../models/guide')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { item: { title: '', text: 'foo' } } -> { item: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
const guide = require('../models/guide')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /guides
router.get('/guides', (req, res, next) => {
	Guide.find()
		.then((guides) => {
			// `items` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return guides.map((guide) => guide.toObject())
		})
		// respond with status 200 and JSON of the items
		.then((guides) => res.status(200).json({ guides: guides }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// INDEX of that Users guides
// GET /guides
router.get('/guides/mine', (req, res, next) => {
	Guide.find({ owner: req.session.userId })
		.then((guides) => {
			// apply `.toObject` to each one
			return guides.map((guide) => guide.toObject())
		})
		// respond with status 200 and JSON of the items
		.then((guides) => res.status(200).json({ guides: guides }))
		// if an error occurs, pass it to the handler
		.catch(next)
})


// SHOW
//* route should not require token
// GET /guides/5a7db6c74d55bc51bdf39793
router.get('/guides/:id', (req, res, next) => {
	// req.params.id will be set based on the `:id` in the route
	Guide.findById(req.params.id)
		.then(handle404)
		// if `findById` is succesful, respond with 200 and "item" JSON
		.then((guide) => res.status(200).json({ guide: guide }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// CREATE
// POST /guides
router.post('/guides', requireToken, (req, res, next) => {
	// set owner of new guide to be current user
	req.body.guide.owner = req.user.id

	Guide.create(req.body.guide)
		// respond to succesful `create` with status 201 and JSON of new "item"
		.then((guide) => {
			res.status(201).json({ guide: guide.toObject() })
		})
		// if an error occurs, pass it off to our error handler
		// the error handler needs the error message and the `res` object so that it
		// can send an error message back to the client
		.catch(next)
})

// UPDATE
// PATCH /items/5a7db6c74d55bc51bdf39793
router.patch('/guides/:id', requireToken, removeBlanks, (req, res, next) => {
	// if the client attempts to change the `owner` property by including a new
	// owner, prevent that by deleting that key/value pair
	delete req.body.guide.owner

	Guide.findById(req.params.id)
		.then(handle404)
		.then((guide) => {
			// pass the `req` object and the Mongoose record to `requireOwnership`
			// it will throw an error if the current user isn't the owner
			requireOwnership(req, guide)

			// pass the result of Mongoose's `.update` to the next `.then`
			return guide.updateOne(req.body.guide)
		})
		// if that succeeded, return 204 and no JSON
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// DESTROY
// DELETE /items/5a7db6c74d55bc51bdf39793
router.delete('/guides/:id', requireToken, (req, res, next) => {
	Guide.findById(req.params.id)
		.then(handle404)
		.then((guide) => {
			// throw an error if current user doesn't own `item`
			requireOwnership(req, guide)
			// delete the item ONLY IF the above didn't throw
			guide.deleteOne()
		})
		// send back 204 and no content if the deletion succeeded
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

module.exports = router