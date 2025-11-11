const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/web-dev");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  // Optional connection event listeners
  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });

  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed on app termination");
    process.exit(0);
  });
};

module.exports = connectDB;
