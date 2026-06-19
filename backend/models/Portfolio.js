const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    about: {
      type: String,
      default: "",
    },
    resume: {
      type: String,
      default: "",
     
},
    hero: {
  name: {
    type: String,
    default: "Sudharsan K",
  },

  role: {
    type: String,
    default: "FULL STACK DEVELOPER",
  },

  description: {
    type: String,
    default:
      "Building scalable web applications, modern user experiences and real-world software solutions.",
  },

  image: {
    type: String,
    default: "/profile.png",
  },
},
    skills: {
      frontend: {
        type: [String],
        default: [],
      },

      backend: {
        type: [String],
        default: [],
      },

      database: {
        type: [String],
        default: [],
      },

      tools: {
        type: [String],
        default: [],
      },
    },

    contact: {
      email: {
        type: String,
        default: "",
      },

      phone: {
        type: String,
        default: "",
      },

      location: {
        type: String,
        default: "",
      },

      github: {
        type: String,
        default: "",
      },

      linkedin: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Portfolio",
  portfolioSchema
);
