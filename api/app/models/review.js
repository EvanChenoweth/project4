const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
	{
        review: {
			type: String,
			required: true,
		},
        email: {
			type: String,
			required: true,
		},
        owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Review', reviewSchema)