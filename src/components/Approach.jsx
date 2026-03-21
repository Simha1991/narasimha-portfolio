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
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/20 text-white">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          How I Work
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {items.map((item, index) => (
            <div key={index}>
              
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
