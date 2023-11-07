const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes/route");

require("dotenv").config();
require("./config/db");

app.use(cors());

app.use(bodyParser.json());
app.use("/", route);

// Global middleware
app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  return res.status(error.statusCode).json({
    status: error.status,
    message: error.message
  });
});

app.listen(5000);
