const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shethsoham1:s9i4wns9QCR5fEai@connect-sphere.vtwsr.mongodb.net/?retryWrites=true&w=majority&appName=Connect-Sphere/connectsphere"
  );
};

module.exports = connectDB;

