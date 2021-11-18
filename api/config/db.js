const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectionString =
      process.env.NODE_ENV === 'production'
        ? process.env.MONGO_URI_PROD
        : process.env.MONGO_URI_DEV;

    const conn = await mongoose.connect(connectionString);

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.bold.underline
    );
  } catch (error) {
    console.error(`Unable to connect to database: ${error.message}`.red.bold);
  }
};

module.exports = connectDB;
