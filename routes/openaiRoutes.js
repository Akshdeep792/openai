const express = require('express');
const { generateimage } = require('../controller/openaiController');
const router = express.Router();

router.post('/generateimage', generateimage);

module.exports = router;