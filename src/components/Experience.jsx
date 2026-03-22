export default function Experience() {
  const experiences = [
    {
      role: "Principal UX Designer",
      company: "Dell Technologies",
      duration: "Present",
      points: [
        "Led end-to-end UX for enterprise platforms spanning AI, support, and lifecycle experiences",
        "Designed scalable systems that reduced support dependency and improved self-service adoption",
        "Defined unified experiences across fragmented ecosystems, influencing products used by millions",
        "Partnered with product and engineering to translate complex workflows into intuitive solutions"
      ]
    },
    {
      role: "Senior UX Designer (UI & Front-end)",
      company: "Previous Company",
      duration: "Earlier",
      points: [
        "Designed and built responsive enterprise applications with strong focus on usability and performance",
        "Bridged design and engineering by translating UX concepts into production-ready front-end systems",
        "Improved product quality by aligning design decisions closely with engineering constraints",
        "Streamlined workflows and reduced friction through iterative design and usability improvements"
      ]
    }
  ];

  return (
    <section 
      id="experience"
      className="py-24 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white"
    >
      
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Experience
        </h2>

        <div className="space-y-16">
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l border-white/20 hover:border-teal-400 transition-all duration-300 group"
            >
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white rounded-full border-2 border-slate-900 group-hover:bg-teal-400 transition"></div>
              
              {/* Role + Company */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-teal-300 transition">
                    {exp.role}
                  </h3>
                  <p className="text-gray-300 mt-1">
                    {exp.company}
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              {/* Points */}
              <div className="mt-6 space-y-3">
                {exp.points.map((point, i) => (
                  <p 
                    key={i} 
                    className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition"
                  >
                    {point}
                  </p>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
