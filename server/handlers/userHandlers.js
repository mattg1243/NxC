const User = require('../schemas/user');

const registerUser = (req, res) => {
  // make sure the passwords match and handle when they dont
  if (req.body.password === req.body.confirmPassword) {
    try {
      User.register(new User({
        username: req.body.email,
      }), req.body.password, (err, user) => {
        // log an error if present
        if (err) { console.error(err); }
        // otherwise, log confirmation
        console.log(user.username, "has been registered succesfully");
        res.status(200).send("User registerd succesfully");
      })
    } catch (err) {
      res.status(500).json(err.code);
      throw new Error(err);
    }

  } else {
    res.status(403).send("Passwords don't match, please confirm and try again.")
  }
}

module.exports = registerUser;