import React from "react";

const UnifiedPortalDetail = () => {
  return (
    <div className="caseStudyContainer">

      {/* HERO */}
      <section className="caseHero">
        <h1>Unified Portal Experience (UPE)</h1>
        <p className="caseSubtitle">
          Reimagining Dell’s fragmented ecosystem into a unified, lifecycle-driven platform
        </p>

        <div className="roleBlock">
          <p><strong>Role:</strong> UX Designer</p>
          <p><strong>Focus:</strong> Competitive analysis, capability mapping, information architecture, early design exploration</p>
          <p><strong>Scale:</strong> 100+ stakeholders across multiple organizations</p>
        </div>
      </section>

      {/* CONTEXT + PROBLEM */}
      <section className="caseSection">
        <h2>Context & Problem</h2>
        <div className="sectionDivider" />

        <p>
          Dell’s post-purchase experience is powered by a vast ecosystem of portals — each built to serve specific use cases such as support, asset management, service requests, procurement, and lifecycle tracking. Over time, this ecosystem grew into more than 100+ independent platforms, each operating in silos.
        </p>

        <p>
          While these portals individually delivered value, they lacked cohesion as a unified experience. Customers were required to navigate across multiple systems to complete even simple tasks, often losing context and repeating effort along the way.
        </p>

        <p>
          This fragmentation created confusion, increased cognitive load, and made it difficult for users to understand the full lifecycle of their devices. More importantly, the system was not designed to scale — neither from a user experience standpoint nor from an organizational perspective.
        </p>

        <p>
          The Unified Portal Experience (UPE) emerged as a long-term, strategic initiative aimed at solving this problem. Spanning over four years, this effort brought together 100+ stakeholders across multiple teams and organizations to define a single, unified layer that could consolidate capabilities and deliver a seamless lifecycle experience.
        </p>

        <div className="imageContainer">
          <img src="/images/upe/portal-before.png" alt="Fragmented portal ecosystem" />
        </div>
        <p className="imageCaption">
          A fragmented ecosystem of portals with overlapping capabilities and disconnected user journeys.
        </p>
      </section>

      {/* MY ROLE / RESEARCH */}
      <section className="caseSection">
        <h2>My Role & Research Approach</h2>
        <div className="sectionDivider" />

        <p>
          As part of the UX team, my role focused on understanding the ecosystem at scale and defining a structured foundation for unification. This involved multiple layers of research and design exploration to bring clarity to a highly complex system.
        </p>

        <h3>1. Competitive Analysis</h3>
        <p>
          I analyzed leading industry platforms that offered unified portal experiences to understand how they approached consolidation, lifecycle visibility, and service integration. This helped us benchmark our current ecosystem and identify gaps in discoverability, navigation, and scalability.
        </p>

        <p>
          Competitive analysis played a crucial role in shaping our direction — it gave us clarity on what “good” looks like at scale and helped align stakeholders around the need for a unified experience.
        </p>

        <div className="imageContainer">
          <img src="/images/upe/competitive.png" alt="Competitive analysis" />
        </div>

        <h3>2. Capability Mapping</h3>
        <p>
          We conducted an extensive audit of Dell’s existing platforms, identifying and documenting capabilities across multiple portals such as My Account, TechDirect, MyService360, and others. This resulted in a detailed capability map spanning 100+ features.
        </p>

        <p>
          This exercise helped uncover overlaps, redundancies, and gaps — providing a clear understanding of what exists today and what needs to be unified.
        </p>

        <div className="imageContainer">
          <img src="/images/upe/capability-mapping.png" alt="Capability mapping" />
        </div>

        <h3>3. Card Sorting & Information Architecture</h3>
        <p>
          To move from system-driven structure to user-centered organization, we conducted open card sorting exercises. This allowed us to group capabilities based on user mental models rather than internal classifications.
        </p>

        <p>
          The outcome of this activity formed the foundation for a scalable information architecture that could support a unified portal experience.
        </p>

        <div className="imageContainer">
          <img src="/images/upe/card-sorting.png" alt="Card sorting" />
        </div>

        <h3>4. Wireframing & Iteration</h3>
        <p>
          Based on the defined structure, we created low and mid-fidelity wireframes to explore layout, hierarchy, and discoverability. These designs focused on surfacing key capabilities while maintaining flexibility for deeper interactions.
        </p>

        <p>
          The wireframes were tested across multiple internal teams and stakeholders. Through continuous feedback and iterative refinement — over several cycles — we evolved the experience to better align with both user needs and business expectations.
        </p>

        <div className="imageContainer">
          <img src="/images/upe/wireframes.png" alt="Wireframes" />
        </div>
      </section>

      {/* RESULT / SOLUTION */}
      <section className="caseSection">
        <h2>Result of Iterative Design Exploration</h2>
        <div className="sectionDivider" />

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

        <div className="imageContainer">
          <img src="/images/upe/final-design.png" alt="Unified portal concept design" />
        </div>

        <p className="imageCaption">
          A North Star vision illustrating a unified, lifecycle-driven portal experience across Dell’s ecosystem.
        </p>
      </section>

      {/* NEXT STEPS */}
      <section className="caseSection">
        <h2>Next Steps</h2>
        <div className="sectionDivider" />

        <p>
          As an ongoing initiative, the Unified Portal Experience continues to evolve through deeper research, stakeholder alignment, and iterative refinement. The next phase involves validating the high-fidelity concepts with broader stakeholder groups and identifying opportunities for phased implementation.
        </p>

        <p>
          Further exploration includes expanding competitive benchmarks, refining the information architecture, and aligning technical feasibility with design direction. Given the scale of the ecosystem, a strategic rollout approach is essential to ensure adoption and long-term success.
        </p>

        <p>
          The goal is to progressively move from concept to reality — transforming a fragmented ecosystem into a unified, scalable platform that enhances the overall customer experience.
        </p>
      </section>

    </div>
  );
};

export default UnifiedPortalDetail;
