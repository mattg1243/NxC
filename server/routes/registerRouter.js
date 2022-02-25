import express from 'express';
const router = express.Router();
// when a new user registers 
router.post("/", (req, res) => {
  res.send("post request received");
  console.log("request received");
})

export default router;