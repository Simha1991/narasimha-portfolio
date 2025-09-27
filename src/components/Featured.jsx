// src/components/Featured.jsx
import React, { useEffect } from "react";

export default function Featured() {
  useEffect(() => {
    const swiper = new window.Swiper(".mySwiper", {
      slidesPerView: 1.05, // main card ~95%, reveal ~5%
      spaceBetween: 30,
      grabCursor: true,
      loop: false,
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
    <section id="featured" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

      <div className="swiper mySwiper max-w-6xl mx-auto">
        <div className="swiper-wrapper">
          {/* Slide 1 - DEP */}
          <div className="swiper-slide">
            <div className="flex flex-col md:flex-row items-center text-left
                            p-10 rounded-2xl shadow-lg
                            bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30
                            border border-white/40">
              <img
                src={`${import.meta.env.BASE_URL}images/dep.png`}
                alt="Digital Entry Point"
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md mb-6 md:mb-0 md:mr-8"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Digital Entry Point (DEP)</h3>
                <h4 className="font-semibold text-lg mb-4">Award-Winning, $37M+ Savings</h4>
                <p className="text-gray-700 mb-3">
                  Revolutionized device registration and lifecycle experience with serialized QR codes.
                </p>
                <p className="text-gray-700 mb-3">
                  Designed end-to-end flow: storyboarding → IA simplification (tree testing) →
                  low-fi & mid-fi → mobile-first final prototype.
                </p>
                <blockquote className="mt-4 p-4 italic border-l-4 border-purple-500 bg-white/40 rounded-md">
                  Earned President's Award for innovation, delivering $37M+ savings and $21M+ in renewal opportunities.
                </blockquote>
              </div>
            </div>
          </div>

          {/* Slide 2 - UPE */}
          <div className="swiper-slide">
            <div className="flex flex-col md:flex-row items-center text-left
                            p-10 rounded-2xl shadow-lg
                            bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30
                            border border-white/40">
              <img
                src={`${import.meta.env.BASE_URL}images/upe.jpg`}
                alt="Unified Portal Experience"
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md mb-6 md:mb-0 md:mr-8"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Unified Portal Experience (UPE)</h3>
                <h4 className="font-semibold text-lg mb-4">Enterprise Experience Unification</h4>
                <p className="text-gray-700 mb-3">
                  Conducted competitive research + capability mapping.
                </p>
                <p className="text-gray-700 mb-3">
                  Designed IA through open card sorting, created multi-fidelity wireframes, and iterated with stakeholders.
                </p>
                <blockquote className="mt-4 p-4 italic border-l-4 border-purple-500 bg-white/40 rounded-md">
                  Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.
                </blockquote>
              </div>
            </div>
          </div>

          {/* Slide 3 - VA */}
          <div className="swiper-slide">
            <div className="flex flex-col md:flex-row items-center text-left
                            p-10 rounded-2xl shadow-lg
                            bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30
                            border border-white/40">
              <img
                src={`${import.meta.env.BASE_URL}images/va.jpg`}
                alt="Virtual Assistant"
                className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md mb-6 md:mb-0 md:mr-8"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Virtual Assistant (VA)</h3>
                <h4 className="font-semibold text-lg mb-4">AI-Powered Conversational Design</h4>
                <p className="text-gray-700 mb-3">
                  Standardized VA across portals using DDS 2.0 + Atomic Design.
                </p>
                <p className="text-gray-700 mb-3">
                  Created scalable components (chat bubbles, action menus, micro-interactions).
                </p>
                <blockquote className="mt-4 p-4 italic border-l-4 border-purple-500 bg-white/40 rounded-md">
                  Enhanced AI-driven support, improving self-service start time by 71% with 99% success probability.
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Nav + Pagination */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  );
}
