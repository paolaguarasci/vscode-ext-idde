const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

// app.get("/", (req, res) => {
//   res.sendFile();
// });

app.use(express.static(path.join(__dirname, "static")));

exports.app = app