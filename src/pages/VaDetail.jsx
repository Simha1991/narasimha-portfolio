// src/pages/VaDetail.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VaDetail() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">

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
          <section>
            <h2 className="text-2xl font-semibold mb-4">Context</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
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
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Problem</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The support experience was fragmented, rigid, and heavily process-driven rather than user-driven.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Users were required to navigate multiple disconnected steps before they could even begin describing
              their issue. These steps included identifying the product, selecting support categories, validating
              severity levels, and entering details — all before receiving any meaningful assistance.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This created a high-friction experience where users were forced to make decisions without sufficient
              context, reducing trust and increasing time to resolution.
            </p>

            <img
              src="/narasimha-portfolio/images/va-landscape.png"
              alt="Fragmented support experience"
              className="w-full rounded-lg shadow-md"
            />
          </section>

          {/* Diagnosis */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Diagnosis</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Through analysis and user research, three fundamental issues emerged:
            </p>

            <img
              src="/narasimha-portfolio/images/va-process-split.png"
              alt="Process breakdown"
              className="w-full rounded-lg shadow-md mb-8"
            />

            <div className="space-y-6 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">1. Delayed entry to support</p>
                <p>
                  Users could not access help immediately, increasing effort and drop-offs.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">2. Rigid interaction model</p>
                <p>
                  Decision-tree based flows restricted users from describing issues naturally.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">3. System-centric design</p>
                <p>
                  The experience prioritized internal processes over user needs.
                </p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Solution</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We reimagined the Virtual Assistant as a first-class entry point in the support experience,
              enabling users to access help instantly instead of navigating multiple steps.
            </p>

            <img
              src="/narasimha-portfolio/images/va-entry.png"
              alt="New VA entry point"
              className="w-full rounded-lg shadow-md mb-6"
            />

            <p className="text-gray-700 leading-relaxed">
              The redesigned experience supports natural language interaction, allowing users to describe issues
              freely while the system intelligently guides them toward resolution.
            </p>
          </section>

          {/* NEW SECTION */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              A unified AI-powered support experience
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The redesigned Virtual Assistant brings multiple support capabilities into a single, unified experience.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Instead of navigating separate tools, users can interact with the system in the way that best fits their needs:
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Conversational support through natural language interaction</li>
              <li>• Contextual knowledge base guidance and troubleshooting steps</li>
              <li>• Advanced diagnostics through log analysis for complex issues</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              By consolidating these capabilities, the Virtual Assistant becomes more than a chatbot —
              it acts as a self-service support platform, enabling users to diagnose and resolve issues
              without leaving the experience.
            </p>

            <img
              src="/narasimha-portfolio/images/va-ai-flows.png"
              alt="AI-powered support flows"
              className="w-full rounded-lg shadow-md"
            />
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Impact</h2>

            <div className="text-center mb-8">
              <p className="text-5xl font-bold text-indigo-600">71%</p>
              <p className="text-gray-600 mt-2">reduction in time to start support</p>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li>• Increased success rate from ~8% to ~95%</li>
              <li>• Reduced unnecessary service requests</li>
              <li>• Improved trust among enterprise users</li>
              <li>• Enabled faster resolution for critical issues</li>
              <li>• Streamlined support experience across ISG systems</li>
            </ul>

            <p className="text-gray-700 mt-6 leading-relaxed">
              The Virtual Assistant evolved from a hidden feature into a primary support channel.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
