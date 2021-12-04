const asyncHandler = require('express-async-handler');
const Vote = require('../models/Vote');
const Submission = require('../models/Submission');
const StatusHandler = require('../utils/statusHandler');

const voteSubmission = asyncHandler(async (req, res, next) => {
  const { submissionId } = req.params;

  const submission = await Submission.findById(submissionId);

  if (!submission) {
    return next(
      new StatusHandler(
        404,
        `Could not find submission with id ${submissionId}`
      )
    );
  }

  const user = req.user;

  const vote = await Vote.findOne({
    user: user._id,
    submission: submission._id,
  });

  //   If there is a vote remove it from db
  if (vote) {
    await vote.remove();
    return res.status(200).json({ success: true, message: 'removed' });
  }

  await Vote.create({
    user: user._id,
    submission: submission._id,
  });

  res.status(201).json({ success: true, message: 'added' });
});

module.exports = {
  voteSubmission,
};
