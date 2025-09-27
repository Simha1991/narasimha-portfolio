// src/components/Featured.jsx
import React from "react";

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
      impact:
        "Earned President's Award for innovation, delivering $37M+ savings and $21M+ in renewal opportunities.",
      image: "/images/digital-entry-point.png", // ✅ updated path
    },
    {
      title: "Unified Portal Experience (UPE)",
      subtitle: "Enterprise Experience Unification",
      description: [
        "Conducted competitive research + capability mapping.",
        "Designed IA through open card sorting, created multi-fidelity wireframes, and iterated with stakeholders.",
      ],
      impact:
        "Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.",
      image: "/images/upe.jpg",
    },
    {
      title: "Virtual Assistant (VA)",
      subtitle: "AI-Powered Conversational Design",
      description: [
        "Standardized VA across portals using DDS 2.0 + Atomic Design.",
        "Created scalable components (chat bubbles, action menus, micro-interactions).",
      ],
      impact:
        "Enhanced AI-driven support, improving self-service start time by 71% with 99% success probability.",
      image: "/images/virtual-assistant.jpg",
    },
  ];

  return (
    <section id="featured" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Work</h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex overflow-x-scroll space-x-6 snap-x">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="min-w-full md:min-w-[80%] flex bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30
                         backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-8 text-left snap-start"
            >
              {/* Left: Image */}
              <div className="w-1/2 pr-6">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="rounded-xl shadow-md"
                />
              </div>

              {/* Right: Text */}
              <div className="w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {proj.title}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {proj.subtitle}
                </h4>
                {proj.description.map((line, i) => (
                  <p key={i} className="text-gray-700 mb-2">
                    {line}
                  </p>
                ))}
                <blockquote className="mt-4 p-4 italic border-l-4 border-purple-500 text-gray-900 bg-white/40 rounded">
                  {proj.impact}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
