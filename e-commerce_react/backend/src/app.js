// src/app.js
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

// Routers
const productRouter = require("./routes/product.router");
const indexRouter = require("./routes/index.router");
const userRouter = require("./routes/user.router");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS for frontend (local React)
app.use(
  cors({
    origin: "http://localhost:5173", // your React frontend URL
    credentials: true,
  })
);

// Static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", indexRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

module.exports = app; // ✅ export the app
