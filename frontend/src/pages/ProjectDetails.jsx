import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      const res = await api.get(`/projects/${id}`);
      setProject(res.data);
    };

    loadProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
  <div className="min-h-screen bg-[#030712] text-white px-6 py-24">
    <div className="max-w-4xl mx-auto">

      <h1 className="text-5xl font-bold mb-8">
        {project.title}
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        {project.description}
      </p>

      {project.technologies?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                px-4 py-2
                rounded-full
                bg-cyan-500/10
                border border-cyan-400/20
                text-cyan-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </>
      )}

      <div className="flex gap-4">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            px-6 py-3
            rounded-2xl
            border border-white/10
            hover:border-cyan-400
            transition
            "
          >
            GitHub
          </a>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="
            px-6 py-3
            rounded-2xl
            bg-cyan-500
            text-black
            font-semibold
            "
          >
            Live Demo
          </a>
        )}

      </div>

    </div>
  </div>
);
}
