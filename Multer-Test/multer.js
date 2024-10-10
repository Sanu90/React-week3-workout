const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + "-" + Math.round(100 + Math.random() * 999);
    console.log("filename in multer", fileName);

    cb(null, `${fileName}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
