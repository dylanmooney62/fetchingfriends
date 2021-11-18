require('colors');
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./middleware/errorHandler');

// Connect to database
require('./config/db')();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const submissionsRouter = require('./routes/submissions');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(express.static('public'));

app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/submissions', submissionsRouter);
app.use('/api/v1/auth', authRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.use(errorHandler);

module.exports = app;
