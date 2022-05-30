const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: "135846474532221",
	api_secret: process.env.CLOUD_SECRET,
	secure: true,
});

module.exports = cloudinary;
