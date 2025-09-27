// src/components/Hero.jsx
import React from "react";

/* Hero Section */
export default function Hero() {
  // resolves to <base>/images/headshot.jpg (works with vite base config)
  const headshotSrc = `${import.meta.env.BASE_URL}images/headshot.jpg`;

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center
             bg-gradient-to-b from-teal-500 via-purple-600 to-indigo-700 text-white px-6
             pt-32"
      >
        {/* headshot + gradient ring */}
        <div className="mb-6">
          <div
            className="w-40 h-40 md:w-60 md:h-60 rounded-full p-1
                       bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white/6">
              <img
                src={headshotSrc}
                alt="Narasimha Bhat"
                className="w-full h-full object-cover rounded-full scale-[1.25]"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Narasimha Bhat</h1>

        <h2 className="text-lg md:text-2xl text-white/90 mb-6">
          Principal UX Designer · AI-Augmented Experience Designer
        </h2>

        <p className="max-w-xl text-base md:text-lg text-white/85 mb-8">
          I design human-centered, AI-driven digital experiences that simplify
          complexity, drive measurable impact, and scale across global enterprises.
        </p>

        {/* Social icons */}
        <div className="flex space-x-6 mb-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/narasimha-bhat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transform transition hover:scale-110"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A66C2] shadow-lg hover:brightness-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V24h-4V8z" />
              </svg>
            </span>
          </a>

          {/* X (formerly Twitter) */}
          <a
            href="https://twitter.com/IaMSimha007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="transform transition hover:scale-110"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-black shadow-lg hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H17.52l-5.482-7.182-6.272 7.182H2.457l7.73-8.86L1.953 2.25h6.948l4.944 6.56z" />
              </svg>
            </span>
          </a>

          {/* Gmail (email) */}
          <a
            href="mailto:bhatnarasimha1991@gmail.com"
            aria-label="Email"
            className="transform transition hover:scale-110"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-orange-400 to-rose-400 ring-1 ring-white/15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 13.065L.014 6h23.972L12 13.065zm0 2.021L.014 8.021V20h23.972V8.021L12 15.086z" />
              </svg>
            </span>
          </a>
        </div>

        <a
          href="#featured"
          className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-white/90 transition"
        >
          View My Work
        </a>
      </section>
      {/* Hero Section Ends */}
    </>
  );
}
