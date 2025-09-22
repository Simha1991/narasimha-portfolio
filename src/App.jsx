// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center 
                   bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6"
      >
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          Narasimha Bhat
        </h1>
        <h2 className="text-2xl text-blue-100 mb-6">
          Principal UX Designer · AI-Augmented Experience Designer
        </h2>
        <p className="max-w-2xl text-lg text-blue-50 mb-8 leading-relaxed">
          I design seamless, human-centered digital experiences that merge UX
          craft with the power of AI. Explore my portfolio to see my projects
          and design philosophy.
        </p>
        <a
          href="#projects"
          className="px-8 py-3 bg-white text-blue-700 rounded-lg shadow-lg font-semibold hover:bg-blue-50 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          I am a design leader specializing in UX strategy, interaction design,
          and AI-augmented experiences. Over the last decade, I’ve worked on
          complex enterprise products, consumer applications, and design systems
          that empower teams to build better products faster.
        </p>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-gray-50 text-center relative overflow-hidden"
      >
        <h2 className="text-4xl font-bold mb-12 text-blue-700">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "UX Strategy",
              desc: "Driving vision, discovery, and product alignment.",
            },
            {
              title: "Interaction Design",
              desc: "Creating intuitive interfaces that simplify complexity.",
            },
            {
              title: "AI & Design Systems",
              desc: "Building scalable systems and AI-enhanced workflows.",
            },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {skill.title}
              </h3>
              <p className="text-gray-700">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-700">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Principal UX Designer</h3>
            <p className="text-gray-500">Company Name · 2020 – Present</p>
            <p className="text-gray-700 mt-2">
              Leading design for AI-augmented enterprise experiences.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Senior UX Designer</h3>
            <p className="text-gray-500">Company Name · 2016 – 2020</p>
            <p className="text-gray-700 mt-2">
              Designed design systems and enterprise applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-700">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "AI-Enhanced Search",
              desc: "Redefined enterprise search with conversational AI, improving discoverability by 40%.",
            },
            {
              title: "Design System 2.0",
              desc: "Led the evolution of a scalable design system used by 10+ teams, ensuring accessibility and consistency.",
            },
            {
              title: "Voice-Guided Workflows",
              desc: "Designed AI-powered voice interactions for field workers, increasing efficiency in complex workflows.",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-left"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <a href="#" className="text-blue-700 font-medium hover:underline">
                Case Study →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-700">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              “Narasimha is a design leader who brings clarity and innovation to
              every project. His work with AI-augmented workflows has been
              transformative.”
            </p>
            <h4 className="font-semibold text-blue-600">— Colleague, Company</h4>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              “A brilliant UX strategist who knows how to balance user needs
              with business goals.”
            </p>
            <h4 className="font-semibold text-blue-600">— Manager, Company</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-lg text-gray-300 mb-6">
          I’m always open to new opportunities, collaborations, and design
          conversations.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="text-lg font-medium bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition"
        >
          your-email@example.com
        </a>
      </section>
    </div>
  );
}

export default App;
