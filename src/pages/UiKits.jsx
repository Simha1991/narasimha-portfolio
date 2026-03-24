import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UiKits() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-sm text-gray-500 hover:text-gray-800 transition"
        >
          ← Back to work
        </button>

        {/* Hero */}
        <section className="pb-12 border-b border-gray-200 fade-in-section">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Dell Design System (UI Kits)
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Transforming how teams think, communicate, and express product ideas—without depending on design expertise
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Role:</strong> Principal UX Designer
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Scope:</strong> Design system · UI kits · Figma component library
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Impact:</strong> Adopted by 2000+ users across teams
            </span>
          </div>
        </section>

        <div className="space-y-24 mt-16">

          {/* Context */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Context</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Across Dell’s ecosystem, teams were constantly working on new features, workflows, and internal tools. But the way these ideas were expressed and shaped varied widely from team to team.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Some teams relied heavily on designers to translate their ideas into structured flows. Others tried to communicate using rough sketches or ad-hoc layouts, often struggling to bring clarity to what they were trying to build.
            </p>

            <p className="text-gray-700 leading-relaxed">
              As a result, even before design or development began, there was already a gap—between what teams meant and what was actually understood. This wasn’t just a design problem. It was a communication problem at scale.
            </p>
          </section>

          {/* Problem */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              In most cases, expressing a product idea required design intervention. Teams depended on designers not just for refinement, but for basic structure—layouts, flows, and interaction patterns.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Designers, in turn, were repeatedly solving the same problems. Creating similar layouts, defining common patterns, and aligning stakeholders on structures that had already been solved elsewhere.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At the same time, non-designers hesitated to use design tools effectively. They were unsure about spacing, alignment, or visual decisions, which made it harder for them to communicate ideas with confidence. The system was fragmented—not just in UI, but in how thinking itself was structured.
            </p>
          </section>

          {/* Opportunity */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Opportunity</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              This created an opportunity to rethink the role of a design system. Instead of focusing only on visual consistency, the goal was to enable teams to think and communicate in a structured way—without needing design expertise.
            </p>
          </section>

          {/* Approach */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Approach</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              We approached this as a foundation problem rather than a visual one.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Instead of starting with polished UI, we focused on building a system of low- and mid-fidelity components that represent structure—layouts, flows, and interaction patterns. By removing visual noise like colors and styling decisions, the system became easier to use and more accessible to non-designers.
            </p>

            <br />
            <img
              src="/narasimha-portfolio/images/atomic-design.png"
              alt="Atomic design"
              className="w-full rounded-lg shadow-md image-hover"
            />
            <br />

            <p className="text-gray-700 leading-relaxed mb-4">
              To ensure scalability and consistency, we structured the system using atomic design principles. At its core, atomic design breaks interfaces into smaller building blocks—atoms, molecules, and organisms. This approach allowed us to create a system where components could be reused, combined, and extended without losing consistency.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The entire system was built as a Figma library, designed for quick assembly and minimal decision-making. Every choice was guided by a single principle: make it easy for anyone to express structured product thinking.
            </p>
          </section>

         {/* Solution */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>
          
            {/* Existing content */}
            <p className="text-gray-700 leading-relaxed mb-4">
              The result was a design system that functioned less like a UI kit and more like a shared framework for thinking.
            </p>
          
            <p className="text-gray-700 leading-relaxed mb-4">
              It provided reusable components and layouts that teams could use to construct flows and communicate ideas clearly, without starting from scratch. Because the system handled structure, spacing, and alignment, users didn’t need to worry about visual decisions—they could focus entirely on logic and flow.
            </p>
          
            <p className="text-gray-700 leading-relaxed mb-12">
              This shifted the role of design within the organization. Designers were no longer required to create every screen, but instead defined the system that others could build with. Teams across product, engineering, and business were able to use the same components to express ideas, explore solutions, and align with each other.
            </p>
          
            {/* 🔥 Atomic Design Flow */}
            <div className="space-y-20">
          
              {/* Foundations */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  src="/narasimha-portfolio/images/foundation.png"
                  alt="Foundations"
                  className="w-full rounded-xl border border-gray-200 image-hover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Foundations</h4>
                  <p className="text-gray-600 mt-3 leading-relaxed max-w-md">
                    The core building blocks that define visual consistency—spacing, typography, and layout principles.
                    They ensure every component aligns with a shared structure and system logic.
                  </p>
                </div>
              </div>
          
              {/* Atoms */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Atoms</h4>
                  <p className="text-gray-600 mt-3 leading-relaxed max-w-md">
                    The smallest UI elements such as buttons, inputs, and labels.
                    They form the base of all interactions and remain consistent across the system.
                  </p>
                </div>
                <img
                  src="/narasimha-portfolio/images/atoms.png"
                  alt="Atoms"
                  className="w-full rounded-xl border border-gray-200 image-hover"
                />
              </div>
          
              {/* Molecules */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  src="/narasimha-portfolio/images/molecules.png"
                  alt="Molecules"
                  className="w-full rounded-xl border border-gray-200 image-hover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Molecules</h4>
                  <p className="text-gray-600 mt-3 leading-relaxed max-w-md">
                    Combinations of atoms grouped together to form functional UI patterns.
                    They represent common interactions like form fields or search components.
                  </p>
                </div>
              </div>
          
              {/* Organisms */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Organisms</h4>
                  <p className="text-gray-600 mt-3 leading-relaxed max-w-md">
                    Complex components built from multiple molecules and atoms working together.
                    They define larger sections of the interface such as headers, cards, or panels.
                  </p>
                </div>
                <img
                  src="/narasimha-portfolio/images/organisms.png"
                  alt="Organisms"
                  className="w-full rounded-xl border border-gray-200 image-hover"
                />
              </div>
          
              {/* Templates */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                  src="/narasimha-portfolio/images/templates.png"
                  alt="Templates"
                  className="w-full rounded-xl border border-gray-200 image-hover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Templates</h4>
                  <p className="text-gray-600 mt-3 leading-relaxed max-w-md">
                    Page-level structures that arrange organisms into complete layouts.
                    They provide a consistent framework for building scalable and repeatable experiences.
                  </p>
                </div>
              </div>
          
            </div>
          </section>

          {/* Impact and Reflection */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Impact & Reflection</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              The system was adopted widely across the organization, with over 2000 users accessing the library. More importantly, it changed how teams worked.
              Non-designers could express ideas clearly without worrying about design details, while designers shifted their focus to higher-level problem-solving. What improved was not just efficiency, but how teams collaborated and communicated.
              This project reshaped how I think about design systems. The real value of a system is not just in enforcing consistency, but in enabling participation. By removing complexity and focusing on clarity, we created a system that improved how teams think, collaborate, and build.            
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
