const messageService = require('../services/messageService');

const messageController = {
	post(req, res) {
        messageService.post(req.body.params)
		.then(response => res.json(response));
	}
};

module.exports = messageController;