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
                I analyzed leading industry platforms that offered unified portal experiences to understand how they approached consolidation, lifecycle visibility, and service integration. This helped us benchmark our current ecosystem and identify gaps in discoverability, navigation, and scalability. Competitive analysis played a crucial role in shaping our direction — it gave us clarity on what “good” looks like at scale and helped align stakeholders around the need for a unified experience.
            </p>

            <img src="/narasimha-portfolio/images/competitive-analysis.png" className="w-full rounded-lg shadow-md image-hover" />

            <h3 className="font-semibold mt-8 mb-2">2. Capability Mapping</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
          We conducted an extensive audit of Dell’s existing platforms, identifying and documenting capabilities across multiple portals such as My Account, TechDirect, MyService360, and others. This resulted in a detailed capability map spanning 100+ features. This exercise helped uncover overlaps, redundancies, and gaps — providing a clear understanding of what exists today and what needs to be unified.
            </p>

            <img src="/narasimha-portfolio/images/capability-matrix.png" className="w-full rounded-lg shadow-md image-hover" />

            <h3 className="font-semibold mt-8 mb-2">3. Card Sorting & Information Architecture</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
          To move from system-driven structure to user-centered organization, we conducted open card sorting exercises. This allowed us to group capabilities based on user mental models rather than internal classifications. The outcome of this activity formed the foundation for a scalable information architecture that could support a unified portal experience.
            </p>

            <img src="/narasimha-portfolio/images/card-sorting.png" className="w-full rounded-lg shadow-md image-hover" />

            <h3 className="font-semibold mt-8 mb-2">4. Wireframing & Iteration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
          Based on the defined structure, we created low and mid-fidelity wireframes to explore layout, hierarchy, and discoverability. These designs focused on surfacing key capabilities while maintaining flexibility for deeper interactions. The wireframes were tested across multiple internal teams and stakeholders. Through continuous feedback and iterative refinement — over several cycles — we evolved the experience to better align with both user needs and business expectations.
            </p>

            <img src="/narasimha-portfolio/images/wireframe-upe.png" className="w-full rounded-lg shadow-md image-hover" />
          </section>

          {/* RESULT */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Result of Iterative Design Exploration</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
        <p>
                  Through continuous research, mapping, and iterative design, we arrived at a unified portal concept that brings together fragmented capabilities into a single, cohesive experience. This concept serves as a North Star vision for how Dell’s ecosystem can evolve into a lifecycle-driven platform.
                </p>
        
                <p>
                  The proposed solution introduces a centralized layer where users can access all relevant capabilities — from support and asset management to lifecycle insights — without navigating across multiple portals. The experience is designed to be contextual, adapting based on the user’s device, lifecycle stage, and intent.
                </p>
        
                <p>
                  By aligning the system around user goals rather than internal structures, the portal simplifies navigation, improves discoverability, and reduces the effort required to complete tasks.
                </p>
        
                <p>
                  High-fidelity concepts were created to visualize this unified experience, translating insights from wireframes into a more tangible and scalable interface. These designs helped stakeholders understand the potential of a consolidated ecosystem and provided a clear direction for future development.
                </p>          
            </p>

            <img
              src="/narasimha-portfolio/images/upe-home.png"
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
          As an ongoing initiative, the Unified Portal Experience continues to evolve through deeper research, stakeholder alignment, and iterative refinement. The next phase involves validating the high-fidelity concepts with broader stakeholder groups and identifying opportunities for phased implementation. Further exploration includes expanding competitive benchmarks, refining the information architecture, and aligning technical feasibility with design direction. Given the scale of the ecosystem, a strategic rollout approach is essential to ensure adoption and long-term success.
              <br />
          Further exploration includes expanding competitive benchmarks, refining the information architecture, and aligning technical feasibility with design direction. Given the scale of the ecosystem, a strategic rollout approach is essential to ensure adoption and long-term success.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
