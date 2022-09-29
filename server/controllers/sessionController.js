const Session = require("../models/sessionModel");
const cookieParser = require("cookie-parser");
const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  // write code here

  console.log("in isLoggedIn middleware");
  console.log("cookies");
  console.log(req.cookies);
  if (!req.cookies.ssid) {
    return next("Not valid ssid cookies");
  }

  Session.findOne({ cookieId: req.cookies.ssid }, (err, session) => {
    if (err) {
      return res.redirect("/signup");
    }
    next();
  });
  //find will return array of object
  // console.log(Object.keys(cookies));
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  //write code here
};

module.exports = sessionController;
