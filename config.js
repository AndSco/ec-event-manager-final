require("dotenv").config(); // loads any environment variable into process.env

module.exports = {
  mongoAtlasPword: process.env.MONGO_ATLAS_PASSWORD,
  cloudName: process.env.CLOUD_NAME,
  cloudinaryKey: process.env.CLOUDINARY_KEY,
  cloudinarySecret: process.env.CLOUDINARY_SECRET,
  adminUsername: process.env.ADMIN_USERNAME,
  adminPassword: process.env.ADMIN_PWORD
};
