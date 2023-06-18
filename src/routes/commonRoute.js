const express = require("express");
const auth = require("../middlewares/auth");
const { upload } = require("../middlewares/fileUpload");
const commonController = require("../controllers/commonController");

const router = express.Router();

router.post("/upload", upload.single("file"), commonController.upload);

module.exports = router;
