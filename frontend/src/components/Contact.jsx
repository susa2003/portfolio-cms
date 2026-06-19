import { useEffect, useState } from "react";
import api from "../services/api";

import {
  FaGithub,
  FaLinkedin,
  FaGitlab,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
const [contact, setContact] = useState({
  email: "",
  phone: "",
  location: "",
  github: "",
  linkedin: "",
});

useEffect(() => {
  const loadContact = async () => {
    const res = await api.get("/portfolio");

    if (res.data?.contact) {
      setContact(res.data.contact);
    }
  };

  loadContact();
}, []);
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Contact
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="
          block
          bg-white/5
          border border-white/10
          rounded-3xl
          p-6
          cursor-pointer
          hover:border-cyan-400
          hover:bg-white/[0.08]
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
          transition-all
          duration-300
          "
        >
          <FaEnvelope className="text-cyan-400 text-3xl mb-4" />

          <h3 className="font-semibold mb-2">
            Email
          </h3>

          <p className="text-gray-400">
            {contact.email}
          </p>
        </a>

        {/* Phone */}
        <a
          href={`tel:${contact.phone}`}
          className="
          block
          bg-white/5
          border border-white/10
          rounded-3xl
          p-6
          cursor-pointer
          hover:border-cyan-400
          hover:bg-white/[0.08]
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
          transition-all
          duration-300
          "
        >
          <FaPhone className="text-cyan-400 text-3xl mb-4" />

          <h3 className="font-semibold mb-2">
            Phone
          </h3>

          <p className="text-gray-400">
           {contact.phone}
          </p>
        </a>

        {/* Location */}
        <div
          className="
          bg-white/5
          border border-white/10
          rounded-3xl
          p-6
          hover:border-cyan-400
          hover:bg-white/[0.08]
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
          transition-all
          duration-300
          "
        >
          <FaMapMarkerAlt className="text-cyan-400 text-3xl mb-4" />

          <h3 className="font-semibold mb-2">
            Location
          </h3>

          <p className="text-gray-400">
            {contact.location}
          </p>
        </div>

      </div>

      <div className="flex gap-8 mt-12 text-4xl">

        <a
         href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="
          hover:text-cyan-400
          hover:scale-125
          transition-all
          duration-300
          "
        >
          <FaGithub />
        </a>

        <a
         href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="
          hover:text-cyan-400
          hover:scale-125
          transition-all
          duration-300
          "
        >
          <FaLinkedin />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="
          hover:text-cyan-400
          hover:scale-125
          transition-all
          duration-300
          "
        >
          <FaGitlab />
        </a>

      </div>
    </section>
  );
}
