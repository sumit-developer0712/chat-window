const express = require('express');
const messageController = require('./messageController');

const router = express.Router();

router.post('/postMessage', messageController.post);

module.exports = router;