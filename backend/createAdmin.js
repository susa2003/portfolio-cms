const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI);

async function createAdmin() {
  try {
    const existing = await User.findOne({
      email: "admin@sudharsan.dev",
    });

    if (existing) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("susa001@", 10);

    await User.create({
      name: "Sudharsan K",
      email: "admin@susa.dev",
      password: hashedPassword,
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
}

createAdmin();
