const jwt = require('jsonwebtoken');
const StatusHandler = require('../utils/statusHandler');
const asyncHandler = require('express-async-handler');

const authenticate = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  console.log(token);

  if (!token) {
    console.log('No token found'.red.bold);
    return next(new StatusHandler(401, 'Not authorized to access this route'));
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log('Token found but unverifiable'.red.bold);
      return next(
        new StatusHandler(401, 'Not authorized to access this route')
      );
    }

    req.user = user;

    next();
  });
});

module.exports = {
  authenticate,
};
