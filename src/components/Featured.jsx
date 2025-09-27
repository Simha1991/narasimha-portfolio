// src/components/Featured.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

export default function Featured() {
  return (
    <section id="featured" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1.1}
          centeredSlides={true}
          className="pb-12"
        >
          {/* DEP Card */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30 
                            rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-white/40 h-full">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img
                  src="/images/dep.png"
                  alt="Digital Entry Point"
                  className="rounded-lg border border-gray-200 object-contain max-h-72"
                />
              </div>
              {/* Content */}
              <div className="w-full md:w-1/2 md:pl-8 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Digital Entry Point (DEP)
                </h3>
                <h4 className="text-lg text-gray-700 mb-4">
                  Award-Winning, $37M+ Savings
                </h4>
                <p className="text-gray-800 mb-4">
                  Revolutionized device registration and lifecycle experience with
                  serialized QR codes. Designed end-to-end flow: storyboarding → IA
                  simplification (tree testing) → low-fi & mid-fi → mobile-first
                  final prototype.
                </p>
                {/* Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    mobile-first design
                  </span>
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    enterprise design
                  </span>
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    innovation
                  </span>
                </div>
                {/* Impact */}
                <blockquote className="italic text-indigo-900 font-medium mb-6">
                  Impact: Earned President's Award for innovation, delivering $37M+
                  savings and $21M+ in renewal opportunities.
                </blockquote>
                {/* Button */}
                <Link
                  to="/dep-detail"
                  className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  View Detailed Case Study
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* UPE Card */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center bg-gradient-to-tr from-purple-200/30 via-pink-200/30 to-yellow-200/30 
                            rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-white/40 h-full">
              <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img
                  src="/images/upe.jpg"
                  alt="Unified Portal Experience"
                  className="rounded-lg border border-gray-200 object-contain max-h-72"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Unified Portal Experience (UPE)
                </h3>
                <h4 className="text-lg text-gray-700 mb-4">
                  Enterprise Experience Unification
                </h4>
                <p className="text-gray-800 mb-4">
                  Conducted competitive research + capability mapping. Designed IA
                  through open card sorting, created multi-fidelity wireframes, and
                  iterated with stakeholders.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    information architecture
                  </span>
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    enterprise design
                  </span>
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    dashboard design
                  </span>
                </div>
                <blockquote className="italic text-indigo-900 font-medium mb-6">
                  Impact: Built a unified dashboard (service events, lifecycle, fleet
                  health, notifications). Preparing for production rollout.
                </blockquote>
                <Link
                  to="/upe-detail"
                  className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  View Detailed Case Study
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* VA Card */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center bg-gradient-to-tr from-pink-200/30 via-teal-200/30 to-indigo-200/30 
                            rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-white/40 h-full">
              <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img
                  src="/images/va.jpg"
                  alt="Virtual Assistant"
                  className="rounded-lg border border-gray-200 object-contain max-h-72"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-8 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Virtual Assistant (VA)
                </h3>
                <h4 className="text-lg text-gray-700 mb-4">
                  AI-Powered Conversational Design
                </h4>
                <p className="text-gray-800 mb-4">
                  Standardized VA across portals using DDS 2.0 + Atomic Design.
                  Created scalable components (chat bubbles, action menus,
                  micro-interactions).
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    conversational design
                  </span>
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    design system
                  </span>
                  <span className="px-3 py-1 bg-white/40 text-sm rounded-full">
                    AI
                  </span>
                </div>
                <blockquote className="italic text-indigo-900 font-medium mb-6">
                  Impact: Enhanced AI-driven support, improving self-service start
                  time by 71% with 99% success probability.
                </blockquote>
                <Link
                  to="/va-detail"
                  className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  View Detailed Case Study
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
