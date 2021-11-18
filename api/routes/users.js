var express = require('express');
const { createUser } = require('../controllers/users');
var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ msg: 'respond with a resource' });
});

module.exports = router;
