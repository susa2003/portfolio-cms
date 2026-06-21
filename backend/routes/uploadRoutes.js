const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const Portfolio = require("../models/Portfolio");

const router = express.Router();

/* Hero Image Storage */
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "portfolio-cms/images",
    resource_type: "image",
  },
});

/* Resume PDF Storage */
const resumeStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "portfolio-cms/resumes",
    resource_type: "raw",
  },
});

const imageUpload = multer({
  storage: imageStorage,
});

const resumeUpload = multer({
  storage: resumeStorage,
});

/* Resume Upload */
router.post(
  "/resume",
  resumeUpload.single("resume"),
  async (req, res) => {
    const filePath = req.file.path;

    const portfolio = await Portfolio.findOne();

    if (portfolio) {
      portfolio.resume = filePath;
      await portfolio.save();

      return res.json(portfolio);
    }

    const newPortfolio = await Portfolio.create({
      resume: filePath,
    });

    res.json(newPortfolio);
  }
);

/* Hero Image Upload */
router.post(
  "/hero-image",
  imageUpload.single("image"),
  async (req, res) => {
    const filePath = req.file.path;

    const portfolio = await Portfolio.findOne();

    portfolio.hero.image = filePath;

    await portfolio.save();

    res.json(portfolio);
  }
);

module.exports = router;
