// src/components/Featured.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* Simple, dependency-free carousel */
export default function Featured() {
  const slides = [
    {
      id: "dep",
      title: "Digital Entry Point (DEP)",
      subtitle: "Award-Winning, $37M+ Savings",
      body:
        "Revolutionized device registration and lifecycle experience with serialized QR codes. Designed end-to-end flow: storyboarding → IA simplification (tree testing) → low-fi & mid-fi → mobile-first final prototype.",
      impact:
        "Earned President's Award for innovation, delivering $37M+ savings and $21M+ in renewal opportunities.",
      pills: ["mobile-first design", "enterprise design", "innovation"],
      img: `${import.meta.env.BASE_URL}images/dep.png`,
    },
    {
      id: "upe",
      title: "Unified Portal Experience (UPE)",
      subtitle: "Enterprise Experience Unification",
      body:
        "Conducted competitive research + capability mapping. Designed IA through open card sorting, created multi-fidelity wireframes, and iterated with stakeholders.",
      impact:
        "Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.",
      pills: ["information architecture", "enterprise design", "dashboard design"],
      img: `${import.meta.env.BASE_URL}images/upe.jpg`,
    },
    {
      id: "va",
      title: "Virtual Assistant (VA)",
      subtitle: "AI-Powered Conversational Design",
      body:
        "Standardized VA across portals using DDS 2.0 + Atomic Design. Created scalable components (chat bubbles, action menus, micro-interactions).",
      impact:
        "Enhanced AI-driven support, improving self-service start time by 71% with 99% success probability.",
      pills: ["conversational design", "design system", "AI"],
      img: `${import.meta.env.BASE_URL}images/va.jpg`,
    },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Optional: auto-advance every 6s
  useEffect(() => {
    timeoutRef.current = setTimeout(next, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <section id="featured" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)`, width: `${slides.length * 100}%` }}
          >
            {slides.map((s) => (
              <div key={s.id} className="w-full px-6">
                <div className="flex flex-col md:flex-row items-center bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30 rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-white/40 min-h-[380px]">
                  {/* image column */}
                  <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="rounded-lg border border-gray-200 object-contain max-h-64"
                      style={{ width: "100%", maxWidth: 420 }}
                    />
                  </div>

                  {/* content column */}
                  <div className="w-full md:w-1/2 md:pl-8 text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                    <h4 className="text-lg text-gray-700 mb-4">{s.subtitle}</h4>

                    <p className="text-gray-800 mb-4 leading-relaxed">{s.body}</p>

                    {/* pills (moved before impact as requested) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {s.pills.map((p) => (
                        <span key={p} className="px-3 py-1 bg-white/60 text-sm rounded-full text-gray-800">
                          {p}
                        </span>
                      ))}
                    </div>

                    <blockquote className="italic text-indigo-700 font-medium mb-6">{s.impact}</blockquote>

                    <Link
                      to={`/${s.id}-detail`}
                      className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                    >
                      View detailed work
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* nav arrows */}
        <button
          aria-label="Previous"
          onClick={() => { prev(); clearTimeout(timeoutRef.current); }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow hover:scale-105 transition"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={() => { next(); clearTimeout(timeoutRef.current); }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow hover:scale-105 transition"
        >
          ›
        </button>

        {/* dots */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIndex(i); clearTimeout(timeoutRef.current); }}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-indigo-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
