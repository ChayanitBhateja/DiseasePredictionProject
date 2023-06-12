var multer = require("multer");
const fs = require("fs");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dest = "uploads/";
    if (!fs.existsSync(dest)) {
      // create the destination folder (and any parent folders) if it doesn't exist
      fs.mkdir(dest, { recursive: true }, (err) => {
        if (err) {
          console.error("Error creating destination folder:", err);
        }
        cb(null, dest);
      });
    } else {
      cb(null, dest);
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

module.exports = { upload };
