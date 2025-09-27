// src/components/About.jsx
import React from "react";

/* About Section */
export default function About() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I’m a Principal UX Designer specializing in AI-augmented experiences.
          With a strong background in human-centered design, I’ve led award-winning
          projects that streamlined workflows, reduced costs, and created
          delightful user experiences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          I’ve led transformative initiatives at the intersection of design, AI,
          and enterprise-scale systems.
        </p>

        {/* Two-column layout for cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Achievements Card */}
          <div
            className="p-8 rounded-2xl shadow-lg backdrop-blur-lg
                       bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30
                       border border-white/40"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Key Achievements</h3>
            <ul className="space-y-6 text-left text-gray-700">
              <li>
                <p className="font-bold text-gray-800">Digital Entry Point</p>
                <p>
                  Award-winning product that saved <strong>$37M+</strong> and redefined
                  the customer device lifecycle.
                </p>
              </li>
              <li>
                <p className="font-bold text-gray-800">Unified Portal</p>
                <p>
                  Led research and design for a consolidated enterprise hub,
                  simplifying customer experiences.
                </p>
              </li>
              <li>
                <p className="font-bold text-gray-800">Virtual Assistant</p>
                <p>
                  Scaled Dell’s AI-powered conversational design, reducing
                  self-service start time by <strong>71%</strong>.
                </p>
              </li>
            </ul>
          </div>

          {/* Recognition & Awards Card */}
          <div
            className="p-8 rounded-2xl shadow-lg backdrop-blur-lg
                       bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30
                       border border-white/40"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Recognition & Awards
            </h3>
            <ul className="space-y-6 text-left text-gray-700">
              <li>
                <p className="font-bold text-gray-800">
                  President’s Award — Digital Entry Point (DEP)
                </p>
                <p>Dell’s highest recognition for innovation and business impact.</p>
              </li>
              <li>
                <p className="font-bold text-gray-800">
                  Dell Award for Innovation — Design Libraries
                </p>
                <p>Recognized for creating scalable design systems.</p>
              </li>
              <li>
                <p className="font-bold text-gray-800">NN/g Certified UX Designer</p>
                <p>Industry’s most respected UX certification.</p>
              </li>
              <li>
                <p className="font-bold text-gray-800">Rising Leader at Dell (RLD)</p>
                <p>Selected for Dell’s high-potential leadership program.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* About Section Ends */}
    </>
  );
}
