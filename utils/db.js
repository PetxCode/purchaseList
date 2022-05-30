const mongoose = require("mongoose");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const url = process.env.ONLINE_DB;

mongoose.connect(url).then(() => {
	console.log("database is now connected...!");
});

module.exports = mongoose;
