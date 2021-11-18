const formidable = require('formidable');

const parseFormData = async (req, options = {}) => {
  const form = formidable(options);

  return new Promise((res, rej) => {
    form.parse(req, (err, fields, files) => {
      if (err) return rej(err);
      res({ fields, files });
    });
  });
};

module.exports = parseFormData;
