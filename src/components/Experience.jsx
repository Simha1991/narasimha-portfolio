// src/components/Experience.jsx
import React, { useState, useEffect } from "react";

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
        "Spearheaded the UX vision for enterprise-scale platforms, including <strong>Digital Entry Point (DEP)</strong>, the <strong>Unified Portal Experience (UPE)</strong>, and AI-powered <strong>Virtual Assistant (VA)</strong>, delivering measurable results such as $37M+ cost savings.",
        "Defined end-to-end design strategies — from <strong>research and storyboarding</strong> to <strong>high-fidelity prototypes</strong>, ensuring adoption of a mobile-first and scalable approach.",
        "Partnered with executives and engineering teams across multiple geographies to align design innovation with business goals, earning a <strong>President’s Award</strong> for innovation."
      ]
    },
    senior: {
      title: "Senior User Interface Designer — Dell Technologies (2019 – 2021)",
      body: [
        "Redesigned legacy enterprise dashboards into a unified, intuitive experience that streamlined customer journeys and enhanced task efficiency.",
        "Implemented scalable design systems based on <strong>DDS 2.0</strong> and <strong>atomic design principles</strong>, enabling reusability and faster development.",
        "Pioneered multi-fidelity prototyping and <strong>tree testing</strong> to validate navigation models, improving usability scores significantly."
      ]
    },
    designer: {
      title: "UI Designer & Front-End Developer — Dell Technologies (2016 – 2019)",
      body: [
        "Combined <strong>UI design expertise with front-end development</strong> to deliver seamless customer-facing experiences.",
        "Created interactive prototypes, coded responsive UIs, and optimized accessibility across Dell’s enterprise products.",
        "Collaborated with developers to bridge the design-development gap, ensuring design fidelity and performance consistency."
      ]
    },
    robotics: {
      title: "Robotics Developer — LimberLink Technologies (2012 – 2016)",
      body: [
        "Led a <strong>10-member engineering team</strong> in designing and developing robots powered by <strong>microcontrollers</strong>, building automation workflows and control systems for complex industrial tasks.",
        "Partnered on <strong>industry-grade robotics projects</strong>, scaling prototypes into production-ready systems.",
        "Blended leadership with hands-on technical innovation, driving adoption of robotics solutions in real-world environments."
      ]
    }
  };

  // Estimate tallest card height on mount
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    // Estimate using the tallest content (Principal tab seems longest)
    setCardHeight(360); // adjust this number if needed based on content
  }, []);

  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-br from-teal-500 via-green-400 to-green-600 text-white"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold drop-shadow-lg">Experience & Impact</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-white/80">
            Over a decade of transformative work, leading design initiatives that deliver measurable business value and exceptional user experiences.
          </p>
        </div>

        {/* Horizontal Tabs */}
        <div className="flex justify-center gap-10 mb-10 border-b border-white/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 text-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-b-4 border-white text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Glassmorphism Card with fixed height & smooth transition */}
        <div
          className="backdrop-blur-lg bg-black/30 border border-white/20 rounded-2xl shadow-xl p-8 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          style={{ height: `${cardHeight}px` }}
        >
          <h3 className="text-2xl font-semibold mb-6">{content[activeTab].title}</h3>
          <ul className="space-y-4 text-white/90 leading-relaxed">
            {content[activeTab].body.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-300 text-xl">▹</span>
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
