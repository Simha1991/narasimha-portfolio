export default function Experience() {
  const experiences = [
    {
      role: "Principal UX Designer",
      company: "Dell Technologies",
      duration: "Present",
      points: [
        "Leading UX for enterprise platforms handling complex data workflows",
        "Driving design system adoption across multiple product teams",
        "Collaborating with product and engineering to deliver scalable solutions"
      ]
    },
    {
      role: "Senior UX Designer (UI & Front-end)",
      company: "Previous Company",
      duration: "Earlier",
      points: [
        "Designed and developed responsive user interfaces for enterprise applications",
        "Bridged design and engineering by translating UX concepts into production-ready front-end code",
        "Improved usability and performance through close collaboration with engineering teams"
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
              className="relative pl-6 border-l border-white/20 hover:border-teal-400 transition"
            >
              
              {/* Role + Company */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
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

              {/* Points (NO BULLETS) */}
              <div className="mt-6 space-y-3">
                {exp.points.map((point, i) => (
                  <p key={i} className="text-gray-300 text-sm leading-relaxed">
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
