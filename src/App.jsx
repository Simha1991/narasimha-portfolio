// src/App.jsx
import React, { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  // ✅ Define headshotSrc here so it’s available during render
  const headshotSrc = `${import.meta.env.BASE_URL}images/headshot.jpg`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex justify-center items-center p-4">
          <div className="space-x-6 font-medium">
            <a href="#about" className="text-white hover:text-gray-200 transition">
              About
            </a>
            <a href="#skills" className="text-white hover:text-gray-200 transition">
              Skills
            </a>
            <a href="#experience" className="text-white hover:text-gray-200 transition">
              Experience
            </a>
            <a href="#projects" className="text-white hover:text-gray-200 transition">
              Projects
            </a>
            <a href="#testimonials" className="text-white hover:text-gray-200 transition">
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-gray-200 transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white px-6"
      >
        {/* Headshot with gradient ring */}
        <div className="w-60 h-60 rounded-full mb-6">
          <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600">
            <div className="w-60 h-60 rounded-full overflow-hidden bg-white/5">
              <img
                src={headshotSrc}
                alt="Narasimha Bhat"
                className="w-full h-full object-cover object-center rounded-full scale-125"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">Narasimha Bhat</h1>
        <h2 className="text-2xl text-blue-200 mb-6">
          Principal UX Designer · AI-Augmented Experience Designer
        </h2>
        <p className="max-w-xl text-lg text-gray-300 mb-8">
          I design human-centered, AI-driven digital experiences that simplify
          complexity, drive measurable impact, and scale across global enterprises.
        </p>

        {/* Social icons (gradient ring + circular background) */}
        <div className="flex space-x-6 mb-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/narasimha-bhat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transform transition hover:scale-110"
          >
            <span className="p-0.5 rounded-full bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V24h-4V8z"/>
                </svg>
              </span>
            </span>
          </a>

          {/* X / Twitter */}
          <a
            href="https://twitter.com/IaMSimha007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="transform transition hover:scale-110"
          >
            <span className="p-0.5 rounded-full bg-gradient-to-tr from-white/5 to-white/5"> 
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/6 ring-1 ring-white/6 hover:bg-white/12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true">
                  <path d="M23.643 4.937c-.8.36-1.66.6-2.56.71a4.48 4.48 0 0 0 1.96-2.47 8.9 8.9 0 0 1-2.83 1.08 4.46 4.46 0 0 0-7.6 4.06A12.65 12.65 0 0 1 3.15 3.16a4.46 4.46 0 0 0 1.38 5.95 4.39 4.39 0 0 1-2.02-.56v.06c0 2.08 1.48 3.82 3.44 4.21a4.44 4.44 0 0 1-2.01.08 4.47 4.47 0 0 0 4.17 3.1A8.95 8.95 0 0 1 1.1 19.54a12.61 12.61 0 0 0 6.84 2.01c8.2 0 12.7-6.8 12.7-12.7 0-.19 0-.39-.01-.58a9.1 9.1 0 0 0 2.24-2.33z"/>
                </svg>
              </span>
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:bhatnarasimha1991@gmail.com"
            aria-label="Email"
            className="transform transition hover:scale-110"
          >
            <span className="p-0.5 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-400 to-rose-400">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor" aria-hidden="true">
                  <path d="M12 13.065L.014 6h23.972L12 13.065zm0 2.021L.014 8.021V20h23.972V8.021L12 15.086z"/>
                </svg>
              </span>
            </span>
          </a>
        </div>

        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          View My Work
        </a>
      </section>
      {/* Hero section ends */}

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 max-w-4xl mx-auto text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I’m a Principal UX Designer specializing in AI-augmented experiences.
          With a strong background in human-centered design, I’ve led award-winning
          projects that streamlined workflows, reduced costs, and created
          delightful user experiences. My focus is bridging design and emerging
          technologies to build scalable, future-ready digital products.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-white rounded-lg shadow">Designing with AI</div>
          <div className="p-4 bg-white rounded-lg shadow">UX Strategy</div>
          <div className="p-4 bg-white rounded-lg shadow">Prototyping</div>
          <div className="p-4 bg-white rounded-lg shadow">Design Systems</div>
          <div className="p-4 bg-white rounded-lg shadow">Agile Coach (Kanban)</div>
          <div className="p-4 bg-white rounded-lg shadow">Figma Guru & Mentor</div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">
              Principal UX Designer — Dell Technologies
            </h3>
            <p className="text-gray-600 mt-2">
              Led UX for enterprise-scale products including award-winning Digital
              Entry Point, Unified Portal, and Virtual Assistant, delivering
              measurable impact across efficiency, adoption, and cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Digital Entry Point</h3>
            <p className="text-gray-600 mb-4">
              Award-winning product saving $37M+ by revolutionizing device
              registration & lifecycle.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Unified Portal</h3>
            <p className="text-gray-600 mb-4">
              Unified experience for ISG customers with improved IA and
              capability mapping.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Virtual Assistant</h3>
            <p className="text-gray-600 mb-4">
              AI-powered conversational design reducing self-service start time
              by 71%.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="p-6 bg-gray-50 rounded-lg shadow italic">
            "Narasimha consistently delivers high-quality design work—even on tight
            timelines—without ever compromising on excellence."
            <span className="block mt-2 font-semibold">— Todd Boyum</span>
          </blockquote>
          <blockquote className="p-6 bg-gray-50 rounded-lg shadow italic">
            "Ambitious, dedicated, and loyal, Simha delivers excellence as an
            individual contributor and thrives in leadership roles."
            <span className="block mt-2 font-semibold">— Jason Cook</span>
          </blockquote>
          <blockquote className="p-6 bg-gray-50 rounded-lg shadow italic">
            "Simha has a toolkit of UX best practices and rapid prototyping skills
            that consistently impressed stakeholders."
            <span className="block mt-2 font-semibold">— Gail Mitchell</span>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-lg mb-4">
          I’m always open to new opportunities, collaborations, and design
          conversations.
        </p>
        <a
          href="mailto:bhatnarasimha1991@gmail.com"
          className="text-lg font-semibold hover:underline"
        >
          bhatnarasimha1991@gmail.com
        </a>
      </section>
    </div>
  );
}

export default App;
