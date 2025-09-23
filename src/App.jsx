// src/App.jsx
import React, { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

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

  // Path for public folder images
  const headshotSrc = `${import.meta.env.BASE_URL}images/headshot.jpg`;

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex justify-center items-center py-6">
          <div className="space-x-10 font-medium text-lg">
            <a href="#about" className="text-white hover:text-gray-200 transition">
              About
            </a>
            <a href="#skills" className="text-white hover:text-gray-200 transition">
              Skills
            </a>
            <a
              href="#experience"
              className="text-white hover:text-gray-200 transition"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-white hover:text-gray-200 transition"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-gray-200 transition"
            >
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
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-teal-500 via-blue-600 to-purple-700 text-white px-6"
      >
        {/* Headshot with gradient ring */}
        <div className="w-40 h-40 rounded-full mb-6">
          <div className="p-1 rounded-full bg-gradient-to-tr from-teal-400 via-blue-500 to-purple-600">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-white/5">
              <img
                src={headshotSrc}
                alt="Narasimha Bhat"
                className="w-full h-full object-cover rounded-full transform scale-125"
              />
            </div>
          </div>
        </div>


        <h1 className="text-5xl font-bold mb-4">Narasimha Bhat</h1>
        <h2 className="text-2xl text-blue-100 mb-6">
          Principal UX Designer · AI-Augmented Experience Designer
        </h2>
        <p className="max-w-xl text-lg text-gray-200 mb-8">
          I design human-centered, AI-driven digital experiences that simplify
          complexity, drive measurable impact, and scale across global enterprises.
        </p>

       {/* Social icons */}
<div className="flex space-x-8 mb-8">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/narasimha-bhat"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="transform transition duration-300 ease-in-out hover:scale-125 hover:shadow-lg hover:shadow-blue-400/50 rounded-full"
  >
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V24h-4V8z"/>
      </svg>
    </div>
  </a>

  {/* X (Twitter) */}
  <a
    href="https://twitter.com/IaMSimha007"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X (Twitter)"
    className="transform transition duration-300 ease-in-out hover:scale-125 hover:shadow-lg hover:shadow-gray-500/50 rounded-full"
  >
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-800 to-black">
      <span className="text-white text-2xl font-bold">X</span>
    </div>
  </a>

  {/* Gmail */}
  <a
    href="mailto:bhatnarasimha1991@gmail.com"
    aria-label="Gmail"
    className="transform transition duration-300 ease-in-out hover:scale-125 hover:shadow-lg hover:shadow-red-400/50 rounded-full"
  >
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-red-500 via-orange-500 to-yellow-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-7 h-7 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 13.065L.014 6h23.972L12 13.065zm0 2.021L.014 8.021V20h23.972V8.021L12 15.086z"/>
      </svg>
    </div>
  </a>
</div>


        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          View My Work
        </a>
      </section>

     {/* About Section */}
<section
  id="about"
  className="py-20 px-6 max-w-6xl mx-auto text-center"
>
  <h2 className="text-4xl font-bold mb-6">About Me</h2>

  {/* Intro paragraphs */}
  <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4 mb-12">
    <p>
      I’m a Principal UX Designer specializing in AI-augmented experiences. With
      a strong background in human-centered design, I’ve led award-winning
      projects that streamlined workflows, reduced costs, and created delightful
      user experiences.
    </p>
    <p>
      I’ve led transformative initiatives at the intersection of design, AI, and
      enterprise-scale systems.
    </p>
  </div>

  {/* Cards grid */}
  <div className="grid md:grid-cols-2 gap-8">
    {/* Key Achievements card */}
    <div className="p-6 rounded-xl shadow-lg text-left 
      bg-gradient-to-tr from-teal-500/30 to-purple-600/30 
      backdrop-blur-md border border-white/20">
      <h3 className="text-2xl font-semibold mb-6 text-white">Key Achievements</h3>
      <ul className="space-y-6 text-gray-100">
        <li>
          <p className="font-semibold">Digital Entry Point</p>
          <p className="text-sm text-gray-200">
            Award-winning product that saved <strong>$37M+</strong> and redefined
            the customer device lifecycle.
          </p>
        </li>
        <li>
          <p className="font-semibold">Unified Portal</p>
          <p className="text-sm text-gray-200">
            Led research and design for a consolidated enterprise hub, simplifying
            customer experiences.
          </p>
        </li>
        <li>
          <p className="font-semibold">Virtual Assistant</p>
          <p className="text-sm text-gray-200">
            Scaled Dell’s AI-powered conversational design, reducing self-service
            start time by <strong>71%</strong>.
          </p>
        </li>
      </ul>
    </div>

    {/* Recognition card */}
    <div className="p-6 rounded-xl shadow-lg text-left 
      bg-gradient-to-tr from-teal-500/30 to-purple-600/30 
      backdrop-blur-md border border-white/20">
      <h3 className="text-2xl font-semibold mb-6 text-white">Recognition & Awards</h3>
      <ul className="space-y-6 text-gray-100">
        <li>
          <p className="font-semibold">President’s Award — Digital Entry Point (DEP)</p>
          <p className="text-sm text-gray-200">
            Dell’s highest recognition for innovation and business impact.
          </p>
        </li>
        <li>
          <p className="font-semibold">Dell Award for Innovation — Design Libraries</p>
          <p className="text-sm text-gray-200">
            Recognized for creating scalable design systems.
          </p>
        </li>
        <li>
          <p className="font-semibold">NN/g Certified UX Designer</p>
          <p className="text-sm text-gray-200">
            Industry’s most respected UX certification.
          </p>
        </li>
        <li>
          <p className="font-semibold">Rising Leader at Dell (RLD)</p>
          <p className="text-sm text-gray-200">
            Selected for Dell’s high-potential leadership program.
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>
{/* About Section ends */}


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
              Entry Point, Unified Portal, and Virtual Assistant, delivering measurable
              impact across efficiency, adoption, and cost savings.
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
              Award-winning product saving $37M+ by revolutionizing device registration
              & lifecycle.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Unified Portal</h3>
            <p className="text-gray-600 mb-4">
              Unified experience for ISG customers with improved IA and capability
              mapping.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Virtual Assistant</h3>
            <p className="text-gray-600 mb-4">
              AI-powered conversational design reducing self-service start time by 71%.
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
            "Ambitious, dedicated, and loyal, Simha delivers excellence as an individual
            contributor and thrives in leadership roles."
            <span className="block mt-2 font-semibold">— Jason Cook</span>
          </blockquote>
          <blockquote className="p-6 bg-gray-50 rounded-lg shadow italic">
            "Simha has a toolkit of UX best practices and rapid prototyping skills that
            consistently impressed stakeholders."
            <span className="block mt-2 font-semibold">— Gail Mitchell</span>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white text-center"
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
