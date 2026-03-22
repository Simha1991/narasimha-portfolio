// src/pages/VaDetail.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VaDetail() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
          Virtual Assistant (VA)
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Reimagining enterprise support by bringing AI-driven assistance to the forefront
        </p>

        {/* Role */}
        <p className="text-sm text-gray-600 mb-16">
          <span className="font-semibold text-gray-900">Role:</span> Principal UX Designer ·
          <span className="font-semibold text-gray-900"> Scope:</span> UX, IA, AI interaction design ·
          <span className="font-semibold text-gray-900"> Team:</span> Product, Engineering
        </p>

        <div className="space-y-24">

          {/* Context */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Context</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              A Virtual Assistant already existed within the support ecosystem, but it was heavily underutilized.
              Despite being designed to help users resolve issues faster, it remained buried deep within the
              support journey — often requiring 8–9 steps before users could even access it.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Enterprise users — primarily administrators and technicians managing critical infrastructure —
              either didn’t know the Virtual Assistant existed or found it too difficult to reach.
              As a result, most users defaulted to assisted support, increasing operational cost and delaying resolution.
            </p>
          </section>

          {/* Problem */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              The support experience was fragmented, rigid, and heavily process-driven rather than user-driven.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Users were required to navigate multiple disconnected steps before they could even begin describing
              their issue.
            </p>

            <img
              src="/narasimha-portfolio/images/va-landscape.png"
              className="w-full rounded-lg shadow-md image-hover mt-6"
            />
          </section>

          {/* Diagnosis */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Diagnosis</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-6">
              Through analysis and research, three key issues emerged:
            </p>

            <img
              src="/narasimha-portfolio/images/va-process-split.png"
              className="w-full rounded-lg shadow-md image-hover mb-8"
            />

            <ul className="space-y-4 text-gray-700">
              <li>• Delayed entry to support</li>
              <li>• Rigid interaction model</li>
              <li>• System-centric design</li>
            </ul>
          </section>

          {/* Solution */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-6">
              We reimagined Virtual Assistant as the primary entry point to support, enabling immediate access.
            </p>

            <div className="flex justify-center">
              <img
                src="/narasimha-portfolio/images/va-entry.png"
                className="w-1/2 rounded-lg shadow-md image-hover"
              />
            </div>

            <p className="text-gray-700 mt-6">
              Users can now describe issues in natural language and receive intelligent guidance instantly.
            </p>
          </section>

          {/* AI Section */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                A unified AI-powered support experience
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The redesigned Virtual Assistant brings multiple capabilities into a single experience.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Conversational support</li>
              <li>• Knowledge base guidance</li>
              <li>• Advanced diagnostics</li>
            </ul>

            <img
              src="/narasimha-portfolio/images/va-ai-flows.png"
              className="w-full rounded-lg shadow-md image-hover"
            />
          </section>

          {/* Impact */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Impact</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <div className="text-center mb-8">
              <p className="text-5xl font-bold text-indigo-600">71%</p>
              <p className="text-gray-600 mt-2">faster time to support</p>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li>• Success rate improved to ~95%</li>
              <li>• Reduced support dependency</li>
              <li>• Faster resolution</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
