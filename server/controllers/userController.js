const { mode } = require('../../webpack.config');
const User = require('../models/userModel')

const userController = {};

// create and save a new User into the database
userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  // console.log("req"+ JSON.stringify(req));
  // console.log("req.body" + JSON.stringify(req.body));
  console.log(username)
  console.log(password)
  if (!username || !password) {
    return next("Username and password are undefined.");
  }

  User.create({ username: username, password: password }, (err, user) => {
    if (!user) {
      return next("Invalid Username or Password.");
    }

    // console.log(user);
    // const { id } = user._id;
    res.locals.id = user._id;
    // console.log(res.locals.id);
    // console.log(res.locals.id);
    next();
  });
};

userController.verifyUser = (req, res, next) => {
  // write code here
  console.log("verify");
  const { username, password } = req.body;
  console.log("username");
  console.log("password");
  if (!username || !password) {
    return next("Username and password are undefined");
  }

  User.findOne({ username: username }, (err, user) => {
    // compare user's password with req.body.password
    if (!user) {
      return next("Username not found.");
    }

    if (user.password === password) {
      // const { id } = user._id; DO NOT ASSIGN TO VARIABLE
      res.locals.id = user._id;
      // console.log(res.locals.id);
      return next();
    } else {
      return next("Password is incorrect.");
    }
  });
};

module.exports = userController;