const express = require('express');
const router = express.Router();
const {
  createSubmission,
  getSubmissions,
} = require('../controllers/submissions.js');
const { authenticate } = require('../middleware/auth.js');
const { formDataHandler } = require('../middleware/formDataHandler.js');

router.get('/', getSubmissions);
router.post(
  '/',
  formDataHandler({
    multiples: true,
    maxFields: 2,
    maxFileSize: process.env.MAX_FILE_SIZE,
  }),
  authenticate,
  createSubmission
);

module.exports = router;
