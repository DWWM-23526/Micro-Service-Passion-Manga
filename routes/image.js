const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const imageController = require("../controllers/image");

router.post("/", multer, imageController.createImage);

router.get("/", imageController.getAllImages);

router.get("/:id", imageController.getOneImage);

router.put("/:id", multer, imageController.updateImage);

router.delete("/:id", imageController.deleteImage);

module.exports = router;
