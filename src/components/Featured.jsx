// src/components/Featured.jsx
import React, { useState } from "react";

export default function Featured() {
  const projects = [
    {
      title: "Digital Entry Point",
      description:
        "Award-winning product saving $37M+ by revolutionizing device registration & lifecycle.",
      image: `${import.meta.env.BASE_URL}images/dep-placeholder.jpg`,
    },
    {
      title: "Unified Portal",
      description:
        "Unified experience for ISG customers with improved IA and capability mapping.",
      image: `${import.meta.env.BASE_URL}images/unified-placeholder.jpg`,
    },
    {
      title: "Virtual Assistant",
      description:
        "AI-powered conversational design reducing self-service start time by 71%.",
      image: `${import.meta.env.BASE_URL}images/va-placeholder.jpg`,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <section id="featured" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center px-6"
            >
              {/* Card */}
              <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-3xl">
                {/* Left: Image */}
                <div className="w-1/2 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Right: Content */}
                <div className="w-1/2 p-6 text-left flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-indigo-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
