const express = require('express');
const { login, register, logout, getUser } = require('../controllers/auth');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.get('/user', authenticate, getUser);

module.exports = router;
