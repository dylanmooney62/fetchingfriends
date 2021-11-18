const jwt = require('jsonwebtoken');
const StatusHandler = require('../utils/StatusHandler');

const authenticate = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new StatusHandler(401, 'Not authorized to access this route'));
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      next(new StatusHandler(401, 'Not authorized to access this route'));
    }

    req.user = user;

    next();
  });
};

module.exports = {
  authenticate,
};
