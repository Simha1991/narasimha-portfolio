// src/components/Testimonials.jsx
import React, { useState } from "react";

const testimonials = [
  {
    text: "Narasimha consistently delivers high-quality design work—even on tight timelines—without ever compromising on excellence. He's a true 'Figma guru,' known for his speed, creativity, and technical precision. Beyond his impressive skillset, what stands out most is his collaborative spirit and impact on team culture. His mentorship and willingness to share knowledge lift the whole team, and his passion for learning is both genuine and contagious. He's a tremendous asset to any team lucky enough to work with him.",
    name: "Todd Boyum",
    role: "Senior Manager, Dell Technologies",
    bgGradient: "from-teal-400 via-green-400 to-green-500"
  },
  {
    text: "I had the pleasure of managing Simha directly for two years. He consistently exceeded expectations, generating innovative design concepts that impressed stakeholders and inspired peers. His passion for mentoring and teaching design classes elevated our community, and his initiatives to foster team culture created unity and collaboration. Ambitious, dedicated, and loyal, Simha delivers excellence as an individual contributor and thrives in leadership roles. His talent and work ethic make him invaluable to any design team.",
    name: "Jason Cook",
    role: "Product Experience Strategist",
    bgGradient: "from-green-400 via-teal-400 to-teal-500"
  },
  {
    text: "Simha has a toolkit of understanding the user's point of view, knowledge of UX best practices, and the ability to rapidly prototype so stakeholders can visualize solutions. He takes great pride in his work and is eager to validate designs in real-world application. More than once I saw his designs and thought: 'Wow, what a great solution.' I strongly recommend Simha.",
    name: "Gail Mitchell, ACBA",
    role: "Software Engineer, Dell Technologies",
    bgGradient: "from-teal-300 via-green-300 to-green-400"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 text-white"
    >
      {/* Dark overlay behind entire section */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold drop-shadow-lg mb-6">What People Say</h2>
        <p className="text-lg text-white/80 mb-12">
          Collaborators and peers share their experience working with me on impactful projects.
        </p>

        {/* Testimonial Card */}
        <div className="relative">
          <div
            className={`backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${testimonials[currentIndex].bgGradient}`}
          >
            <div className="bg-black/40 rounded-lg p-6">
              <p className="text-white/90 text-lg mb-6 leading-relaxed">"{testimonials[currentIndex].text}"</p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-white/70">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white text-3xl font-bold px-3"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white text-3xl font-bold px-3"
          >
            ›
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
