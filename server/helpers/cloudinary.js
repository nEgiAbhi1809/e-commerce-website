const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();



cloudinary.config({
  // cloud_name: "dijhhek27",
  cloud_name: process.env.CLOUD_NAME,
  // api_key: "247267481632534",
  api_key: process.env.API_KEY,
  // api_secret: "fukJ95pp3OQk3R8Tz2Qr-o6hUgI",
  api_secret: process.env.API_SECRET,
});

// .env

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
