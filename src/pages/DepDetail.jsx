// src/pages/DepDetail.jsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DepDetail() {
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

        <div className="space-y-24">

          {/* Problem */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

           <p className="text-gray-700 leading-relaxed mb-4">
  Device support was complex and fragmented, but the real challenge started much earlier in the journey. Users were required to locate a service tag on their device — a small alphanumeric code printed in hard-to-find locations that varied across different device types. The text was often tiny, difficult to read, and most users didn’t even understand what a service tag was or why it was needed. This created an immediate barrier before users could even begin seeking help.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  Even after finding the service tag, users had to manually enter it into support portals, navigate multiple pages, and figure out what kind of issue they were facing. Whether it was a driver problem, a hardware issue, or something related to warranty, users were left guessing. The system required them to make decisions without context, making the process confusing and time-consuming.
</p>

<p className="text-gray-700 leading-relaxed">
  As a result, even for simple issues, users would abandon self-service and rely on calling support. This significantly increased operational costs, as assisted support was being used for problems that could have been easily resolved through a better-designed self-service experience.
</p>
          </section>

          {/* Before vs After */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="space-y-8">

  <div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Fragmented support experience
    </h3>
    <p className="text-gray-700 leading-relaxed">
      Users had to locate a service tag, navigate to support pages through search, manually enter the code, and move through multiple steps to find help. The process was confusing, required high effort, and often did not lead to a clear solution. As a result, users frequently depended on phone-based support, even for simple issues.
    </p>
  </div>

  <div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Unified QR-based entry
    </h3>
    <p className="text-gray-700 leading-relaxed">
      We replaced the service tag experience with a QR-based entry point. Users can now simply scan the QR code on their device using their phone — no need to remember or enter any information. The system instantly recognizes the device, presents personalized details, and provides all relevant support options in one place. The experience is context-aware and adapts based on the device lifecycle, making it significantly easier to access the right help at the right time.
    </p>
  </div>

</div>

            <img
              src="/narasimha-portfolio/images/dep-before-after.png"
              alt="Before vs After journey"
              className="w-full rounded-lg shadow-md image-hover"
            />
          </section>

          {/* Scenario */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Real-world scenario: When a device issue occurs
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
  Consider a simple but common scenario — a laptop screen not turning on or a monitor failing to display output. Previously, users had to go through a long and confusing process to identify the issue, locate the service tag, and navigate support channels, often ending up calling support after multiple failed attempts.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  With the redesigned experience, the journey becomes significantly simpler. Users can scan the QR code directly from their device using their phone and instantly access their device-specific support page. From there, they can identify the issue, check warranty status, and take immediate action — whether it’s troubleshooting, updating drivers, or requesting a replacement.
</p>

<p className="text-gray-700 leading-relaxed">
  What previously took multiple steps and considerable effort can now be completed within minutes, allowing users to resolve issues quickly and get back to their work without relying on support calls.
</p>

            <img
              src="/narasimha-portfolio/images/dep-scenario.png"
              alt="User scenario"
              className="w-full rounded-lg shadow-md image-hover"
            />
          </section>

          {/* Solution */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
  The solution was designed across two key layers — hardware and digital experience — working together to create a seamless support entry point.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  At the hardware level, we introduced QR codes on customer devices, replacing the need for service tags. This made it effortless for users to initiate support by simply scanning the code using their phone.
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  At the experience level, we built a centralized digital entry point — a unified webpage that brings together all device-related information and support actions in one place. Users can view device details, access lifecycle-based recommendations, troubleshoot issues, update drivers, and connect to support when needed.
</p>

<p className="text-gray-700 leading-relaxed">
  The experience is dynamically tailored based on the device lifecycle. Whether the device is new, in active use, or nearing end-of-life, users are provided with relevant actions such as setup guidance, maintenance updates, or trade-in and recycling options. This ensures that users always know what to do next, without needing to search or guess.
</p>

            <img
              src="/narasimha-portfolio/images/dep-lifecycle.png"
              alt="Lifecycle experience"
              className="w-full rounded-lg shadow-md image-hover"
            />
          </section>

          {/* Key Decisions */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Key Design Decisions</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <div className="space-y-6 text-gray-700">

  <p>
    <span className="font-semibold text-gray-900">Replacing service tag dependency with QR-based access</span><br />
    The traditional service tag approach created friction at the very first step of the support journey. By replacing it with a QR code, we removed the need for users to locate, read, and manually enter complex identifiers, making access to support immediate and effortless.
  </p>

  <p>
    <span className="font-semibold text-gray-900">Creating a unified entry point across all devices</span><br />
    Instead of navigating multiple portals and pages, users are now directed to a single, consistent experience that works across all device types. This reduces confusion and ensures that users always know where to go for support.
  </p>

  <p>
    <span className="font-semibold text-gray-900">Introducing lifecycle-driven context</span><br />
    The system understands the device lifecycle — including warranty status and usage stage — and surfaces the most relevant actions. This helps users reach the right solution faster without unnecessary exploration.
  </p>

  <p>
    <span className="font-semibold text-gray-900">Enabling self-service to reduce support dependency</span><br />
    By providing actionable solutions upfront, users can resolve issues independently without needing to contact support. This significantly reduces support calls and improves overall efficiency.
  </p>

</div>
          </section>

          {/* Final UI */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Final Experience</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed">
  The Digital Entry Point transformed the way customers interact with device support. What was once a complex, multi-step process dependent on phone-based support is now an instant, self-service experience available directly on the user’s phone. By simply scanning a QR code, users can access everything they need — from device details to troubleshooting and support — within seconds. This shift not only simplifies the experience but also empowers users to resolve issues independently and get back to their work faster. More than just a feature, this became a breakthrough in how support is delivered, redefining the relationship between users and device assistance.
</p>

            <img
              src="/narasimha-portfolio/images/dep-final-ui.png"
              alt="Final UI"
              className="w-full rounded-lg shadow-md image-hover"
            />
          </section>

          {/* Impact */}
          <section className="py-16 fade-in-section">
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

            <p className="text-gray-700 leading-relaxed">
  The Digital Entry Point significantly improved both user experience and business outcomes. By enabling users to access device information and resolve issues independently, we reduced reliance on customer support channels and lowered operational costs. The experience improved discoverability of device-specific information, increased adoption of self-service workflows, and helped users resolve issues faster. This transformation was recognized with Dell’s prestigious President’s Award, highlighting the impact of shifting from assisted support to an efficient, scalable self-service model.
</p>

            <img
              src="/narasimha-portfolio/images/dep-award.png"
              alt="President Award"
              className="w-full rounded-lg shadow-md image-hover"
            />
          </section>

        </div>
      </div>
    </div>
  );
}
