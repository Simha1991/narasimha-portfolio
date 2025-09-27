// src/components/Featured.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Featured() {
  return (
    <>
      {/* Featured Section */}
      <section id="featured" className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="max-w-5xl mx-auto"
        >
          {/* DEP */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center 
                rounded-2xl shadow-lg overflow-hidden h-[500px] 
                bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30 
                backdrop-blur-lg border border-white/40 p-6">
              
              {/* Image */}
              <img
                src={`${import.meta.env.BASE_URL}images/dep.png`}
                alt="Digital Entry Point"
                className="w-full md:w-1/2 h-full object-cover rounded-lg"
              />

              {/* Content */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center text-left">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Digital Entry Point (DEP)
                </h3>
                <p className="font-semibold text-gray-800 mb-4">
                  Award-Winning, $37M+ Savings
                </p>
                <p className="text-gray-700 mb-4">
                  Revolutionized device registration and lifecycle experience with serialized QR codes. 
                  Designed end-to-end flow: storyboarding → IA simplification → low-fi & mid-fi → mobile-first final prototype.
                </p>
                <blockquote className="italic text-indigo-700 font-medium bg-white/60 border-l-4 border-purple-500 p-4 rounded-lg shadow-sm mb-4">
                  Impact: Earned President's Award for innovation, delivering $37M+ savings and $21M+ in renewal opportunities.
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Mobile-first design</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Enterprise design</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Innovation</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* UPE */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center 
                rounded-2xl shadow-lg overflow-hidden h-[500px] 
                bg-gradient-to-tr from-purple-200/30 via-pink-200/30 to-indigo-200/30
                backdrop-blur-lg border border-white/40 p-6">
              
              {/* Image */}
              <img
                src={`${import.meta.env.BASE_URL}images/upe.jpg`}
                alt="Unified Portal Experience"
                className="w-full md:w-1/2 h-full object-cover rounded-lg"
              />

              {/* Content */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center text-left">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Unified Portal Experience (UPE)
                </h3>
                <p className="font-semibold text-gray-800 mb-4">
                  Enterprise Experience Unification
                </p>
                <p className="text-gray-700 mb-4">
                  Conducted competitive research + capability mapping. Designed IA through open card sorting, 
                  created multi-fidelity wireframes, and iterated with stakeholders.
                </p>
                <blockquote className="italic text-indigo-700 font-medium bg-white/60 border-l-4 border-teal-500 p-4 rounded-lg shadow-sm mb-4">
                  Impact: Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">Information architecture</span>
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">Enterprise design</span>
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">Dashboard design</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Virtual Assistant */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center 
                rounded-2xl shadow-lg overflow-hidden h-[500px] 
                bg-gradient-to-tr from-pink-200/30 via-indigo-200/30 to-teal-200/30
                backdrop-blur-lg border border-white/40 p-6">
              
              {/* Image */}
              <img
                src={`${import.meta.env.BASE_URL}images/va.jpg`}
                alt="Virtual Assistant"
                className="w-full md:w-1/2 h-full object-cover rounded-lg"
              />

              {/* Content */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center text-left">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Virtual Assistant (VA)
                </h3>
                <p className="font-semibold text-gray-800 mb-4">
                  AI-Powered Conversational Design
                </p>
                <p className="text-gray-700 mb-4">
                  Standardized VA across portals using DDS 2.0 + Atomic Design. Created scalable components 
                  (chat bubbles, action menus, micro-interactions).
                </p>
                <blockquote className="italic text-indigo-700 font-medium bg-white/60 border-l-4 border-pink-500 p-4 rounded-lg shadow-sm mb-4">
                  Impact: Enhanced AI-driven support, improving self-service start time by 71% with 99% success probability.
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">Conversational design</span>
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">Design system</span>
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">AI</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Featured Section Ends */}
    </>
  );
}
