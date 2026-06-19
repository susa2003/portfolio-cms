const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const express = require("express");
const mongoose = require("mongoose");
const uploadRoutes =
  require("./routes/uploadRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/uploads",
  express.static("uploads")
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use(
  "/api/upload",
  uploadRoutes
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
