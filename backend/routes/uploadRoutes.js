const express = require("express");
const multer = require("multer");

const Portfolio = require("../models/Portfolio");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

 filename: (req, file, cb) => {
  const ext =
    file.originalname.split(".").pop();

  cb(
    null,
    Date.now() + "." + ext
  );
},
});

const upload = multer({
  storage,
});

router.post(
  "/resume",
  upload.single("resume"),
  async (req, res) => {

    const filePath =
      `/uploads/${req.file.filename}`;

    const portfolio =
      await Portfolio.findOne();

    if (portfolio) {
      portfolio.resume = filePath;
      await portfolio.save();

      return res.json(portfolio);
    }

    const newPortfolio =
      await Portfolio.create({
        resume: filePath,
      });

    res.json(newPortfolio);
  }
);
router.post(
  "/hero-image",
  upload.single("image"),
  async (req, res) => {

    const filePath =
      `/uploads/${req.file.filename}`;

    const portfolio =
      await Portfolio.findOne();

    portfolio.hero.image = filePath;

    await portfolio.save();

    res.json(portfolio);
  }
);

module.exports = router;
