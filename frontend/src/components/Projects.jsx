import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
 const navigate = useNavigate();
 
  useEffect(() => {
    const loadProjects = async () => {
      const res = await api.get("/projects");
      setProjects(res.data);
    };

    loadProjects();
  }, []);

  return (
    <section
  id="projects"
  className="max-w-6xl mx-auto px-6 py-24"
>
      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
  <div
  key={project._id}
  onClick={() =>
    navigate(`/project/${project._id}`)
  }
  className="
  bg-white/5
  backdrop-blur-xl
  border border-white/10
  rounded-3xl
  p-6
  cursor-pointer

  hover:border-cyan-400
  hover:bg-white/[0.08]
  hover:-translate-y-2
  hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]

  transition-all
  duration-300
  "
>
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>
            <div className="mt-6 text-cyan-400 text-sm font-medium">
  View Details →
</div>
          </div>
        ))}
      </div>
    </section>
  );
}
