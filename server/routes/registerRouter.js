import express from 'express';
const router = express.Router();
// import { registerUser } from '../handlers/userHandlers.js';
// when a new user registers 
// just gonna put the function straight in here until i get better at modular imports
router.post("/", (req, res) => { 
  
    if (req.body.password === req.body.confirmPassword) {
      res.json("passwords match")
    } else {
      res.status(403).send("Passwords don't match, please confirm and try again.")
    }
  }
);

export default router;