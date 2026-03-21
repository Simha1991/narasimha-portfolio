// src/pages/DepDetail.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DepDetail() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-sm text-gray-500 hover:text-gray-800 transition"
        >
          ← Back to work
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Digital Entry Point (DEP)
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Eliminating friction in device support through a QR-first experience
        </p>

        {/* Role */}
        <p className="text-sm text-gray-600 mb-16">
          <span className="font-semibold text-gray-900">Role:</span> Principal UX Designer ·
          <span className="font-semibold text-gray-900"> Scope:</span> End-to-end UX (Research → IA → Design) ·
          <span className="font-semibold text-gray-900"> Team:</span> Product, Engineering, Design
        </p>

        {/* ALL SECTIONS */}
        <div className="space-y-24">

          {/* Problem */}
          <section className="py-16">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Accessing device support was complex, fragmented, and heavily dependent on assisted channels.
              Users had to locate a service tag, manually enter it, navigate multiple pages, and still struggled
              to find relevant information. Most users defaulted to calling support — even for simple issues.
            </p>
          </section>

          {/* Before vs After */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                From fragmented experience to instant access
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <img
              src="/narasimha-portfolio/images/dep-before-after.png"
              alt="Before vs After journey"
              className="w-full rounded-lg shadow-md"
            />
          </section>

          {/* Scenario */}
          <section className="py-16">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Real-world scenario: When a device issue occurs
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-6">
              Users often struggled to take the right next step when something went wrong.
              The redesigned experience enables immediate action without relying on support.
            </p>

            <img
              src="/narasimha-portfolio/images/dep-scenario.png"
              alt="User scenario"
              className="w-full rounded-lg shadow-md"
            />
          </section>

          {/* Solution */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-8">
              We introduced a QR-based unified entry point that instantly connects users to their device.
              The experience dynamically adapts based on the device lifecycle — from onboarding to troubleshooting
              to end-of-life decisions.
            </p>

            <img
              src="/narasimha-portfolio/images/dep-lifecycle.png"
              alt="Lifecycle experience"
              className="w-full rounded-lg shadow-md"
            />
          </section>

          {/* Key Decisions */}
          <section className="py-16">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Key Design Decisions</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Replaced service tag dependency with QR-based access</li>
              <li>Created a unified entry point across all device types</li>
              <li>Introduced lifecycle-driven contextual guidance</li>
              <li>Enabled self-service actions to reduce support dependency</li>
            </ul>
          </section>

          {/* Final UI */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Final Experience</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <img
              src="/narasimha-portfolio/images/dep-final-ui.png"
              alt="Final UI"
              className="w-full rounded-lg shadow-md"
            />
          </section>

          {/* Impact */}
          <section className="py-16">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Impact</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <div className="text-center mb-10">
              <p className="text-5xl font-bold text-indigo-600">$37M+</p>
              <p className="text-gray-600 mt-2">
                saved by shifting assisted support to self-service
              </p>
            </div>

            <ul className="text-gray-700 space-y-2 mb-10">
              <li>• Reduced customer support calls significantly</li>
              <li>• Improved discoverability of device information</li>
              <li>• Increased adoption of self-service flows</li>
              <li>• Recognized with Dell President’s Award</li>
            </ul>

            <img
              src="/narasimha-portfolio/images/dep-award.png"
              alt="President Award"
              className="w-full rounded-lg shadow-md"
            />
          </section>

        </div>
      </div>
    </div>
  );
}
