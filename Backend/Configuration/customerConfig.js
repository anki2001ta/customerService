// database connection
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoose_url);
    console.log(`Connected to MongoDB Database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

module.exports = connectDB;
