const jwt = require('jsonwebtoken');
const StatusHandler = require('../utils/statusHandler');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const authenticate = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new StatusHandler(401, 'Not authorized to access this route'));
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const { _id } = decoded;

    const user = await User.findOne({ _id });

    if (!user) {
      return next(
        new StatusHandler(401, 'Not authorized to access this route')
      );
    }

    req.user = user;

    next();
  } catch (error) {
    return next(new StatusHandler(401, 'Not authorized to access this route'));
  }
});

module.exports = {
  authenticate,
};
