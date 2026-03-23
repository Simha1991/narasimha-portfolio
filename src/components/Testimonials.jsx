import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    text: "Narasimha consistently delivers high-quality design work—even on tight timelines—without ever compromising on excellence. He's a true 'Figma guru,' known for his speed, creativity, and technical precision. Beyond his impressive skillset, what stands out most is his collaborative spirit and impact on team culture. His mentorship and willingness to share knowledge lift the whole team, and his passion for learning is both genuine and contagious. He's a tremendous asset to any team lucky enough to work with him.",
    name: "Todd Boyum",
    role: "Senior Manager, Dell Technologies"
  },
  {
    text: "I had the pleasure of managing Simha directly for two years. He consistently exceeded expectations, generating innovative design concepts that impressed stakeholders and inspired peers. His passion for mentoring and teaching design classes elevated our community, and his initiatives to foster team culture created unity and collaboration. Ambitious, dedicated, and loyal, Simha delivers excellence as an individual contributor and thrives in leadership roles. His talent and work ethic make him invaluable to any design team.",
    name: "Jason Cook",
    role: "Product Experience Strategist"
  },
  {
    text: "Simha has a toolkit of understanding the user's point of view, knowledge of UX best practices, and the ability to rapidly prototype so stakeholders can visualize solutions. He takes great pride in his work and is eager to validate designs in real-world application. More than once I saw his designs and thought: 'Wow, what a great solution.' I strongly recommend Simha.",
    name: "Gail Mitchell, ACBA",
    role: "Software Engineer, Dell Technologies"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, currentIndex]);

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-white text-gray-900"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What People Say
        </h2>

        <p className="text-gray-600 mb-16">
          Perspectives from collaborators and leaders I’ve worked with.
        </p>

        {/* Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="border border-gray-200 rounded-2xl p-10 shadow-sm transition-all duration-300">

            {/* Quote mark */}
            <p className="text-5xl text-gray-300 leading-none mb-4">“</p>

            {/* Text */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>

            {/* Author */}
            <div className="mt-8">
              <p className="font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {testimonials[currentIndex].role}
              </p>
            </div>

          </div>

          {/* Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 text-2xl transition"
          >
            ‹
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute -right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 text-2xl transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-6 bg-gray-900"
                  : "w-2 bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
