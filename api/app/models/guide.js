const mongoose = require('mongoose')

const guideSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
        game: {
			type: String,
			required: true,
		},
        topic: {
			type: String,
			required: true,
		},
        content: {
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

module.exports = mongoose.model('Guide', guideSchema)