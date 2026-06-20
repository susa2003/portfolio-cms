const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
router.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});
const router = express.Router();

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
