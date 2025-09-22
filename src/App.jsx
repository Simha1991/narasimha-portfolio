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

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition duration-300 ${
          scrolled
            ? "bg-white shadow"
            : "bg-white/30 backdrop-blur-md shadow-sm"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex justify-center items-center p-4">
          <div className="space-x-6 font-medium">
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">
              Skills
            </a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600">
              Experience
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">
              Projects
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600"
            >
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6"
      >
        <img
          src="/images/headshot.jpg"
          alt="Narasimha Bhat"
          className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-white"
        />
        <h1 className="text-5xl font-bold mb-4">Narasimha Bhat</h1>
        <h2 className="text-2xl text-indigo-100 mb-6">
          Principal UX Designer · AI-Augmented Experience Designer
        </h2>
        <p className="max-w-xl text-lg text-indigo-50 mb-8">
          I design seamless, human-centered digital experiences that merge UX
          craft with the power of AI. Explore my portfolio to see my projects
          and design philosophy.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition font-semibold"
        >
          View My Work
        </a>
      </section>

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
