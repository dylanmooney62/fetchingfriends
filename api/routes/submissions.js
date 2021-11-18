const express = require('express');
const router = express.Router();
const {
  createSubmission,
  getSubmissions,
} = require('../controllers/submissions.js');
const { authenticate } = require('../middleware/auth.js');

router.get('/', getSubmissions);
router.post('/', authenticate, createSubmission);

module.exports = router;
