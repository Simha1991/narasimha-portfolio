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
    <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
      
      <div className="max-w-5xl mx-auto">

        {/* Divider */}
        <div className="mb-20">
          <div className="h-px w-full bg-white/10"></div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          How I Work
        </h2>

        {/* Content (Editorial Layout) */}
        <div className="space-y-16">
          
          {items.map((item, index) => (
            <div key={index} className="max-w-3xl">
              
              <h3 className="text-xl font-semibold text-teal-400">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-300 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
