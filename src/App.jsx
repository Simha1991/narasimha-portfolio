// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6"
      >
        <h1 className="text-5xl font-bold mb-4">Narasimha Bhat</h1>
        <h2 className="text-2xl mb-6">
          Principal UX Designer · AI-Augmented Experience Strategist
        </h2>
        <p className="max-w-2xl text-lg mb-8">
          I design seamless, human-centered digital experiences that merge UX
          craft with the power of AI. Explore my portfolio to see award-winning
          projects, leadership, and my design philosophy.
        </p>
        <a
          href="#projects"
          className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          I am a Principal UX Designer at Dell Technologies, specializing in
          AI-augmented experiences, enterprise-scale design, and customer-first
          digital transformations. Recognized as a Figma guru and design mentor,
          I thrive on solving complex problems with simple, human-centered
          solutions. I’ve led multiple award-winning projects, driving millions
          in savings while elevating customer satisfaction and efficiency.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4">Core UX Expertise</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Designing with AI expertise</li>
              <li>User research & prototyping</li>
              <li>Information architecture</li>
              <li>Usability testing</li>
              <li>Interaction design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Special Strengths</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Figma Guru & Design Mentor</li>
              <li>Agile Coach (Kanban)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Figma</li>
              <li>Emergent</li>
              <li>Adobe CC (XD, Premiere Pro, Express)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
