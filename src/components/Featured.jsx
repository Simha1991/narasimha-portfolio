// src/components/Featured.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Featured() {
  const works = [
    {
      title: "Digital Entry Point (DEP)",
      subtitle: "Award-Winning, $37M+ Savings",
      description: `Revolutionized device registration and lifecycle experience with serialized QR codes. 
      Designed end-to-end flow: storyboarding → IA simplification → low-fi & mid-fi → mobile-first final prototype.`,
      impact: `Earned President's Award for innovation, delivering $37M+ savings and $21M+ in renewal opportunities.`,
      pills: ["Mobile-first design", "Enterprise design", "Innovation"],
      image: "/dep.png",
      gradient: "from-teal-200/40 via-purple-200/40 to-pink-200/40",
      link: "/dep-detail",
    },
    {
      title: "Unified Portal Experience (UPE)",
      subtitle: "Enterprise Experience Unification",
      description: `Conducted competitive research + capability mapping. 
      Designed IA through open card sorting, created multi-fidelity wireframes, and iterated with stakeholders.`,
      impact: `Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.`,
      pills: ["Information architecture", "Enterprise design", "Dashboard design"],
      image: "/upe.jpg",
      gradient: "from-blue-200/40 via-indigo-200/40 to-purple-200/40",
      link: "/upe-detail",
    },
    {
      title: "Virtual Assistant (VA)",
      subtitle: "AI-Powered Conversational Design",
      description: `Standardized VA across portals using DDS 2.0 + Atomic Design. 
      Created scalable components (chat bubbles, action menus, micro-interactions).`,
      impact: `Enhanced AI-driven support, improving self-service start time by 71% with 99% success probability.`,
      pills: ["Conversational design", "Design system", "AI"],
      image: "/va.jpg",
      gradient: "from-pink-200/40 via-red-200/40 to-yellow-200/40",
      link: "/va-detail",
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
        spaceBetween={50}
        slidesPerView={1.2}
        centeredSlides={true}
        className="max-w-6xl"
      >
        {works.map((work, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col md:flex-row items-center p-10 rounded-2xl shadow-xl 
              bg-gradient-to-tr ${work.gradient} border border-white/40 h-[520px]`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="rounded-lg border border-gray-200 max-h-[300px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-left flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {work.title}
                  </h3>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">
                    {work.subtitle}
                  </h4>
                  <p className="text-gray-700 mb-6">{work.description}</p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.pills.map((pill, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700 font-medium"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <blockquote className="italic font-medium text-indigo-700 bg-white/60 p-4 rounded-lg shadow-sm">
                    {work.impact}
                  </blockquote>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Link
                    to={work.link}
                    className="inline-block px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
                  >
                    View Detailed Case Study
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
