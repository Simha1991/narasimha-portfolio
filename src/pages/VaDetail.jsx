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
          Reimagining enterprise support with AI-driven assistance
        </p>

        {/* Role */}
        <p className="text-sm text-gray-600 mb-16">
          <span className="font-semibold text-gray-900">Role:</span> Principal UX Designer ·
          <span className="font-semibold text-gray-900"> Scope:</span> UX, IA, AI interaction design ·
          <span className="font-semibold text-gray-900"> Team:</span> Product, Engineering
        </p>

        {/* Sections */}
        <div className="space-y-24">

          {/* Problem */}
          <section className="py-16">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              The existing Virtual Assistant experience was deeply buried within support flows — often requiring
              8–9 steps before users could even access help.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Users were forced through rigid, decision-tree interactions based on predefined questions, with no
              ability to describe issues in natural language. This led to low success rates and heavy reliance on
              support agents.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              For enterprise ISG customers, this delay directly impacted operations, where speed and accuracy of
              support are critical.
            </p>
          </section>

          {/* Before */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                What was broken
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <ul className="text-gray-700 space-y-2 mb-8">
              <li>• Virtual Assistant hidden deep within navigation</li>
              <li>• Rigid yes/no interaction model</li>
              <li>• No natural language input</li>
              <li>• High effort to initiate support</li>
              <li>• Low success rate (~8%)</li>
            </ul>

            <img
              src="/narasimha-portfolio/images/va-entry-point.png"
              alt="Existing VA entry"
              className="w-full rounded-lg shadow-md"
            />
          </section>

          {/* Insight */}
          <section className="py-16">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Key Insight
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Users don’t want to “find support” — they want immediate help.
            </p>

            <p className="text-gray-600 mt-4">
              Bringing assistance to the entry point significantly improves speed, trust, and success rates.
            </p>
          </section>

          {/* Solution */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We redesigned the Virtual Assistant as a first-class entry point in the support experience.
              Users can now access AI-powered assistance immediately after entering their device details,
              eliminating unnecessary navigation.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The new experience supports natural language interaction, enabling users to describe issues
              freely while the system intelligently guides them toward resolution.
            </p>

            <img
              src="/narasimha-portfolio/images/va-landscape.png"
              alt="VA ecosystem exploration"
              className="w-full rounded-lg shadow-md mt-8"
            />
          </section>

          {/* Key Decisions */}
          <section className="py-16">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Key Design Decisions
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <ul className="text-gray-700 space-y-2">
              <li>• Moved VA to the top-level entry point</li>
              <li>• Replaced decision-tree flows with natural language input</li>
              <li>• Introduced critical issue detection for faster escalation</li>
              <li>• Integrated knowledge base directly within chat</li>
              <li>• Unified support journey across self-service and assisted flows</li>
            </ul>
          </section>

          {/* Final Experience */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Final Experience
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 mb-8">
              The redesigned Virtual Assistant delivers multiple modes of assistance, enabling faster resolution
              across a wide range of support scenarios.
            </p>

            <img
              src="/narasimha-portfolio/images/va-ai-flows.png"
              alt="VA flows"
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
              <p className="text-5xl font-bold text-indigo-600">+71%</p>
              <p className="text-gray-600 mt-2">faster time to support</p>
            </div>

            <ul className="text-gray-700 space-y-2">
              <li>• Increased success rate from ~8% to ~95%</li>
              <li>• Reduced unnecessary service requests</li>
              <li>• Improved enterprise customer trust</li>
              <li>• Streamlined support experience across ISG</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
