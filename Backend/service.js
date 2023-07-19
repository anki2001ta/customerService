const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require("dotenv");
env.config();
const app = express();
const connectDB = require("./Configuration/customerConfig");

// Middleware
app.use(bodyParser.json());
app.use(cors());


//connect database
app.listen(process.env.PORT, async () => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    console.log("App is not listening");
  }
});