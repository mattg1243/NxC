const express = require('express');
const router = express.Router();
const registerUser = require('../handlers/userHandlers');

// when a new user registers 
router.post("/", (req, res) => { registerUser(req, res); });

module.exports = router;