// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-6"
      >
        <h1 className="text-5xl font-bold mb-4">Narasimha Bhat</h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          Principal UX Designer · AI-Augmented Experience Designer
        </h2>
        <p className="max-w-2xl text-lg text-gray-700 mb-8">
          I design seamless, human-centered digital experiences that merge UX
          craft with the power of AI. Explore my portfolio to see my projects
          and design philosophy.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          I am a design leader specializing in UX strategy, interaction design,
          and AI-augmented experiences. Over the last decade, I’ve worked on
          complex enterprise products, consumer applications, and design systems
          that empower teams to build better products faster.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">UX Strategy</h3>
            <p className="text-gray-600">
              Driving vision, discovery, and product alignment.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Interaction Design</h3>
            <p className="text-gray-600">
              Creating intuitive interfaces that simplify complexity.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI & Design Systems</h3>
            <p className="text-gray-600">
              Building scalable systems and AI-enhanced workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <div>
            <h3 className="text-2xl font-semibold">Principal UX Designer</h3>
            <p className="text-gray-600">Company Name · 2020 – Present</p>
            <p className="text-gray-700 mt-2">
              Leading design for AI-augmented enterprise experiences.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Senior UX Designer</h3>
            <p className="text-gray-600">Company Name · 2016 – 2020</p>
            <p className="text-gray-700 mt-2">
              Designed design systems and enterprise applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">AI-Enhanced Search</h3>
            <p className="text-gray-600 mb-4">
              Redefined enterprise search with conversational AI, improving
              discoverability by 40%.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Case Study →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Design System 2.0</h3>
            <p className="text-gray-600 mb-4">
              Led the evolution of a scalable design system used by 10+ teams,
              ensuring accessibility and consistency.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Case Study →
            </a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">
              Voice-Guided Workflows
            </h3>
            <p className="text-gray-600 mb-4">
              Designed AI-powered voice interactions for field workers,
              increasing efficiency in complex workflows.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Case Study →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">
              “Narasimha is a design leader who brings clarity and innovation to
              every project. His work with AI-augmented workflows has been
              transformative.”
            </p>
            <h4 className="font-semibold">— Colleague, Company</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="text-gray-700 italic mb-4">
              “A brilliant UX strategist who knows how to balance user needs
              with business goals.”
            </p>
            <h4 className="font-semibold">— Manager, Company</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-lg text-gray-600 mb-4">
          I’m always open to new opportunities, collaborations, and design
          conversations.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 text-lg font-medium hover:underline"
        >
          your-email@example.com
        </a>
      </section>
    </div>
  );
}

export default App;
