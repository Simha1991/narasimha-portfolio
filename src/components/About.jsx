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
              I’m a Principal UX Designer with over a decade of experience designing enterprise products 
              and platforms. I specialize in solving complex, ambiguous problems by bringing clarity through 
              user-centered thinking, structured design, and close collaboration with stakeholders.
            </p>

            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              I don’t wait for answers — I actively explore, ask the right questions, and work across teams 
              to uncover what’s needed. Whether it’s redefining workflows, simplifying systems, or enabling 
              new ways of working, I focus on creating solutions that are intuitive for users and impactful 
              for the business.
            </p>

            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              My approach combines strong UX fundamentals with an understanding of technology and delivery, 
              allowing me to bridge design, product, and engineering. I’m an NN/g Certified UX Designer and 
              have contributed to R&D-driven initiatives, bringing innovation into real-world products at scale.
            </p>

            {/* Impact & Recognition (inline) */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Impact & Recognition
              </h3>

              <ul className="space-y-3 text-gray-700 text-base">
                <li>
                  • Saved $37M+ through Digital Entry Point by shifting assisted support to self-service, earning Dell’s President’s Award
                </li>
                <li>
                  • Improved Virtual Assistant success rate from ~8% to ~95% and reduced time-to-support by 71%
                </li>
                <li>
                  • Selected for Dell’s Rising Leader (RLD) program for high-impact leadership and execution
                </li>
              </ul>
            </div>

          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/narasimha-portfolio/images/headshot.jpg"
              alt="Narasimha Bhat"
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
