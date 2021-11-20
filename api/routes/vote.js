const express = require('express');
const router = express.Router({ mergeParams: true });
const { voteSubmission } = require('../controllers/vote');

router.post('/', voteSubmission);

module.exports = router;
