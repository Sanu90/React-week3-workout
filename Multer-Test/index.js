const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

const upload = require("./multer");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

console.log("port is", port);

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/upload", upload.single("multerImage"), (req, res) => {
  console.log("req.file", req.file);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("server @http://localhost:9746/ ");
});
