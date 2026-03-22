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

            <p className="text-gray-700 leading-relaxed mb-4">
              The support experience was fragmented, rigid, and heavily process-driven rather than user-driven. Users were required to navigate multiple disconnected steps before they could even begin describing their issue—identifying their device, selecting categories, validating severity, and entering details—all before receiving any meaningful assistance. This created a high-friction experience where users were forced to make decisions without sufficient context, increasing effort, reducing trust, and delaying resolution.
            </p>

            <p className="text-gray-700 leading-relaxed">
              A major challenge was the inconsistency in how users could access the Virtual Assistant. There were multiple entry points across the ecosystem, but none were predictable or consistent. Each time users searched for help, they had to relearn where and how to access support. Even when they found the right path, reaching the Virtual Assistant required navigating several steps, making it difficult to access immediate help when it was needed the most.
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

            <p className="text-gray-700 leading-relaxed mb-6">
  Through detailed analysis and user research, three key issues emerged that were fundamentally impacting the effectiveness of the support experience:
</p>

<div className="space-y-6 text-gray-700">

  <div>
    <p className="font-semibold text-gray-900">1. Delayed entry to support</p>
    <p>
      Support was not immediately accessible to users. Instead of getting help directly, users had to go through multiple preparatory steps such as identifying their device model, selecting the type of issue, and entering additional details. In many cases, only specific issue paths would eventually lead to the Virtual Assistant, making access inconsistent and time-consuming.
    </p>
  </div>

  <div>
    <p className="font-semibold text-gray-900">2. Rigid interaction model</p>
    <p>
      The Virtual Assistant experience was limited to a one-way interaction model. Users were forced to choose from predefined options presented on the screen, with no ability to describe their problem in their own words. This restricted flexibility and prevented users from expressing complex or nuanced issues effectively.
    </p>
  </div>

  <div>
    <p className="font-semibold text-gray-900">3. System-centric design</p>
    <p>
      The experience was designed around predefined workflows and internal system logic rather than user needs. Users had to follow a fixed set of steps regardless of their context, often leading to frustration when they were unable to find relevant answers or were forced down paths that did not match their actual problem.
    </p>
  </div>

</div>

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

            <p className="text-gray-700 leading-relaxed mb-4">
  We reimagined the Virtual Assistant as the primary entry point for support by standardizing access across the entire ecosystem. Every location across the website that previously pointed to different help paths was redirected to a unified support home, where the Virtual Assistant is immediately available. This ensured that regardless of where users initiated their journey, they were consistently guided to the same starting point for support.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  The redesigned experience eliminates the need for users to navigate multiple steps before getting help. Instead, users are brought directly into the support flow, where they can begin interacting with the system instantly.
</p>

<p className="text-gray-700 leading-relaxed">
  The introduction of natural language processing enables users to describe their issues freely, without being constrained by predefined options. For critical or high-severity issues, the system prioritizes speed by immediately surfacing contact options, allowing users to connect with support teams without delay.
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

            <p className="text-gray-700 leading-relaxed mb-6">
  The redesigned Virtual Assistant brings together multiple support capabilities into a single AI-powered system, enabling users to resolve issues without switching between tools or workflows.
</p>

<div className="space-y-6 text-gray-700">

  <div>
    <p className="font-semibold text-gray-900">Conversational AI support</p>
    <p>
      The Virtual Assistant enables users to interact using natural language, allowing them to describe their problems in their own words. The AI analyzes the input and provides relevant guidance, replicating the role of multiple support agents within a single interface.
    </p>
  </div>

  <div>
    <p className="font-semibold text-gray-900">Knowledge base guidance</p>
    <p>
      When users require detailed instructions or step-by-step support, the system surfaces relevant knowledge base articles in real time. These resources can be accessed alongside the conversation, allowing users to follow guidance without losing context.
    </p>
  </div>

  <div>
    <p className="font-semibold text-gray-900">Advanced diagnostics</p>
    <p>
      For more complex issues, users can upload error logs directly within the Virtual Assistant. The system processes these logs, performs analysis, and provides actionable insights. If required, it can automatically create service requests for hardware-related issues, ensuring seamless escalation without additional user effort.
    </p>
  </div>

</div>

<p className="text-gray-700 mt-6 leading-relaxed">
  By combining these capabilities, the Virtual Assistant functions as a comprehensive self-service platform, enabling users to diagnose and resolve issues without leaving the experience.
</p>

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

           <p className="text-gray-700 leading-relaxed">
  Establishing the Virtual Assistant as the central, AI-driven support experience significantly improved how enterprise customers access and resolve issues. Users are now able to get help immediately without navigating complex workflows, leading to faster problem resolution and improved confidence in self-service. This shift has reduced dependency on assisted support channels, resulting in fewer support calls and increased operational efficiency. By enabling quicker resolutions and minimizing downtime, the experience not only improves customer satisfaction but also contributes to measurable business impact.
</p>
          </section>

        </div>
      </div>
    </div>
  );
}
