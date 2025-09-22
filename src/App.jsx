import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Narasimha Bhat</h1>
        <h2 className="text-2xl mb-6">Principal UX Designer + AI-Augmented Experience Designer</h2>
        <p className="max-w-2xl text-lg mb-8">
          Designing intuitive, human-centered experiences with a focus on
          AI-driven innovation.
        </p>
        <a
          href="#projects"
          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          With over a decade of experience in UX design, I specialize in
          creating seamless user journeys that bridge technology and human
          needs. My recent work focuses on **AI-augmented design systems** and
          **next-gen interfaces** for global brands like Google and Amazon.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">AI-Augmented Design Tool</h3>
            <p className="text-gray-600">
              Led the UX for an AI-powered prototyping tool, cutting design
              iteration times by 40%. Integrated NLP-driven insights for
              designers.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Voice-First Experience</h3>
            <p className="text-gray-600">
              Designed multimodal experiences for voice assistants used by
              millions daily. Balanced accessibility and usability.
            </p>
          </div>
          {/* Add more projects */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold">Principal UX Designer — Google</h3>
            <p className="text-gray-600">
              Driving AI-augmented experience design across core products.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Lead UX Designer — Amazon</h3>
            <p className="text-gray-600">
              Designed large-scale e-commerce flows with AI personalization.
            </p>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="
