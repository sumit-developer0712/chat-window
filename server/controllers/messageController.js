const messageService = require('../services/messageService');

const messageController = {
	post(req, res) {
		messageService.post(req.body)
		.then(response => res.json(response))
		.catch(err =>  res.json(err));
	}
};

module.exports = messageController;