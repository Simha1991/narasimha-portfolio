// src/pages/VaDetail.jsx
import React from "react";

export default function VaDetail() {
  return (
    <div className="bg-white text-gray-900">

      {/* HEADER */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="mb-4 opacity-80">← Back to work</p>

          <h1 className="text-5xl font-bold mb-6">
            Virtual Assistant (VA)
          </h1>

          <p className="text-xl opacity-90 max-w-3xl">
            Reimagining enterprise support by bringing AI-powered assistance to the forefront —
            reducing friction, accelerating resolution, and improving customer trust.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Role: Principal UX Designer
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Scope: Enterprise Support (ISG)
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Impact: 71% faster start · ~95% success rate
            </span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Understanding the problem
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              The existing support experience required users to navigate multiple disconnected steps 
              before getting help. Critical actions like identifying the issue, validating severity, 
              and choosing contact methods were scattered — increasing effort and delaying resolution.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>• <span className="font-medium">9+ steps</span> before reaching support</li>
              <li>• Forced decisions before understanding the issue</li>
              <li>• <span className="font-medium">Redundant validation</span> (sign-in, severity)</li>
              <li>• No clear entry point for immediate help</li>
              <li>• Experience reduced user trust</li>
            </ul>
          </div>

          <div>
            <img
              src="/narasimha-portfolio/images/va-problem-flow.png"
              alt="Fragmented support flow"
              className="w-full rounded-lg shadow-md"
            />

            <p className="text-sm text-gray-500 mt-4">
              Legacy support journey showing multiple steps and delays before users could access help.
            </p>
          </div>

        </div>
      </section>

      {/* LANDSCAPE */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Fragmented ecosystem across support portals
          </h2>

          <img
            src="/narasimha-portfolio/images/va-landscape.png"
            alt="Fragmented ecosystem"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ENTRY POINT */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Virtual Assistant was buried deep in the journey
          </h2>

          <img
            src="/narasimha-portfolio/images/va-entry.png"
            alt="VA entry point"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Reimagining support through AI-driven assistance
          </h2>

          <img
            src="/narasimha-portfolio/images/va-ai-flows.png"
            alt="VA capabilities"
            className="w-full rounded-lg shadow-md"
          />

        </div>
      </section>

      {/* WHAT WE DID */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Key improvements
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>• Moved Virtual Assistant to the <span className="font-medium">top of the journey</span></li>
            <li>• Enabled <span className="font-medium">natural language input</span> instead of rigid flows</li>
            <li>• Reduced dependency on multi-step navigation</li>
            <li>• Introduced <span className="font-medium">critical issue detection</span> with direct escalation</li>
            <li>• Integrated knowledge base + guided troubleshooting</li>
            <li>• Unified “Contact Us” within the VA experience</li>
          </ul>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Impact
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>• <span className="font-medium">71% faster</span> time to start support</li>
            <li>• Increased success rate from <span className="font-medium">~8% → ~95%</span></li>
            <li>• Reduced unnecessary support tickets</li>
            <li>• Improved discoverability of help</li>
            <li>• Enabled faster resolution for enterprise customers</li>
          </ul>

        </div>
      </section>

    </div>
  );
}
