export default function Experience() {
  const experiences = [
    {
      role: "Principal UX Designer",
      company: "Dell Technologies",
      duration: "Present",
      impact: "Reduced support dependency · Increased self-service adoption · Unified platform experiences at scale",
      points: [
        "Led UX strategy and execution for enterprise platforms across AI, support, and lifecycle experiences",
        "Designed scalable systems that reduced support dependency and increased self-service adoption across global users",
        "Defined a unified experience across fragmented ecosystems, shaping products used by millions worldwide",
        "Aligned product, engineering, and business stakeholders to translate complex workflows into intuitive, high-impact solutions"
      ]
    },
    {
      role: "Senior UX Designer (UI & Front-end)",
      company: "Dell Technologies",
      duration: "Earlier",
      impact: "Improved product quality · Strengthened design-engineering alignment · Reduced workflow friction",
      points: [
        "Designed and built responsive enterprise applications with strong focus on usability, performance, and scalability",
        "Bridged design and engineering by translating UX concepts into production-ready front-end systems",
        "Improved product quality by aligning design decisions closely with technical constraints and implementation realities",
        "Streamlined complex workflows, reducing friction and improving overall user efficiency through iterative design improvements"
      ]
    }
  ];

  return (
    <section 
      id="experience"
      className="py-24 px-6 bg-white text-gray-900"
    >
      
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">
          Experience
        </h2>

        <div className="space-y-20">
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l border-gray-200 hover:border-gray-400 transition-all duration-300 group"
            >
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gray-900 rounded-full border-2 border-white group-hover:bg-gray-700 transition"></div>
              
              {/* Role + Company */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {exp.company}
                  </p>
                </div>

                <p className="text-sm text-gray-500 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              {/* Impact Summary */}
              <p className="mt-4 text-sm text-gray-500 italic">
                {exp.impact}
              </p>

              {/* Points */}
              <div className="mt-6 space-y-3">
                {exp.points.map((point, i) => (
                  <p 
                    key={i} 
                    className="text-gray-600 text-sm leading-relaxed"
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
