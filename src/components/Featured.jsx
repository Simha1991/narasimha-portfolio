// src/components/Featured.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Featured() {
  const projects = [
    {
      title: "Digital Entry Point (DEP)",
      subtitle: "Award-Winning, $37M+ Savings",
      description: `Revolutionized device registration and lifecycle experience with serialized QR codes. 
      Designed end-to-end flow: storyboarding → IA simplification → low-fi & mid-fi → mobile-first final prototype.`,
      impact: `Earned President's Award for innovation, delivering $37M+ savings and $21M+ in renewal opportunities.`,
      image: "/images/dep.png",
      tags: ["Mobile-first design", "Enterprise design", "Innovation"],
    },
    {
      title: "Unified Portal Experience (UPE)",
      subtitle: "Enterprise Experience Unification",
      description: `Conducted competitive research + capability mapping. 
      Designed IA through open card sorting, created multi-fidelity wireframes, and iterated with stakeholders.`,
      impact: `Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.`,
      image: "/images/upe.jpg",
      tags: ["Information architecture", "Enterprise design", "Dashboard design"],
    },
    {
      title: "Virtual Assistant (VA)",
      subtitle: "AI-Powered Conversational Design",
      description: `Standardized VA across portals using DDS 2.0 + Atomic Design. 
      Created scalable components (chat bubbles, action menus, micro-interactions).`,
      impact: `Enhanced AI-driven support, improving self-service start time by 71% with 99% success probability.`,
      image: "/images/va.jpg",
      tags: ["Conversational design", "Design system", "AI"],
    },
  ];

  return (
    <section id="featured" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1.1} // main card + peek of next
        centeredSlides={true}
        className="max-w-6xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col md:flex-row items-center rounded-2xl shadow-lg p-8 
                         backdrop-blur-lg border border-white/30
                         bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30
                         min-h-[420px]"
            >
              {/* Image */}
              <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-64 object-contain border border-gray-200 rounded-lg shadow-sm"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full md:pl-8 text-left">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">{project.subtitle}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <blockquote className="italic text-indigo-700 font-semibold bg-white/60 px-4 py-2 rounded-lg shadow-sm mb-4">
                  Impact: {project.impact}
                </blockquote>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
