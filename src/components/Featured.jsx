// src/components/Featured.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * Magazine-style full-bleed carousel.
 * - Title sits above the carousel (always visible).
 * - Image is shown with object-contain to avoid over-zoom.
 * - CTA is a secondary (outlined) button.
 */

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

  // autoplay
  useEffect(() => {
    timeoutRef.current = setTimeout(next, 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <section id="featured" className="relative py-12 bg-gray-50">
      {/* Section title (visible above the carousel) */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Featured Work
        </h2>
      </div>

      {/* Carousel wrapper */}
      <div className="relative w-full">
        {/* Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${index * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((s, i) => (
            <div
              key={s.id}
              className="flex-shrink-0 w-full"
              style={{ width: `${100 / slides.length}%`, minHeight: "56vh" }}
            >
              {/* Slide container */}
              <div className="relative h-full overflow-hidden">
                {/* Image (centered, object-contain to avoid blow-up) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="max-h-[72vh] w-auto object-contain"
                    style={{ maxWidth: "1200px" }}
                  />
                </div>

                {/* Gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />

                {/* Content overlay */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
                  <div className="text-left text-white">
                    <h3 className="text-2xl md:text-4xl font-bold mb-2">
                      {s.title}
                    </h3>
                    <h4 className="text-md md:text-lg text-gray-200 mb-4">
                      {s.subtitle}
                    </h4>

                    <p className="text-sm md:text-lg text-gray-100 mb-6 leading-relaxed">
                      {s.body}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {s.pills.map((p) => (
                        <span
                          key={p}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <blockquote className="italic text-gray-100 mb-6">
                      {s.impact}
                    </blockquote>

                    {/* Secondary button style (outlined / subtle) */}
                    <Link
                      to={`/${s.id}-detail`}
                      className="inline-block px-5 py-2 rounded-lg border border-white/30 text-white text-sm font-medium hover:bg-white/8 transition"
                      onClick={() => clearTimeout(timeoutRef.current)}
                      aria-label={`View detailed case study for ${s.title}`}
                    >
                      View detailed case study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows */}
        <button
          aria-label="Previous slide"
          onClick={() => {
            prev();
            clearTimeout(timeoutRef.current);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur transition"
        >
          ‹
        </button>

        <button
          aria-label="Next slide"
          onClick={() => {
            next();
            clearTimeout(timeoutRef.current);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                clearTimeout(timeoutRef.current);
              }}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-indigo-500" : "bg-white/60"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
