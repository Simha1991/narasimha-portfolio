// src/pages/CommsStudio.jsx

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function CommsStudio() {
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
            Comms Studio AI
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Transforming enterprise communication creation from months of manual effort into AI-powered self-service workflows
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Role:</strong> Principal UX Designer
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Scope:</strong> End-to-end platform design
            </span>
            <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <strong>Impact:</strong> 2–6 months → Weeks
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

            <p className="text-gray-900 font-medium mb-4 max-w-3xl">
              Creating a single enterprise communication required coordinating across 6+ teams and multiple disconnected systems.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
              Enterprise communication creation at scale is a complex, multi-layered process involving business teams, communications specialists, UX designers, legal reviewers, translation teams, and developers. Each communication is not just a piece of content — it is part of a larger customer lifecycle, requiring alignment with branding, tone, regulatory requirements, and delivery systems.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
              In this ecosystem, every communication had to pass through multiple stages — requirement definition, content creation, design, stakeholder reviews, legal validation, translation, and development. Each of these stages operated in silos, with different tools, workflows, and expectations, creating a highly dependent and sequential process.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
              The communications team and UX designers were at the center of this system, responsible for translating business intent into structured, compliant, and well-designed communications. This meant they were not only designing experiences but also managing coordination across stakeholders, handling iterations, and ensuring quality across multiple dimensions.
            </p>
            
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              As communication demands grew, this model became increasingly difficult to scale. The system was not designed for speed or flexibility, making it challenging to respond to business needs in a timely manner. This created a clear need to rethink the entire communication creation process from a system-level perspective.
            </p>
          </section>

          {/* Problem */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Creating a single communication required coordination across multiple teams and tools. Business initiated the request, which flowed through communications teams, product managers, and UX designers. Designers had to interpret requirements, map lifecycle flows, craft content, and design emails while adhering to strict communication guidelines.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              This process involved constant back-and-forth iterations between stakeholders. Designs created in Figma were later reviewed in disconnected tools like PowerPoint, and eventually handed over to developers who manually recreated them in HTML — introducing inefficiencies and inconsistencies.
            </p>

            <p className="text-gray-700 leading-relaxed">
              End-to-end, this process took anywhere between 2 to 6 months for a single communication. The heavy dependency on design and communication teams created bottlenecks, making the system slow, error-prone, and difficult to scale.
            </p>
            <br />
            <img
              src="/narasimha-portfolio/images/before-after-comm.png"
              alt="Before vs After comms studio AI"
              className="w-full rounded-lg shadow-md image-hover"
            />
            
            <p className="imageCaption">
              Legacy workflow required multiple handoffs and manual effort, while the new system enables AI-driven, self-service communication creation.
            </p>
          </section>

          {/* Opportunity */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Opportunity</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The core issue was that communications and design teams were at the center of the entire workflow, handling creation, iteration, and coordination across stakeholders.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This created an opportunity to shift ownership to business users — enabling them to create communications directly, while design, legal, and other teams transitioned into review and approval roles. With AI assistance and a structured workflow, communication creation could become faster, standardized, and significantly more scalable.
            </p>
          </section>

          {/* Research */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Research & Insights</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              To understand the problem deeply, I conducted interviews with stakeholders across business, design, legal, translation, and development teams. Each group interacted with the communication workflow differently, and their challenges revealed where the system was breaking down.
            </p>
            
            <div className="space-y-6 text-gray-700 max-w-3xl">

            <div>
              <p className="font-semibold text-gray-900">Business teams</p>
              <p>
                Business users were primarily responsible for initiating communications but had very little control over execution. They depended heavily on communications and design teams, which led to delays and frequent escalations. Since turnaround times were long, business teams often had to follow up repeatedly, and any changes required restarting the iteration cycle, making the process frustrating and inefficient.
              </p>
            </div>
          
            <div>
              <p className="font-semibold text-gray-900">Designers</p>
              <p>
                Designers were responsible for interpreting requirements, creating layouts, writing content, and ensuring adherence to communication guidelines. They spent a significant amount of time iterating based on evolving business feedback. Much of their effort was repetitive, focusing on refining content and structure rather than solving higher-level design problems.
              </p>
            </div>
          
            <div>
              <p className="font-semibold text-gray-900">Legal teams</p>
              <p>
                Legal teams were often brought into the process late, after design and content had already been finalized. This resulted in rework and delays, as any compliance-related changes required revisiting earlier stages of the workflow.
              </p>
            </div>
          
            <div>
              <p className="font-semibold text-gray-900">Translation teams</p>
              <p>
                Translation workflows operated separately from the main process. Managing multiple languages and validating translated content was time-consuming and difficult to track, especially when changes were made late in the cycle.
              </p>
            </div>
          
            <div>
              <p className="font-semibold text-gray-900">Development teams</p>
              <p>
                Developers had to manually convert Figma designs into HTML, which added additional effort and introduced the possibility of inconsistencies between design and production. This step further extended the overall timeline.
              </p>
            </div>
          
          </div>
          
          <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
            These insights made it clear that the problem was not just about individual inefficiencies, but a system that relied on sequential handoffs, manual work, and heavy dependencies across teams.
          </p>

            <br />
            <img
              src="/narasimha-portfolio/images/persona.png"
              alt="Stakeholder personas and pain points"
              className="w-full rounded-lg shadow-md image-hover"
            />
            
            
            <p className="imageCaption">
              Multiple stakeholders were involved across the lifecycle, each facing unique challenges that contributed to delays and inefficiencies.
            </p>
            
          </section>

          {/* Solution */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

           <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
              Comms Studio AI was designed as a centralized platform that shifts communication creation from a dependency-heavy workflow to a self-service, AI-assisted system. The goal was to enable business users to create communications independently while integrating all stakeholders into a unified, structured workflow.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
              Instead of relying on multiple teams and tools, the platform brings content creation, design systems, approvals, legal validation, translation, and development output into a single experience.
            </p>

            <br />
            <img
              src="/narasimha-portfolio/images/architecture.png"
              alt="Comms Studio system architecture"
              className="w-full rounded-lg shadow-md image-hover"
            />
            
            <p className="imageCaption">
              A centralized platform powered by AI connects business, design, legal, translation, and development into a unified workflow.
            </p>
            
            <div className="space-y-8 text-gray-700 max-w-3xl">
            
              <div>
                <p className="font-semibold text-gray-900">Business: Creating communications with AI</p>
                <p>
                  Business users start by creating or editing a communication within the platform. Using AI-powered assistance, they can generate content that adheres to communication guidelines within minutes. This eliminates the need for multiple iterations with design teams and significantly reduces turnaround time at the very first step.
                </p>
              </div>
            
              <div>
                <p className="font-semibold text-gray-900">Design: System-driven consistency</p>
                <p>
                  Instead of designing each communication from scratch, a component-based design system is built into the platform. Business users assemble communications using predefined components, while designers act as reviewers — ensuring that layouts, structure, and language-specific adjustments meet standards without recreating designs in external tools.
                </p>
              </div>
            
              <div>
                <p className="font-semibold text-gray-900">Approvals: Structured workflow across teams</p>
                <p>
                  The communication moves through a structured approval process within the platform. Business stakeholders review and approve content first, followed by design validation. Legal teams are integrated directly into the workflow, allowing them to review and approve communications at the right stage instead of being an external dependency.
                </p>
              </div>
            
              <div>
                <p className="font-semibold text-gray-900">Translation: Built-in and real-time</p>
                <p>
                  Translation is fully integrated into the platform through a label management system. Users can view, edit, and validate multiple languages directly within the tool, eliminating the need for separate workflows and making it easier to manage global communications.
                </p>
              </div>
            
              <div>
                <p className="font-semibold text-gray-900">Development: Ready-to-use output</p>
                <p>
                  Once all approvals are complete, the platform generates production-ready HTML. Developers no longer need to recreate designs manually — they can directly use the output, significantly reducing effort and ensuring consistency between design and production.
                </p>
              </div>
            
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
              By bringing all stakeholders into a single system and redefining their roles, Comms Studio AI transforms communication creation from a slow, fragmented process into a fast, scalable workflow driven by AI and system design.
            </p>
          </section>

          {/* Workflow */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Business users create or modify communications within the platform using AI-assisted content generation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The communication flows through structured approvals — business review, design validation, legal approval, and translation — all managed within the tool.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Once finalized, the communication is exported as HTML and passed to development, eliminating manual design-to-code translation and significantly reducing turnaround time.
            </p>

            <br/>
            <img
              src="/narasimha-portfolio/images/workflow.png"
              alt="End-to-end workflow with approvals"
              className="w-full rounded-lg shadow-md image-hover"
            />
            
            <p className="imageCaption">
              A structured approval workflow ensures quality while significantly reducing turnaround time.
            </p>
                        
          </section>

           {/* Final experience */}
          <section className="py-16 bg-gray-50 rounded-2xl px-6 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Final Experience</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>
            
              <p>
                The final solution transformed communication creation from a fragmented, team-heavy process into a streamlined, self-service experience. Business users can now independently create, edit, and manage communications through a centralized platform powered by AI.
              </p>
            
              <p>
                Instead of relying on multiple teams for content creation, users can draft communications using AI-assisted suggestions that ensure adherence to content guidelines and tone. The system intelligently guides users through structure, reducing ambiguity and eliminating the need for repeated iterations.
              </p>
            
              <p>
                The integrated workflow brings all stakeholders into a single ecosystem. Approvals from business, design, legal, and translation teams are handled seamlessly within the platform, with full visibility into progress at every stage. This eliminates back-and-forth communication and significantly improves coordination.
              </p>
            
              <p>
                The output is production-ready HTML generated directly from the system, removing the need for manual development effort. This not only reduces errors but also ensures consistency across all communications, regardless of scale or region.
              </p>
            <br />
            <img
              src="/narasimha-portfolio/images/comms-tool.png"
              alt="Comms studio interface"
              className="w-full rounded-lg shadow-md image-hover"
            />
            
              <p className="imageCaption">
                A unified interface enabling AI-assisted content creation, structured approvals, and real-time tracking across stakeholders.
              </p>
            
              <p>
                Overall, the experience shifts the ownership of communication creation closer to the business while maintaining quality through system-driven controls. What previously took months and multiple handoffs can now be accomplished in a matter of days, with significantly greater efficiency and confidence.
              </p>
            </section>
          

          {/* Impact */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Impact</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Comms Studio AI transformed communication creation from a slow, dependency-heavy process into a scalable, AI-driven workflow. What previously took 2 to 6 months can now be completed within weeks, with significantly fewer iterations and reduced development effort. Early adoption has shown strong positive feedback from business users, reduced escalations, and faster delivery cycles — with the potential to bring timelines down to days as the platform matures.
            </p>
          </section>

          {/* Reflection */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Reflection & Future</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              This project reinforced the importance of solving problems at a system level rather than optimizing individual steps. By shifting ownership and embedding intelligence into the workflow, we were able to eliminate inefficiencies across multiple teams.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Looking ahead, the platform is being expanded to support additional communication channels like SMS and messaging platforms, integrate workflow visualization, and enable direct deployment without development handoffs.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
