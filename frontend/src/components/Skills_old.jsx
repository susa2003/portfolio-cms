export default function Skills() {
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
        <div
          className="
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
          "
        >
          <h3 className="text-cyan-400 font-semibold text-xl mb-6">
            Frontend
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>React.js</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Tailwind CSS</p>
          </div>
        </div>

        {/* Backend */}
        <div
          className="
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
          "
        >
          <h3 className="text-cyan-400 font-semibold text-xl mb-6">
            Backend
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Django</p>
            <p>Wagtail CMS</p>
            <p>Spring Boot</p>
          </div>
        </div>

        {/* Database */}
        <div
          className="
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
          "
        >
          <h3 className="text-cyan-400 font-semibold text-xl mb-6">
            Database
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>MongoDB</p>
            <p>MySQL</p>
            <p>PostgreSQL</p>
          </div>
        </div>

        {/* Tools */}
        <div
          className="
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
          "
        >
          <h3 className="text-cyan-400 font-semibold text-xl mb-6">
            Tools
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>Git</p>
            <p>Linux</p>
            <p>Postman</p>
            <p>MongoDB Atlas</p>
            <p>Sublime Text</p>
          </div>
        </div>

      </div>
    </section>
  );
} 
