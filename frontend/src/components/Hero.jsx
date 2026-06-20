import { useEffect, useState } from "react";
import api from "../services/api";
import { motion } from "framer-motion";

export default function Hero() {
const [portfolio, setPortfolio] = useState(null);

useEffect(() => {
  const loadPortfolio = async () => {
    const res = await api.get("/portfolio");
    setPortfolio(res.data);
  };

  loadPortfolio();
}, []);
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">

<div className="
grid
grid-cols-1
lg:grid-cols-[3.30fr_2.50fr]
gap-12
lg:gap-28
items-center
">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-cyan-400 text-lg mb-4">
              {portfolio?.hero?.role}
            </p>

<h1 className="
text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl
font-bold
leading-none
break-words
">
  {portfolio?.hero?.name}
</h1>
            <p className="text-gray-400 text-xl mt-6 max-w-xl">
               {portfolio?.hero?.description}
            </p>

            <div className="
mt-10
flex
flex-col
sm:flex-row
gap-4
">
             <a
  href="#projects"
  className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold inline-block hover:scale-105 transition"
>
  View Projects
</a>
<a
  href={
  portfolio?.resume
    ? `${import.meta.env.VITE_BACKEND_URL}${portfolio.resume}`
    : "#"
}
  target="_blank"
  rel="noreferrer"
  className="px-8 py-4 rounded-2xl border border-white/20 inline-block hover:bg-white/10 transition"
>
  View Resume
</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
           <div className="relative flex justify-center items-center group "> 

            <div className="absolute w-[420px] h-[420px] bg-cyan-500/8 blur-[120px] rounded-full" />

{/* Java */}
<div className="
hidden lg:block
absolute -top-14 left-1/2 -translate-x-1/2
opacity-0 scale-75
group-hover:opacity-100
group-hover:scale-100
transition-all duration-500
">
  <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
    Java
  </span>
</div>

{/* React */}
<div className="
hidden lg:block
absolute top-20 -left-25
opacity-0 scale-75
group-hover:opacity-100
group-hover:scale-100
transition-all duration-500
">
  <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30">
    React.js
  </span>
</div>
{/* Node */}
<div className="
hidden lg:block
absolute bottom-24 -left-24
opacity-0 scale-75
group-hover:opacity-100
group-hover:scale-100
transition-all duration-500
">

  <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
    Node.js
  </span>
</div>

{/* MongoDB */}
<div className="
hidden lg:block
absolute top-20 -right-30
opacity-0 scale-75
group-hover:opacity-100
group-hover:scale-100
transition-all duration-500
">
  <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30">
    MongoDB
  </span>
</div>

{/* PostgreSQL */}
<div className="
hidden lg:block
absolute bottom-24 -right-33
opacity-0 scale-75
group-hover:opacity-100
group-hover:scale-100
transition-all duration-500
">
  <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
    PostgreSQL
  </span>
</div>

{/* Django */}
<div className="
hidden lg:block
absolute -bottom-14 left-1/2 -translate-x-1/2
opacity-0 scale-75
group-hover:opacity-100
group-hover:scale-100
transition-all duration-500
">
  <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30">
    Django
  </span>
</div>

<div className="absolute w-[300px] h-[300px] bg-purple-500/8 blur-[100px] rounded-full right-10 bottom-10" /> 
<img
   src={
    portfolio?.hero?.image
      ? `${import.meta.env.VITE_BACKEND_URL}${portfolio.hero.image}`
      : "/profile.png"
  }
  alt="Sudharsan"
className="
w-full
max-w-[320px]
sm:max-w-[380px]
md:max-w-[500px]
lg:max-w-[720px]
rounded-[40px]
overflow-hidden
border
border-white/10
hover:scale-[1.02]
transition-all
duration-500
"
/>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
