import { useEffect, useState } from "react";
import api from "../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/admin");
  }
}, []);


const [projects, setProjects] = useState([]);
const [editingId, setEditingId] = useState(null);
const [newProject, setNewProject] = useState({
  title: "",
  description: "",
  github: "",
  liveLink: "",
  technologies: "",
});
const [heroImage, setHeroImage] = useState(null);
const [resumeFile, setResumeFile] = useState(null);
  const [portfolio, setPortfolio] = useState({
    hero: {
  name: "",
  role: "",
  description: "",
  image: "",
},
    
    about: "",
    skills: {
      frontend: [],
      backend: [],
      database: [],
      tools: [],
    },
    contact: {
      email: "",
      phone: "",
      location: "",
      github: "",
      linkedin: "",
    },
  });

  useEffect(() => {
    loadPortfolio();
     loadProjects();
  }, []);
const loadProjects = async () => {
  const res = await api.get("/projects");
  setProjects(res.data);
};
  const loadPortfolio = async () => {
    const res = await api.get("/portfolio");
    
  console.log("PORTFOLIO =", res.data);

    if (res.data) {
      setPortfolio(res.data);
    }
  };

  const savePortfolio = async () => {
    await api.put("/portfolio", portfolio);
    alert("Saved Successfully");
  };
  const addProject = async () => {
  await api.post("/projects", {
    ...newProject,
    technologies: newProject.technologies
      .split(",")
      .map((t) => t.trim()),
  });

  setNewProject({
    title: "",
    description: "",
    github: "",
    liveLink: "",
    technologies: "",
  });

  loadProjects();
};

const deleteProject = async (id) => {
  if (!window.confirm("Delete Project?")) {
    return;
  }

  await api.delete(`/projects/${id}`);

  loadProjects();
};
const uploadResume = async () => {
  if (!resumeFile) {
    alert("Select a PDF");
    return;
  }

  const formData = new FormData();

  formData.append(
    "resume",
    resumeFile
  );

  await axios.post(
    `${import.meta.env.VITE_API_URL}/upload/resume`,
    formData
  );

  alert("Resume Uploaded");

  loadPortfolio();
}; 
const uploadHeroImage = async () => {
  if (!heroImage) {
    alert("Select Image");
    return;
  }

  const formData = new FormData();

  formData.append(
    "image",
    heroImage
  );

  await axios.post(
    `${import.meta.env.VITE_API_URL}/upload/hero-image`,
    formData
  );

  alert("Hero Image Uploaded");

  loadPortfolio();
};
const editProject = (project) => {
  setEditingId(project._id);

  setNewProject({
    title: project.title || "",
    description: project.description || "",
    github: project.github || "",
    liveLink: project.liveLink || "",
    technologies:
      project.technologies?.join(", ") || "",
  });
};

const updateProject = async () => {
  await api.put(`/projects/${editingId}`, {
    ...newProject,
    technologies: newProject.technologies
      .split(",")
      .map((t) => t.trim()),
  });

  setEditingId(null);

  setNewProject({
    title: "",
    description: "",
    github: "",
    liveLink: "",
    technologies: "",
  });

  loadProjects();
};

  return (
    <div className="max-w-6xl mx-auto p-8 text-white">
      <h1 className="text-5xl font-bold mb-10">
        Portfolio CMS
      </h1>
      <button
    onClick={() => {
      localStorage.removeItem("token");
      navigate("/admin");
    }}
    className="
    px-4 py-2
    bg-red-500
    rounded-xl
    font-semibold
    "
  >
    Logout
  </button>

      {/* About */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          About
        </h2>

        <textarea
          rows={6}
          value={portfolio.about}
          onChange={(e) =>
            setPortfolio({
              ...portfolio,
              about: e.target.value,
            })
          }
          className="w-full bg-black/20 border border-white/10 rounded-2xl p-4"
        />
      </div>

      {/* Skills */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Skills
        </h2>

        <input
          className="w-full mb-3 p-3 rounded-xl bg-black/20"
          value={portfolio.skills.frontend.join(", ")}
          onChange={(e) =>
            setPortfolio({
              ...portfolio,
              skills: {
                ...portfolio.skills,
                frontend: e.target.value.split(","),
              },
            })
          }
          placeholder="Frontend Skills"
        />

        <input
          className="w-full mb-3 p-3 rounded-xl bg-black/20"
          value={portfolio.skills.backend.join(", ")}
          onChange={(e) =>
            setPortfolio({
              ...portfolio,
              skills: {
                ...portfolio.skills,
                backend: e.target.value.split(","),
              },
            })
          }
          placeholder="Backend Skills"
        />
        <input
  className="w-full mb-3 p-3 rounded-xl bg-black/20"
  value={portfolio.skills.database.join(", ")}
  onChange={(e) =>
    setPortfolio({
      ...portfolio,
      skills: {
        ...portfolio.skills,
        database: e.target.value.split(","),
      },
    })
  }
  placeholder="Database Skills"
/>

<input
  className="w-full mb-3 p-3 rounded-xl bg-black/20"
  value={portfolio.skills.tools.join(", ")}
  onChange={(e) =>
    setPortfolio({
      ...portfolio,
      skills: {
        ...portfolio.skills,
        tools: e.target.value.split(","),
      },
    })
  }
  placeholder="Tools Skills"
/>
      </div>
{/* Hero */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

  <h2 className="text-2xl font-bold mb-4">
    Hero Section
  </h2>

  <input
    className="w-full mb-3 p-3 rounded-xl bg-black/20"
    value={portfolio.hero?.name || ""}
    placeholder="Name"
    onChange={(e) =>
      setPortfolio({
        ...portfolio,
        hero: {
          ...portfolio.hero,
          name: e.target.value,
        },
      })
    }
  />

  <input
    className="w-full mb-3 p-3 rounded-xl bg-black/20"
    value={portfolio.hero?.role || ""}
    placeholder="Role"
    onChange={(e) =>
      setPortfolio({
        ...portfolio,
        hero: {
          ...portfolio.hero,
          role: e.target.value,
        },
      })
    }
  />

  <textarea
    rows={4}
    className="w-full p-3 rounded-xl bg-black/20"
    value={portfolio.hero?.description || ""}
    placeholder="Hero Description"
    onChange={(e) =>
      setPortfolio({
        ...portfolio,
        hero: {
          ...portfolio.hero,
          description: e.target.value,
        },
      })
    }
  />
</div>
<div className="mt-4">

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setHeroImage(
        e.target.files[0]
      )
    }
  />

  <button
    onClick={uploadHeroImage}
    className="
    ml-4
    px-5
    py-2
    bg-purple-500
    rounded-xl
    "
  >
    Upload Hero Image
  </button>

</div>

      {/* Contact */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Contact
        </h2>

        <input
          className="w-full mb-3 p-3 rounded-xl bg-black/20"
          value={portfolio.contact.email}
          placeholder="Email"
          onChange={(e) =>
            setPortfolio({
              ...portfolio,
              contact: {
                ...portfolio.contact,
                email: e.target.value,
              },
            })
          }
        />

        <input
          className="w-full mb-3 p-3 rounded-xl bg-black/20"
          value={portfolio.contact.phone}
          placeholder="Phone"
          onChange={(e) =>
            setPortfolio({
              ...portfolio,
              contact: {
                ...portfolio.contact,
                phone: e.target.value,
              },
            })
          }
        />
      
<input
  className="w-full mb-3 p-3 rounded-xl bg-black/20"
  value={portfolio.contact.location}
  placeholder="Location"
  onChange={(e) =>
    setPortfolio({
      ...portfolio,
      contact: {
        ...portfolio.contact,
        location: e.target.value,
      },
    })
  }
/>

<input
  className="w-full mb-3 p-3 rounded-xl bg-black/20"
  value={portfolio.contact.github}
  placeholder="GitHub URL"
  onChange={(e) =>
    setPortfolio({
      ...portfolio,
      contact: {
        ...portfolio.contact,
        github: e.target.value,
      },
    })
  }
/>

<input
  className="w-full mb-3 p-3 rounded-xl bg-black/20"
  value={portfolio.contact.linkedin}
  placeholder="LinkedIn URL"
  onChange={(e) =>
    setPortfolio({
      ...portfolio,
      contact: {
        ...portfolio.contact,
        linkedin: e.target.value,
      },
    })
  }
/></div>
      <button
        onClick={savePortfolio}
        className="px-8 py-4 bg-cyan-500 text-black rounded-2xl font-bold"
      >
        Save Changes
      </button>
      {/* Projects */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-6 mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Projects
  </h2>

  <input
    className="w-full mb-3 p-3 rounded-xl bg-black/20"
    placeholder="Project Title"
    value={newProject.title}
    onChange={(e) =>
      setNewProject({
        ...newProject,
        title: e.target.value,
      })
    }
  />

  <textarea
    className="w-full mb-3 p-3 rounded-xl bg-black/20"
    placeholder="Project Description"
    value={newProject.description}
    onChange={(e) =>
      setNewProject({
        ...newProject,
        description: e.target.value,
      })
    }
  />

  <input
    className="w-full mb-3 p-3 rounded-xl bg-black/20"
    placeholder="GitHub Link"
    value={newProject.github}
    onChange={(e) =>
      setNewProject({
        ...newProject,
        github: e.target.value,
      })
    }
  />

  <input
    className="w-full mb-3 p-3 rounded-xl bg-black/20"
    placeholder="Live Link"
    value={newProject.liveLink}
    onChange={(e) =>
      setNewProject({
        ...newProject,
        liveLink: e.target.value,
      })
    }
  />

  <input
    className="w-full mb-4 p-3 rounded-xl bg-black/20"
    placeholder="Technologies (React, Node, MongoDB)"
    value={newProject.technologies}
    onChange={(e) =>
      setNewProject({
        ...newProject,
        technologies: e.target.value,
      })
    }
  />

<button
  onClick={
    editingId
      ? updateProject
      : addProject
  }
  className="
  px-6 py-3
  bg-green-500
  text-black
  rounded-xl
  font-bold
  "
>
  {editingId
    ? "Update Project"
    : "Add Project"}
</button>

  <div className="mt-8 space-y-4">
    {projects.map((project) => (
      <div
        key={project._id}
        className="
        border border-white/10
        rounded-2xl
        p-4
        flex
        justify-between
        items-center
        "
      >
        <div>
          <h3 className="font-bold">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {project.description}
          </p>
        </div>
<button
  onClick={() => editProject(project)}
  className="
  px-4 py-2
  bg-blue-500
  rounded-xl
  mr-2
  "
>
  Edit
</button>

        <button
          onClick={() =>
            deleteProject(project._id)
          }
          className="
          px-4 py-2
          bg-red-500
          rounded-xl
          "
        >
          Delete
        </button>
      </div>
      
    ))}
  </div>
<div className="bg-white/5 border border-white/10 rounded-3xl p-6 mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Resume Upload
  </h2>

  <input
    type="file"
    accept=".pdf"
    onChange={(e) =>
      setResumeFile(
        e.target.files[0]
      )
    }
    className="mb-4"
  />

  <br />

  <button
    onClick={uploadResume}
    className="
    px-6 py-3
    bg-purple-500
    text-white
    rounded-xl
    font-bold
    "
  >
    Upload Resume
  </button>

</div>

</div>
    </div>
  );
}
