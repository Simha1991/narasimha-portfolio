export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* Text (75%) */}
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
          </div>

          {/* Image (25%) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/narasimha-portfolio/headshot.jpg"
              alt="Narasimha Bhat"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-md"
            />
          </div>

        </div>

        {/* Impact + Recognition (Merged) */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-sm">
          
          <h3 className="text-xl font-semibold mb-6">
            Impact & Recognition
          </h3>

          <div className="space-y-6 text-gray-700 max-w-3xl">

            <div>
              <p className="font-semibold text-gray-900">
                Digital Entry Point (DEP)
              </p>
              <p className="text-sm">
                Saved $37M+ by shifting assisted support to self-service and redefining the device lifecycle experience. 
                Recognized with Dell’s President’s Award for delivering large-scale business impact.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Virtual Assistant (ISG)
              </p>
              <p className="text-sm">
                Reduced time-to-support by 71% and improved success rate from ~8% to ~95%, enabling faster resolution 
                for enterprise infrastructure customers.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Leadership Recognition
              </p>
              <p className="text-sm">
                Selected for Dell’s Rising Leader (RLD) program, recognizing high-potential leadership and impact across initiatives.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
