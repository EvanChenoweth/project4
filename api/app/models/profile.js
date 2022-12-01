const mongoose = require('mongoose')
import reviewSchema from './review'

const profileSchema = new mongoose.Schema(
	{
        email: {
            type: String,
            required: true
        },
        reviews: [reviewSchema],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
	},
)

module.exports = profileSchema