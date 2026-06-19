const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
});
router.get("/:id", async (req, res) => {
  const project =
    await Project.findById(req.params.id);

  res.json(project);
});

router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
});

router.put("/:id", async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(project);
});

module.exports = router;
