// src/components/Experience.jsx
import React, { useState } from "react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("principal");

  const tabs = [
    { id: "principal", label: "Principal UI Designer" },
    { id: "senior", label: "Senior UI Designer" },
    { id: "designer", label: "UI Designer & Front-End Dev" },
    { id: "robotics", label: "Robotics Developer" },
  ];

  const content = {
    principal: {
      title: "Principal User Interface Designer — Dell Technologies (2021 – Present)",
      body: [
        "Spearheaded the UX vision for enterprise-scale platforms, including **Digital Entry Point (DEP)**, the **Unified Portal Experience (UPE)**, and AI-powered **Virtual Assistant (VA)**, delivering measurable results such as $37M+ cost savings.",
        "Defined end-to-end design strategies — from **research and storyboarding** to **high-fidelity prototypes**, ensuring adoption of a mobile-first and scalable approach.",
        "Partnered with executives and engineering teams across multiple geographies to align design innovation with business goals, earning a **President’s Award** for innovation."
      ]
    },
    senior: {
      title: "Senior User Interface Designer — Dell Technologies (2019 – 2021)",
      body: [
        "Redesigned legacy enterprise dashboards into a unified, intuitive experience that streamlined customer journeys and enhanced task efficiency.",
        "Implemented scalable design systems based on **DDS 2.0** and **atomic design principles**, enabling reusability and faster development.",
        "Pioneered multi-fidelity prototyping and **tree testing** to validate navigation models, improving usability scores significantly."
      ]
    },
    designer: {
      title: "UI Designer & Front-End Developer — Dell Technologies (2016 – 2019)",
      body: [
        "Combined **UI design expertise with front-end development** to deliver seamless customer-facing experiences.",
        "Created interactive prototypes, coded responsive UIs, and optimized accessibility across Dell’s enterprise products.",
        "Collaborated with developers to bridge the design-development gap, ensuring design fidelity and performance consistency."
      ]
    },
    robotics: {
      title: "Robotics Developer — LimberLink Technologies (2012 – 2016)",
      body: [
        "Led a **10-member engineering team** in designing and developing robots powered by **microcontrollers**, building automation workflows and control systems for complex industrial tasks.",
        "Partnered on **industry-grade robotics projects**, scaling prototypes into production-ready systems.",
        "Blended leadership with hands-on technical innovation, driving adoption of robotics solutions in real-world environments."
      ]
    }
  };

  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold drop-shadow-lg">Experience & Impact</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-white/80">
            Over a decade of transformative work, leading design initiatives that deliver measurable business value and exceptional user experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeTab === tab.id
                  ? "bg-white text-indigo-700 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Glassmorphism Card */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6">{content[activeTab].title}</h3>
          <ul className="space-y-4 text-white/90 leading-relaxed">
            {content[activeTab].body.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-pink-300 text-xl">▹</span>
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
