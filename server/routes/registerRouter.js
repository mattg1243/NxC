const express = require('express');
const router = express.Router();
const User = require('../schemas/user.js')
// import { registerUser } from '../handlers/userHandlers.js';
// when a new user registers 
// just gonna put the function straight in here until i get better at modular imports
router.post("/", (req, res) => { 
  
    if (req.body.password === req.body.confirmPassword) {
      try {

      } catch (err) {
        res.status(500).json(err.message);
        throw new Error(err);
      }

    } else {
      res.status(403).send("Passwords don't match, please confirm and try again.")
    }
  }
);

module.exports = router;