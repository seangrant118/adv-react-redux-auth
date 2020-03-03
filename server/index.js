const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const port = process.env.PORT || 3090;

//DB setup
mongoose.connect("mongodb://localhost/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on("connected", function() {
  console.log("connected to db");
});

//App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

//Server Setup
app.listen(port);
console.log("Server listening on:", port);
