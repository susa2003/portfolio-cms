const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const router = express.Router();
router.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});
router.get("/seed-admin", async (req, res) => {
  const bcrypt = require("bcryptjs");

  const hashedPassword =
    await bcrypt.hash("susa001@", 10);

  const user = await User.create({
    name: "Sudharsan K",
    email: "admin@susa.dev",
    password: hashedPassword,
  });

  res.json(user);
});



router.get("/", (req, res) => {
  res.send("Auth Route Working");
});

router.post("/login", async (req, res) => {
  console.log("BODY =>", req.body);

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log("USER =>", user);

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      name: user.name,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;
