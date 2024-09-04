const Image = require("../models/Image");
const fs = require("fs");

exports.createImage = (req, res, next) => {
  const image = new Image({
    title: req.body.title,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });
  image
    .save()
    .then(() => res.status(201).json({ message: "Image enregistrée !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllImages = (req, res, next) => {
  Image.find()
    .then((images) => res.status(200).json(images))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneImage = (req, res, next) => {
  Image.findOne({ _id: req.params.id })
    .then((image) => res.status(200).json(image))
    .catch((error) => res.status(404).json({ error }));
};

exports.updateImage = (req, res, next) => {
  const image = {
    title: req.body.title,
    imageUrl: req.file ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}` : req.body.imageUrl,
  };
  Image.updateOne({ _id: req.params.id }, { ...image, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Image modifiée !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteImage = (req, res, next) => {
  Image.findOne({ _id: req.params.id })
    .then((image) => {
      const filename = image.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Image.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Image supprimée ! " }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};
