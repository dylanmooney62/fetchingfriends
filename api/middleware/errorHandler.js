const StatusHandler = require('../utils/statusHandler');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  //   Bad object Id
  if (error.name === 'CastError') {
    error = new StatusHandler(
      404,
      `Resource with id of '${error.value}' not found`
    );
  }

  //   Validation Error
  if (error.name === 'ValidationError') {
    const message = Object.values(error.errors)
      .map((value) => value.message)
      .join(', ');
    error = new StatusHandler(400, message);
  }

  // Duplicate Key found
  if (error.code === 11000) {
    error = new StatusHandler(400, 'Duplicate field value entered');
  }

  console.log(`Error Handler ${error.message}`.bold.red);

  res
    .status(error.statusCode || 500)
    .json({ success: false, status: error.statusCode, error: error.message });
};

module.exports = errorHandler;
