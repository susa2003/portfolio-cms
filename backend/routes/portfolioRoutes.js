const express = require("express");
const Portfolio = require("../models/Portfolio");

const router = express.Router();

router.get("/seed", async (req, res) => {
  await Portfolio.deleteMany({});

  const portfolio = await Portfolio.create({
    about:
      "I am a Full Stack Developer passionate about building scalable web applications and modern digital experiences.",
hero: {
  name: "Sudharsan K",
  role: "FULL STACK DEVELOPER",
  description:
    "Building scalable web applications, modern user experiences and real-world software solutions.",
  image: "/profile.png",
},
    skills: {
      frontend: [
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],

      backend: [
        "Node.js",
        "Express.js",
        "Django",
        "Wagtail CMS",
        "Spring Boot",
      ],

      database: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
      ],

      tools: [
        "Git",
        "Linux",
        "Postman",
        "MongoDB Atlas",
        "Sublime Text",
      ],
    },

    contact: {
      email: "ksudharsan233@gmail.com",
      phone: "7397623667",
      location: "Tamil Nadu, India",
      github: "https://github.com/susa2003",
      linkedin:
        "https://www.linkedin.com/in/sudharsan-k-60861122a/",
    },
  });

  res.json(portfolio);
});

router.get("/", async (req, res) => {
  const portfolio = await Portfolio.findOne();
  res.json(portfolio);
});

router.put("/", async (req, res) => {
  const portfolio = await Portfolio.findOneAndUpdate(
    {},
    req.body,
    {
      new: true,
      upsert: true,
    }
  );

  res.json(portfolio);
});

module.exports = router;
