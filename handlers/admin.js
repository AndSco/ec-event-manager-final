const {adminUsername, adminPassword} = require("../config");

module.exports.login = (req, res, next) => {
  try {
    const {username, password} = req.body;
    const isLoginSuccessful = (username === adminUsername && password === adminPassword);
    res.status(200).json({
      managedToLogin: isLoginSuccessful
    })
  } catch(err) {
    return next(err);
  }
}