const session = require("express-session");
const sessionModel = require("../models/sessionModel");
const cookieController = {};

/**
 * setCookie - set a cookie with a random number
 */
cookieController.setCookie = (req, res, next) => {
  // write code here
  res.cookie("codesmith", "hi");
  res.cookie("secret", Math.floor(Math.random() * 100));
  next();
};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  res.cookie("ssid", res.locals.id);
  sessionModel.create({ cookieId: res.locals.id }, (err, session) => {
    console.log(session);
    next();
  });
};

module.exports = cookieController;
