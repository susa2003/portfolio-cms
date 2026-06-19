import { useEffect, useState } from "react";
import api from "../services/api";

export default function Skills() {
  const [skills, setSkills] = useState({
    frontend: [],
    backend: [],
    database: [],
    tools: [],
  });

  useEffect(() => {
    const loadSkills = async () => {
      const res = await api.get("/portfolio");

      if (res.data?.skills) {
        setSkills(res.data.skills);
      }
    };

    loadSkills();
  }, []);

  const cardClass = `
    bg-white/5
    border border-white/10
    rounded-3xl
    p-8
    hover:border-cyan-400
    hover:bg-white/[0.08]
    hover:-translate-y-2
    hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
    transition-all
    duration-300
  `;

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold mb-16">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Frontend */}
        <div className={cardClass}>
          <h3 className="text-cyan-400 font-semibold text-xl mb-6">
            Frontend
          </h3>

          <div className="space-y-3 text-gray-300">
            {skills.frontend.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className={cardClass}>
          <h3 className="text-cyan-400 font-semibold text-xl mb-6">
            Backend
          </h3>

          <div className="space-y-3 text-gray-300">
            {skills.backend.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className={cardClass}>
          <h3 className="text-cyan-400 font-semibold text-xl mb-6">
            Database
          </h3>

          <div className="space-y-3 text-gray-300">
            {skills.database.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className={cardClass}>
          <h3 className="text-cyan-400 font-semibold text-xl mb-6">
            Tools
          </h3>

          <div className="space-y-3 text-gray-300">
            {skills.tools.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
