import { useNavigate } from "react-router-dom";

export default function FeaturedWork() {
  const navigate = useNavigate();

  const primaryProjects = [
    {
      title: "CommStudio AI",
      problem: "Reimagined enterprise communication workflows with AI-driven creation",
      impact: "Reduced turnaround from months to weeks",
      role: "Principal UX Designer",
      link: "/comms-studio",
    },
    {
      title: "Digital Entry Point",
      problem: "Simplified access to device lifecycle and support using QR-based entry",
      impact: "Saved millions by reducing support calls",
      role: "Principal UX Designer",
      link: "/dep-detail",
    },
    {
      title: "Virtual Assistant (ISG)",
      problem: "Enabled conversational access to enterprise systems",
      impact: "Improved support efficiency and engagement",
      role: "Principal UX Designer",
      link: "/va-detail",
    },
  ];

  const secondaryProject = {
    title: "Unified Portal Experience (UPE)",
    problem: "Unified fragmented enterprise portal workflows",
    impact: "Improved task completion by 30%+",
    role: "Lead UX Designer",
    link: "/upe-detail",
  };

  return (
    <section
      id="featured"
      className="py-20 px-6 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Selected Work
        </h2>

        {/* Primary Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {primaryProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate(project.link);
              }}
              className="group cursor-pointer rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-300 text-sm">
                {project.problem}
              </p>

              <p className="mt-4 text-teal-400 font-medium text-sm">
                {project.impact}
              </p>

              <p className="mt-2 text-gray-400 text-xs">
                {project.role}
              </p>

              <div className="mt-6 text-sm text-indigo-300 group-hover:translate-x-1 transition">
                View Case Study →
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Project */}
        <div className="max-w-md">
          <div
            onClick={() => {
              window.scrollTo(0, 0);
              navigate(secondaryProject.link);
            }}
            className="group cursor-pointer rounded-xl p-5 backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">
              {secondaryProject.title}
            </h3>

            <p className="mt-2 text-gray-300 text-sm">
              {secondaryProject.problem}
            </p>

            <p className="mt-3 text-teal-400 text-sm font-medium">
              {secondaryProject.impact}
            </p>

            <div className="mt-4 text-sm text-indigo-300 group-hover:translate-x-1 transition">
              View Case Study →
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
