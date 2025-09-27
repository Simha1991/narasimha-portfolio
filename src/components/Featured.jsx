import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

// ✅ Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Featured = () => {
  const slides = [
    {
      id: "dep",
      title: "Dell Enterprise Portal",
      subtitle: "Streamlined Support Portal",
      body: "Built an enterprise-grade portal for Dell to unify support access, improve discoverability, and optimize workflows.",
      pills: ["React", "Redux", "Node.js", "Tailwind"],
      impact: "Impact: Reduced ticket resolution time by 25%.",
      img: "/images/dep.jpg",
    },
    {
      id: "va",
      title: "Virtual Assistant",
      subtitle: "Conversational AI Assistant",
      body: "Developed an AI-powered virtual assistant that integrates with knowledge bases to guide users through complex troubleshooting.",
      pills: ["Dialogflow", "React", "APIs"],
      impact: "Impact: Improved self-service adoption by 40%.",
      img: "/images/va.jpg",
    },
    {
      id: "cloud",
      title: "Cloud Migration Tool",
      subtitle: "Automated Migration Platform",
      body: "Designed an automation tool to help enterprises migrate legacy applications to cloud-native infrastructure.",
      pills: ["AWS", "Kubernetes", "Automation"],
      impact: "Impact: Cut migration timelines by 30%.",
      img: "/images/cloud.jpg",
    },
  ];

  return (
    <section id="featured" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Work</h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="max-w-5xl mx-auto"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="flex flex-col bg-gradient-to-tr from-teal-200/30 via-purple-200/30 to-pink-200/30 
                              rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-white/40 
                              min-h-[480px] max-w-3xl mx-auto">
                
                {/* Image on top */}
                <div className="w-full flex justify-center mb-6">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="rounded-lg border border-gray-200 object-contain max-h-72 w-full max-w-lg"
                  />
                </div>

                {/* Content below */}
                <div className="w-full text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <h4 className="text-lg text-gray-700 mb-4">{s.subtitle}</h4>
                  <p className="text-gray-800 mb-4 leading-relaxed">{s.body}</p>

                  {/* pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.pills.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 bg-white/60 text-sm rounded-full text-gray-800"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <blockquote className="italic text-indigo-700 font-medium mb-6">
                    {s.impact}
                  </blockquote>

                  <Link
                    to={`/${s.id}-detail`}
                    className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                  >
                    View detailed work
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Featured;
