const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "server/config/config.env" });
}

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// importing routes
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

// using routes
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

if (process.env.NODE_ENV === "production") {
  app.get("*", express.static(path.join(__dirname, "..", "client", "build")));

  // Catch non-existent file
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
  );
}

module.exports = app;
