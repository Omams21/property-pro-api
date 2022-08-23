const cloudinary = require('cloudinary').v2;
const fs = require('fs');

export const uploadImageController = async (req, res) => {
  console.log(req.files.image);
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath
    //   {
    //   use_filename: true,
    //   folder: 'property-files',
    // }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return result.secure_url;
};
