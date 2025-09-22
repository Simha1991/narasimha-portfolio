// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50"
      >
        <h1 className="text-5xl font-bold mb-4">Narasimha Bhat</h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          Principal UX Designer · AI-Augmented Experience Designer
        </h2>
        <p className="max-w-xl text-lg text-gray-700 mb-8">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Selected Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Example Project Card */}
          <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">AI-Enhanced Search</h3>
            <p className="text-gray-600 mb-4">
              Redefined enterprise search with conversational AI, improving
              discoverability by 40%.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Case Study →
            </a>
          </div>

          <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Design System 2.0</h3>
            <p className="text-gray-600 mb-4">
              Led the evolution of a scalable design system used by 10+ teams,
              ensuring accessibility and consistency.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Case Study →
            </a>
          </div>

          <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition">
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
