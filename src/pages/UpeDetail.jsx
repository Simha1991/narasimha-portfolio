import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UnifiedPortalDetail() {
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

        {/* HERO */}
        <section className="pb-12 border-b border-gray-200 fade-in-section">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Unified Portal Experience (UPE)
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            An ambitious initiative to unify product pages, solutions, and services into a single, cohesive customer experience
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Role:</strong> UX Designer
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Focus:</strong> Competitive analysis, capability mapping, information architecture, early design exploration
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Scale:</strong> 100+ stakeholders across multiple organizations
            </span>
          </div>
        </section>

        <div className="space-y-24 mt-16">

          {/* CONTEXT + PROBLEM */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Context & Problem</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Dell’s post-purchase experience is powered by a vast ecosystem of portals — each built to serve specific use cases such as support, asset management, service requests, procurement, and lifecycle tracking. Over time, this ecosystem grew into more than 100+ independent platforms, each operating in silos.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              While these portals individually delivered value, they lacked cohesion as a unified experience. Customers were required to navigate across multiple systems to complete even simple tasks, often losing context and repeating effort along the way.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              This fragmentation created confusion, increased cognitive load, and made it difficult for users to understand the full lifecycle of their devices. More importantly, the system was not designed to scale — neither from a user experience standpoint nor from an organizational perspective.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Unified Portal Experience (UPE) emerged as a long-term, strategic initiative aimed at solving this problem. Spanning over four years, this effort brought together 100+ stakeholders across multiple teams and organizations to define a single, unified layer that could consolidate capabilities and deliver a seamless lifecycle experience.
            </p>

            <img
              src="/images/upe/portal-before.png"
              alt="Fragmented portal ecosystem"
              className="w-full rounded-lg shadow-md image-hover"
            />

            <p className="imageCaption mt-2">
              A fragmented ecosystem of portals with overlapping capabilities and disconnected user journeys.
            </p>
          </section>

          {/* RESEARCH */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">My Role & Research Approach</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            {/* (content untouched, just styled) */}

            <h3 className="font-semibold mt-8 mb-2">1. Competitive Analysis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I analyzed leading industry platforms...
            </p>

            <img src="/images/upe/competitive.png" className="w-full rounded-lg shadow-md image-hover" />

            <h3 className="font-semibold mt-8 mb-2">2. Capability Mapping</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We conducted an extensive audit...
            </p>

            <img src="/images/upe/capability-mapping.png" className="w-full rounded-lg shadow-md image-hover" />

            <h3 className="font-semibold mt-8 mb-2">3. Card Sorting & Information Architecture</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To move from system-driven structure...
            </p>

            <img src="/images/upe/card-sorting.png" className="w-full rounded-lg shadow-md image-hover" />

            <h3 className="font-semibold mt-8 mb-2">4. Wireframing & Iteration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Based on the defined structure...
            </p>

            <img src="/images/upe/wireframes.png" className="w-full rounded-lg shadow-md image-hover" />
          </section>

          {/* RESULT */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Result of Iterative Design Exploration</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Through continuous research, mapping, and iterative design...
            </p>

            <img
              src="/images/upe/final-design.png"
              className="w-full rounded-lg shadow-md image-hover"
            />

            <p className="imageCaption mt-2">
              A North Star vision illustrating a unified, lifecycle-driven portal experience across Dell’s ecosystem.
            </p>
          </section>

          {/* NEXT STEPS */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Next Steps</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              As an ongoing initiative...
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
