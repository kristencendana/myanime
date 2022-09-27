const { mode } = require('../../webpack.config');
const User = require('../models/userModel')

const userController = {};

// create and save a new User into the database
userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next("Username and password are undefined");
  }

  User.create({ username: username, password: password }, (err, user) => {
    if (!user) {
      return next(err);
    }
    // console.log(user);
    // const { id } = user._id;
    res.locals.id = user._id;
    // console.log(res.locals.id);
    next();
  });
};

module.exports = userController;