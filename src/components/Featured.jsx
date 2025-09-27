// src/components/Featured.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Featured() {
  const slides = [
    {
      id: "dep",
      title: "Digital Entry Point (DEP)",
      subtitle: "Award-Winning, $37M+ Savings",
      body: "Revolutionized device registration and lifecycle experience with serialized QR codes. Designed end-to-end flow: storyboarding → IA simplification (tree testing) → low-fi & mid-fi → mobile-first final prototype.",
      impact: "Earned President's Award for innovation, delivering $37M+ savings and $21M+ in renewal opportunities.",
      pills: ["mobile-first design", "enterprise design", "innovation"],
      img: `${import.meta.env.BASE_URL}images/dep.png`,
    },
    {
      id: "upe",
      title: "Unified Portal Experience (UPE)",
      subtitle: "Enterprise Experience Unification",
      body: "Conducted competitive research + capability mapping. Designed IA through open card sorting, created multi-fidelity wireframes, and iterated with stakeholders.",
      impact: "Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.",
      pills: ["information architecture", "enterprise design", "dashboard design"],
      img: `${import.meta.env.BASE_URL}images/upe.jpg`,
    },
    {
      id: "va",
      title: "Virtual Assistant (VA)",
      subtitle: "AI-Powered Conversational Design",
      body: "Standardized VA across portals using DDS 2.0 + Atomic Design. Created scalable components (chat bubbles, action menus, micro-interactions).",
      impact: "Enhanced AI-driven support, improving self-service start time by 71% with 99% success probability.",
      pills: ["conversational design", "design system", "AI"],
      img: `${import.meta.env.BASE_URL}images/va.jpg`,
    },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 8000); // auto-slide every 8s
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <section id="featured" className="relative w-full h-screen overflow-hidden">
      {/* Carousel track */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)`, width: `${slides.length * 100}%` }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="w-full h-full flex-shrink-0 relative"
            style={{ backgroundImage: `url(${s.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

            {/* Text overlay */}
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 text-left text-white max-w-3xl">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">{s.title}</h3>
              <h4 className="text-xl md:text-2xl text-gray-200 mb-6">{s.subtitle}</h4>
              <p className="text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">{s.body}</p>

              {/* Pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                {s.pills.map((p) => (
                  <span
                    key={p}
                    className="px-4 py-1 bg-white/30 backdrop-blur-md rounded-full text-sm font-medium text-white"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <blockquote className="italic text-lg md:text-xl font-medium mb-6">{s.impact}</blockquote>

              <Link
                to={`/${s.id}-detail`}
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                View Detailed Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        aria-label="Previous"
        onClick={() => {
          prev();
          clearTimeout(timeoutRef.current);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-full p-3 text-white hover:scale-110 transition z-20"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => {
          next();
          clearTimeout(timeoutRef.current);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-full p-3 text-white hover:scale-110 transition z-20"
      >
        ›
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              clearTimeout(timeoutRef.current);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-indigo-500" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
