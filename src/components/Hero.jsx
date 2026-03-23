import { useEffect, useState } from "react";

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse position (cursor glow)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white">

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-3xl opacity-30 transition-transform duration-75 ease-out"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)",
          transform: `translate(${position.x - 200}px, ${position.y - 200}px)`
        }}
      />

      {/* Subtle Parallax Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">

        {/* Headline (moved to top) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          Designing clarity for complex systems at scale
        </h1>

        <br />

        {/* Name */}
        <p className="mt-6 text-lg md:text-xl font-medium text-gray-300">
          Narasimha Bhat
        </p>

        {/* Supporting Line */}
        <p className="mt-2 text-base md:text-lg text-gray-400">
          Principal UX Designer · AI-driven experiences · Enterprise platforms
        </p>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I bring structure to ambiguity—aligning stakeholders and designing solutions that drive measurable business impact.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

          <a
            href="#work"
            className="px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-200 transition"
          >
            View Case Studies
          </a>

          <a
              href="https://flowcv.com/resume/devm3a6kbcm3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition"
          >
             View Resume
          </a>

        </div>

      </div>
    </section>
  );
}
