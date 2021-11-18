const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filepath, options = {}) => {
  return new Promise((res, rej) => {
    cloudinary.uploader.upload(filepath, options, function (err, result) {
      if (err) return rej(err);
      res(result.secure_url);
    });
  });
};

module.exports = uploadImage;
