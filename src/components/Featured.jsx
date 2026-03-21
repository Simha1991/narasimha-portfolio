import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Unified Policy Engine (UPE)",
    problem: "Simplified complex policy workflows across enterprise systems",
    impact: "Improved task completion by 30%+",
    role: "Lead UX Designer",
    link: "/upe-detail"
  },
  {
    title: "Design Experience Platform (DEP)",
    problem: "Enabled scalable design system adoption across teams",
    impact: "Reduced design inconsistencies across products",
    role: "Principal UX Designer",
    link: "/dep-detail"
  },
  {
    title: "Volunteer Association Platform (VA)",
    problem: "Digitized community workflows and engagement",
    impact: "Improved participation and operational efficiency",
    role: "UX Designer",
    link: "/va-detail"
  }
];

export default function FeaturedWork() {
  const navigate = useNavigate();

  return (
      <section id="work" className="py-20 px-6 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900">      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Selected Work
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => navigate(project.link)}
              className="group cursor-pointer rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition duration-300 hover:scale-[1.02]"
            >
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Problem */}
              <p className="mt-3 text-gray-300 text-sm">
                {project.problem}
              </p>

              {/* Impact */}
              <p className="mt-4 text-teal-400 font-medium text-sm">
                {project.impact}
              </p>

              {/* Role */}
              <p className="mt-2 text-gray-400 text-xs">
                {project.role}
              </p>

              {/* CTA */}
              <div className="mt-6 text-sm text-indigo-300 group-hover:translate-x-1 transition">
                View Case Study →
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
