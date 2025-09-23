// src/sections/Skills.jsx
import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">A decade of design excellence</h2>
        <p className="text-lg text-gray-100">
          From technical foundations to design leadership, I bring a unique blend of
          skills that bridge the gap between engineering and user experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Core UX Expertise */}
        <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🧠</span>
            <h3 className="text-2xl font-semibold text-white">Core UX Expertise</h3>
          </div>
          <ul className="space-y-2 text-gray-100">
            <li>Designing with AI Expertise</li>
            <li>Interaction & Interface Design</li>
            <li>Wireframing & Prototyping</li>
            <li>Design Research & Information Architecture</li>
            <li>Human-Centered Problem Solving</li>
            <li>Enterprise-Scale UX Strategy</li>
          </ul>
        </div>

        {/* Special Strengths */}
        <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">⚡</span>
            <h3 className="text-2xl font-semibold text-white">Special Strengths</h3>
          </div>
          <ul className="space-y-2 text-gray-100">
            <li>AI-Augmented Experience Design</li>
            <li>Design Systems & Standards</li>
            <li>Figma Expert & Design Mentor</li>
            <li>Cross-functional Leadership</li>
            <li>Agile Coach (Kanban, Lean UX)</li>
            <li>Driving measurable business impact</li>
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div className="backdrop-blur-lg bg-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🎨</span>
            <h3 className="text-2xl font-semibold text-white">Tools & Technologies</h3>
          </div>
          <ul className="space-y-2 text-gray-100">
            <li>Figma</li>
            <li>Emergent</li>
            <li>Adobe CC</li>
            <li>Miro</li>
            <li>Jira / Confluence</li>
            <li>GitHub / GitLab</li>
            <li>Web Tech (React, Tailwind, HTML/CSS)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
