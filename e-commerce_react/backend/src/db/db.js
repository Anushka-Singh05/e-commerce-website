const mongoose = require("mongoose");

const connect = () => {
  return mongoose
    .connect(process.env.MONGO_URI) // return the Promise
    .then(() => {
      console.log("Database connected!");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      throw err; // rethrow so server.js can catch it
    });
};

module.exports = connect;
