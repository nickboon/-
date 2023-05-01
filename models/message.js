const Joi = require('joi');
const mongoose = require('mongoose');

const mesageSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 1024,
	},
	replies: {
		type: Array,
	},
});

const Message = mongoose.model('Message', mesageSchema);

const schema = Joi.object({
	content: Joi.string().min(1).max(1024).required(),
	replies: Joi.array(),
});
function validateMessage(message) {
	return schema.validate(message);
}

exports.Message = Message;
exports.validate = validateMessage;
