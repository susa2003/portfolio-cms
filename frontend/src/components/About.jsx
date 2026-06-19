import { useEffect, useState } from "react";
import api from "../services/api";

export default function About() {
  const [about, setAbout] = useState("");

  useEffect(() => {
    const loadAbout = async () => {
      const res = await api.get("/portfolio");

      if (res.data) {
        setAbout(res.data.about);
      }
    };

    loadAbout();
  }, []);

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-8">
        About Me
      </h2>

      <div>
        <p className="text-lg leading-8 text-gray-300">
          {about}
        </p>
      </div>
    </section>
  );
}
