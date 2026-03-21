import { useEffect, useState } from "react";

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white">

      {/* ✨ Cursor Glow */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-3xl opacity-30 transition-transform duration-75 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)",
          transform: `translate(${position.x - 200}px, ${position.y - 200}px)`
        }}
      />

      {/* 🌫️ Subtle Parallax Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* Content */}
     <div className="relative z-10 max-w-4xl text-center px-6">

  <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
    Narasimha Bhat
  </p>

  <h1 className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
      Designing clarity in <br className="hidden md:block" />
      complex systems  
  </h1>

  <p className="mt-6 text-lg md:text-xl text-gray-300">
    Principal UX Designer · AI-driven experiences · Enterprise platforms
  </p>

  <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
    I solve ambiguous problems by bringing structure, aligning stakeholders, 
    and creating user-centered solutions that drive measurable business impact.
  </p>

       <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

  {/* Primary CTA */}
  <a
    href="#work"
    className="px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-200 transition"
  >
    View Work
  </a>

  {/* Secondary CTA */}
  <a
    href="/narasimha-portfolio/Narasimha_Bhat_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition"
  >
    Download CV
  </a>

</div>

</div>

    </section>
  );
}
