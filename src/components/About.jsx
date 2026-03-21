export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Top Section (Text + Photo) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
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
              allowing me to bridge design, product, and engineering. I aim to build experiences that are 
              not only usable, but meaningful, scalable, and measurable.
            </p>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/profile.jpg"  // 👈 Replace with your image path
              alt="Narasimha Bhat"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>

        {/* Impact & Recognition */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Impact */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-indigo-50 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Impact
            </h3>

            <div className="space-y-5 text-gray-700">

              <div>
                <p className="font-semibold text-gray-900">
                  Digital Entry Point
                </p>
                <p className="text-sm">
                  Saved $37M+ by shifting assisted support to self-service and redefining the device lifecycle experience.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Virtual Assistant (ISG)
                </p>
                <p className="text-sm">
                  Reduced time-to-support by 71% and improved success rate from ~8% to ~95%.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Unified Portal Experience
                </p>
                <p className="text-sm">
                  Led design for a consolidated enterprise platform, simplifying complex workflows across systems.
                </p>
              </div>

            </div>
          </div>

          {/* Recognition */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Recognition
            </h3>

            <div className="space-y-5 text-gray-700">

              <div>
                <p className="font-semibold text-gray-900">
                  President’s Award — Digital Entry Point
                </p>
                <p className="text-sm">
                  Dell’s highest recognition for innovation and measurable business impact.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Dell Award for Innovation — Design Libraries
                </p>
                <p className="text-sm">
                  Recognized for building scalable and reusable design systems.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  NN/g Certified UX Designer
                </p>
                <p className="text-sm">
                  Industry-recognized certification in user experience design.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Rising Leader at Dell (RLD)
                </p>
                <p className="text-sm">
                  Selected for Dell’s high-potential leadership development program.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
