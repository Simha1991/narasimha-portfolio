export default function Approach() {
  const items = [
    {
      title: "Navigate Ambiguity",
      desc: "I thrive in unclear problem spaces, actively exploring context, asking the right questions, and uncovering what truly matters."
    },
    {
      title: "Align Stakeholders",
      desc: "I collaborate across teams, bringing clarity by aligning product, engineering, and business perspectives."
    },
    {
      title: "Design with Clarity",
      desc: "I translate complex requirements into intuitive, scalable experiences grounded in user needs and empathy."
    },
    {
      title: "Deliver Impact",
      desc: "I focus on outcomes—ensuring solutions are practical, efficient, and drive measurable improvements."
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      
      {/* Subtle Glow Background (matches hero feel) */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
          How I Work
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {items.map((item, index) => (
            <div
              key={index}
              className="group transition-all duration-300"
            >
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-300 leading-relaxed group-hover:text-gray-200 transition">
                {item.desc}
              </p>

              {/* Subtle divider (premium touch) */}
              <div className="mt-4 w-8 h-[2px] bg-white/20 group-hover:bg-indigo-400 transition"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
