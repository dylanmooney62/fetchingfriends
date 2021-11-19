const validator = require('validator').default;
const asyncHandler = require('express-async-handler');
const StatusHandler = require('../utils/statusHandler');
const parseFormData = require('../utils/parseFormData');
const uploadImage = require('../utils/uploadImage');
const Submission = require('../models/Submission');

const getSubmissions = asyncHandler(async (req, res, next) => {
  const submissions = await Submission.find({}).populate({
    path: 'user',
    select: 'username',
  });

  res.status(200).json({ submissions, success: true });
});

const createSubmission = asyncHandler(async (req, res, next) => {
  console.log('this should not be getting hit');

  const { files, fields } = await parseFormData(req, {
    multiples: true,
    maxFields: 2,
    maxFileSize: process.env.MAX_FILE_SIZE,
  }).then((data) => data);

  const image = files?.image;
  const submission = fields?.submission;

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
