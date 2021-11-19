const asyncHandler = require('express-async-handler');
const formidable = require('formidable');

const formDataHandler = (options) =>
  asyncHandler(async (req, res, next) => {
    const { fields, files } = await parseForm(req, options);

    req.fields = fields;
    req.files = files;

    next();
  });

module.exports = { formDataHandler };

const parseForm = async (req, options) =>
  new Promise((res, rej) => {
    formidable(options).parse(req, (err, fields, files) => {
      if (err) return rej(err);
      res({ fields, files });
    });
  });
