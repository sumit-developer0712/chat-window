const messageService = require('../services/messageService');

const messageController = {
	post(req, res) {
		console.log(JSON.stringify(req.body))
        messageService.post(req.body)
		.then(response => res.json(response));
	}
};

module.exports = messageController;