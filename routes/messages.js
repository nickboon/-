const _ = require('lodash');
const { Message, validate } = require('../models/message');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const messages = await Message.find();
	res.send(messages);
});

router.post('/', async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const message = new Message(req.body);
	await message.save();

	res.send(message);
});

module.exports = router;
