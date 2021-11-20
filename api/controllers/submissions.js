const validator = require('validator').default;
const asyncHandler = require('express-async-handler');
const StatusHandler = require('../utils/statusHandler');
const uploadImage = require('../utils/uploadImage');
const Submission = require('../models/Submission');

const getSubmissions = asyncHandler(async (req, res, next) => {
  const submissions = await Submission.find({});

  res.status(200).json({ submissions, success: true });
});

const createSubmission = asyncHandler(async (req, res, next) => {
  const image = req?.files?.image;
  const submission = req?.fields?.submission;

  if (!image || !submission) {
    return next(
      new StatusHandler(400, 'Please provide image and submission details')
    );
  }

  if (!validator.isJSON(submission)) {
    return next(
      new StatusHandler(
        400,
        'Please provide valid submission details. Details must be provided in JSON format'
      )
    );
  }

  const { title, description } = JSON.parse(submission);

  const imgUrl = await uploadImage(image.filepath, {
    width: 1000,
    height: 1000,
    crop: 'fill',
    folder: 'fetchingfriends/submissions',
  }).then((res) => res);

  const newSubmission = await Submission.create({
    title,
    description,
    imgUrl,
    user: req.user._id,
  });

  res.status(201).json({ submission: newSubmission });
});

module.exports = {
  getSubmissions,
  createSubmission,
};
