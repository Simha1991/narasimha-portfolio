const experiences = [
  {
    company: "Dell Technologies",
    role: "Principal UX Designer",
    duration: "Present",
    points: [
      "Leading UX for enterprise platforms handling complex data workflows",
      "Driving design system adoption across multiple product teams",
      "Collaborating with product and engineering to deliver scalable solutions"
    ]
  },
  {
    company: "Previous Company",
    role: "Senior UX Designer (UI & Front-end)",
    duration: "Earlier",
    points: [
      "Designed and developed responsive user interfaces for enterprise applications",
      "Bridged design and engineering by translating UX concepts into production-ready front-end code",
      "Improved usability and performance through close collaboration with engineering teams"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
      
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition"
            >
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-gray-300">
                    {exp.company}
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
