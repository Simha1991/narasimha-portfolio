// src/components/Featured.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  return (
    <section id="featured" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="pb-12"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="flex flex-col md:flex-row items-stretch bg-gradient-to-tr from-teal-200/50 via-purple-200/50 to-pink-200/50 rounded-2xl shadow-xl overflow-hidden h-[500px]">
                
                {/* Image Left - fills its half */}
                <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-contain p-6"
                  />
                </div>

                {/* Content Right */}
                <div className="w-full md:w-1/2 p-8 text-left flex flex-col justify-center">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <h4 className="text-lg text-indigo-700 mb-4">{s.subtitle}</h4>
                  <p className="text-gray-800 mb-4 leading-relaxed">{s.body}</p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.pills.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full shadow-sm"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <blockquote className="italic text-indigo-900 font-medium mb-6">
                    {s.impact}
                  </blockquote>

                  {/* Secondary Button */}
                  <Link
                    to={`/${s.id}-detail`}
                    className="inline-block px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition"
                  >
                    View detailed case study
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
