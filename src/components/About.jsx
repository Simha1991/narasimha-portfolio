export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a Principal UX Designer focused on bringing clarity to complex systems. I work on enterprise platforms where problems are often ambiguous, workflows are fragmented, and multiple stakeholders are involved. My role is to create structure—aligning teams, simplifying complexity, and designing solutions that scale.
            </p>

            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Over the years, I’ve worked across AI-driven products, support systems, and large platform experiences—helping organizations move faster by improving how decisions are made and how systems are designed. I actively explore, ask the right questions, and work across teams to uncover what truly matters.
            </p>

            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              My strength lies in bridging design, product, and engineering—ensuring that ideas are not only well-designed, but also practical, scalable, and ready for real-world impact.
            </p>

            {/* What I Focus On */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What I Focus On
              </h3>

              <p className="text-gray-700 leading-relaxed">
                I design for problems where scale and complexity matter—AI-driven experiences, enterprise platforms, design systems, and workflows that span across teams and lifecycle stages.
              </p>
            </div>

            {/* Impact */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Impact
              </h3>

              <p className="text-gray-700 leading-relaxed">
                My work has delivered measurable business outcomes—saving $37M+ through Digital Entry Point, significantly improving support efficiency through AI-driven systems, and enabling faster, more scalable product development across teams. I’ve also been recognized through Dell’s President’s Award and selected for the Rising Leader program.
              </p>
            </div>

            {/* Philosophy */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Philosophy
              </h3>

              <p className="text-gray-700 leading-relaxed">
                I believe design is not just about usability—it’s about clarity. When systems are clear, teams move faster, decisions improve, and products scale more effectively. Design, for me, is a way to bring alignment—to people, to systems, and to the problems we’re solving.
              </p>
            </div>

          </div>

          {/* Image + Identity */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/narasimha-portfolio/images/headshot.jpg"
              alt="Narasimha Bhat"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
