import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Featured() {
  const slides = [
    {
      id: "dep",
      title: "Dell Enterprise Portal (DEP)",
      subtitle: "Streamlined Enterprise Support",
      body: "Developed a unified portal for Dell to centralize enterprise support, simplify workflows, and improve customer experience.",
      pills: ["React", "Redux", "Node.js", "Tailwind"],
      impact: "Impact: Reduced enterprise support resolution time by 25%.",
      img: "images/dep.png",
    },
    {
      id: "va",
      title: "Virtual Assistant (VA)",
      subtitle: "Conversational AI Assistant",
      body: "Built an AI-powered assistant integrated with knowledge bases to guide users through troubleshooting and support journeys.",
      pills: ["Dialogflow", "React", "APIs"],
      impact: "Impact: Improved self-service adoption by 40%.",
      img: "images/va.jpg",
    },
    {
      id: "upe",
      title: "Unified Product Experience (UPE)",
      subtitle: "Enterprise Experience Unification",
      body: "Designed IA through open card sorting, created multi-fidelity wireframes, and iterated with stakeholders.",
      pills: ["Dashboard design", "Information architecture", "Enterprise design"],
      impact: "Impact: Built a unified dashboard (service events, lifecycle, fleet health, notifications). Preparing for production rollout.",
      img: "images/upe.jpg",
    },
  ];

  return (
    <section id="featured" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="max-w-5xl mx-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-2xl shadow-lg">
              {/* Image on top */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-64 object-contain rounded-lg mb-6"
              />

              {/* Text below */}
              <h3 className="text-2xl font-semibold">{slide.title}</h3>
              <p className="text-lg text-gray-600 mb-2">{slide.subtitle}</p>
              <p className="text-gray-700 mb-4">{slide.body}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {slide.pills.map((pill, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <p className="font-medium text-gray-800">{slide.impact}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
