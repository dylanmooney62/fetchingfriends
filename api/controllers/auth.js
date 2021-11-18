const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const StatusHandler = require('../utils/statusHandler');

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //  Check email and password has been provided
  if (!email || !password) {
    return next(new StatusHandler(400, 'Please provide email and password'));
  }

  //   Check user exists in database
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new StatusHandler(401, 'Email or password is invalid'));
  }

  //  Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new StatusHandler(401, 'Email or password is invalid'));
  }

  sendTokenResponse(user, res);
});

const register = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  // filter password before sending response
  const { _id, name, email, role } = user;

  res.status(201).send({ _id, name, email, role });

  sendTokenResponse(user, res);
});

module.exports = {
  login,
  register,
};

const sendTokenResponse = (user, res) => {
  const { _id, username, email } = user;

  const accessToken = jwt.sign(
    { _id, username, email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.TOKEN_EXPIRE }
  );

  const options = {
    httpOnly: true,
    expiryDate: new Date(Date.now() + 60 * 60 * 1000) /* 1hour */,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(200).cookie('token', accessToken, options).json({ success: true });
};
