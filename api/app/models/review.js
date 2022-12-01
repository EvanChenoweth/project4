const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
	{
        review: {
            type: Number,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
	},
	{
		timestamps: true,
	}
)

module.exports = reviewSchema