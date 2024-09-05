const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const imageController = require("../controllers/image");
const auth = require('../middleware/auth')

router.post("/", multer, imageController.createImage);

router.get("/" , imageController.getAllImages);

router.get("/:id", imageController.getOneImage);

router.put("/:id", multer, auth, imageController.updateImage);

router.delete("/:id",auth , imageController.deleteImage);

module.exports = router;
