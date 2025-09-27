// src/components/Featured.jsx
import React, { useEffect } from "react";

export default function Featured() {
  useEffect(() => {
    const swiper = new window.Swiper(".mySwiper", {
      slidesPerView: 1.05,
      spaceBetween: 30,
      grabCursor: true,
      loop: true, // 🔄 makes carousel infinite
      autoHeight: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section id="featured" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

      <div className="swiper mySwiper max-w-5xl mx-auto">
        <div className="swiper-wrapper">
          {/* Digital Entry Point */}
          <div className="swiper-slide">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
              <img
                src="/images/dep.png"
                alt="Digital Entry Point"
                className="w-full md:w-1/2 h-full object-cover"
              />
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Digital Entry Point (DEP)
                </h3>
                <p className="text-gray-700 mb-4">
                  Award-Winning, <strong>$37M+ Savings</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Revolutionized device registration and lifecycle experience
                  with serialized QR codes. Designed end-to-end flow:
                  storyboarding → IA simplification → low-fi & mid-fi →
                  mobile-first final prototype.
                </p>
                <blockquote className="italic text-indigo-600 font-semibold mb-4">
                  Impact: Earned President&apos;s Award for innovation,
                  delivering $37M+ savings and $21M+ in renewal opportunities.
                </blockquote>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Mobile-first design", "Enterprise design", "Innovation"].map(
                    (pill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                      >
                        {pill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Unified Portal */}
          <div className="swiper-slide">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
              <img
                src="/images/upe.jpg"
                alt="Unified Portal"
                className="w-full md:w-1/2 h-full object-cover"
              />
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Unified Portal Experience (UPE)
                </h3>
                <p className="text-gray-700 mb-4">
                  Enterprise Experience Unification
                </p>
                <p className="text-gray-700 mb-4">
                  Conducted competitive research + capability mapping. Designed
                  IA through open card sorting, created multi-fidelity
                  wireframes, and iterated with stakeholders.
                </p>
                <blockquote className="italic text-indigo-600 font-semibold mb-4">
                  Impact: Built a unified dashboard with service events,
                  lifecycle, fleet health, and notifications.
                </blockquote>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "Information architecture",
                    "Enterprise design",
                    "Dashboard design",
                  ].map((pill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Virtual Assistant */}
          <div className="swiper-slide">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
              <img
                src="/images/va.jpg"
                alt="Virtual Assistant"
                className="w-full md:w-1/2 h-full object-cover"
              />
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Virtual Assistant (VA)
                </h3>
                <p className="text-gray-700 mb-4">
                  AI-Powered Conversational Design
                </p>
                <p className="text-gray-700 mb-4">
                  Standardized VA across portals using DDS 2.0 + Atomic Design.
                  Created scalable components (chat bubbles, action menus,
                  micro-interactions).
                </p>
                <blockquote className="italic text-indigo-600 font-semibold mb-4">
                  Impact: Enhanced AI-driven support, improving self-service
                  start time by <strong>71%</strong> with 99% success probability.
                </blockquote>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Conversational design", "Design system", "AI"].map(
                    (pill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                      >
                        {pill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination mt-8"></div>

        {/* Navigation buttons */}
        <div className="swiper-button-prev text-indigo-600"></div>
        <div className="swiper-button-next text-indigo-600"></div>
      </div>
    </section>
  );
}
