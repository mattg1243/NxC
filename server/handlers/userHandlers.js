import User from "../schemas/user";

export function registerUser(req, res) {
  // make sure the passwords match and handle when they dont
  if (req.body.password !== req.body.confirmPassword) {
    res.json("passwords match")
  } else {
    res.status(406).send("Passwords don't match, please confirm and try again.")
  }
}