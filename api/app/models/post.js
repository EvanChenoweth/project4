const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
	{
		game: {
			type: String,
			required: true,
		},
        mode: {
			type: String,
			required: true,
		},
        players: {
			type: Number,
			required: true,
		},
        info: {
			type: String,
			required: false,
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

module.exports = mongoose.model('Post', postSchema)