// src/components/Featured.jsx
import React, { useState } from "react";

/* Featured Work Section */
export default function Featured() {
  const projects = [
    {
      title: "Digital Entry Point (DEP)",
      subtitle: "Award-Winning, $37M+ Savings",
      description: [
        "Revolutionized device registration and lifecycle experience with serialized QR codes.",
        "Designed end-to-end flow: storyboarding → IA simplification (tree testing) → low-fi & mid-fi → mobile-first final prototype.",
      ],
      impact: "Earned President's Award for innovation, delivering $37M+ savings and $21M+ in renewal opportunities.",
      image: `${import.meta.env.BASE_URL}images/digital entry point.jpg`,
    },
    {
      title: "Unified Portal Experience (UPE)",
      subtitle: "Enterprise Experience Unification",
      description: [
        "Conducted competitive research + capability mapping.",
        "Designed IA through open card sorting, created multi-fidelity wireframes, and iterated with stakeholders.",
      ],
      impact: "Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.",
      image: `${import.meta.env.BASE_URL}images/upe.jpg`,
    },
    {
      title: "Virtual Assistant (VA)",
      subtitle: "AI-Powered Conversational Design",
      description: [
        "Standardized VA across portals using DDS 2.0 + Atomic Design.",
        "Created scalable components (chat bubbles, action menus, micro-interactions).",
      ],
      impact: "Enhanced AI-driven support, improving self-service start time by 71% with 99% success probability.",
      image: `${import.meta.env.BASE_URL}images/virtual assistant.jpg`,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section id="featured" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">Featured Work</h2>

      {/* Carousel */}
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex items-center gap-8 p-6
                         rounded-2xl shadow-lg backdrop-blur-lg
                         bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30
                         border border-white/40"
            >
              {/* Left Image */}
              <div className="w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-md"
                />
              </div>

              {/* Right Content */}
              <div className="w-1/2 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-lg font-medium text-gray-800 mb-4">
                  {project.subtitle}
                </p>
                {project.description.map((line, i) => (
                  <p key={i} className="text-gray-700 mb-2">
                    {line}
                  </p>
                ))}
                <div className="mt-4 p-4 bg-white/70 rounded-lg border-l-4 border-purple-500 shadow-sm">
                  <p className="italic text-gray-900 font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2
                     bg-white/70 rounded-full p-2 shadow hover:bg-white"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2
                     bg-white/70 rounded-full p-2 shadow hover:bg-white"
        >
          ›
        </button>
      </div>
    </section>
  );
}
