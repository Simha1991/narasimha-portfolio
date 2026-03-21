import { useNavigate } from "react-router-dom";

export default function CommsStudio() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-600 hover:text-black transition"
          >
            ← Back to work
          </button>

          <span className="text-sm font-medium text-gray-700">
            Narasimha Bhat
          </span>

        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 text-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">

          {/* Hero */}
          <section className="pb-12 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              CommStudio AI
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Reinventing enterprise communication creation through AI-driven workflows
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Role:</strong> Principal UX Designer
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Scope:</strong> Enterprise Platform
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Impact:</strong> Months → Weeks turnaround
              </span>
            </div>
          </section>

          {/* Visual */}
          <section>
            <div className="w-full h-[320px] bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400">
              Product overview / AI workflow UI
            </div>
          </section>

          {/* Context */}
          <section>
            <h2 className="text-2xl font-semibold">Context</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              The project was initiated after repeated stakeholder concerns about inconsistent communication outputs and long turnaround times. 
              Creating even a simple email required coordination across multiple teams, often taking up to 2–6 months from request to deployment.
              
              The workflow spanned multiple disconnected tools—Figma for design, PowerPoint for stakeholder reviews, and manual HTML development—resulting in inefficiencies, version confusion, and lack of standardization.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              The system was fragmented and heavily dependent on the design team, which became a bottleneck for every request and iteration. 
              Stakeholders struggled to review Figma files, leading to additional steps like exporting designs into presentations. 
              
              Developers then manually converted approved designs into HTML, increasing effort and introducing inconsistencies. 
              This disconnected workflow led to delays, lack of uniformity, and poor scalability.
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-2xl font-semibold">Approach</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              I worked closely with business, design, and engineering teams to map the full lifecycle of communication creation and identify 
              friction points across each stage.

              One key challenge was enabling a new development team that was unfamiliar with the design system and implementation patterns. 
              Leveraging my background in front-end development, I helped bridge this gap by guiding them on structure, reusable patterns, 
              and HTML implementation.

              Instead of optimizing individual steps, I reframed the problem by shifting ownership closer to business users while introducing 
              guardrails to maintain consistency and quality.
            </p>
          </section>

          {/* Before vs After */}
          <section>
            <h2 className="text-2xl font-semibold">Before vs After</h2>

            <div className="mt-6 grid md:grid-cols-2 gap-8 text-gray-700 max-w-4xl">
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Before</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Figma → PPT → Email → Development workflow</li>
                  <li>• Heavy dependency on design team</li>
                  <li>• Manual HTML conversion</li>
                  <li>• 2–6 months turnaround</li>
                  <li>• Inconsistent outputs</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">After</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Unified platform for creation and collaboration</li>
                  <li>• Business-led content creation</li>
                  <li>• AI-assisted content refinement</li>
                  <li>• HTML generated automatically</li>
                  <li>• Turnaround reduced to weeks</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Workflow Visual */}
          <section>
            <div className="w-full h-[300px] bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400">
              Before vs After workflow transformation
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-semibold">Solution</h2>

            <div className="mt-6 space-y-6 text-gray-700 max-w-3xl">

              <p>
                Designed an AI-driven platform that enables business users to create, edit, and manage communications independently, 
                reducing reliance on design teams.
              </p>

              <p>
                Introduced a real-time AI content engine that understands intent, generates structured messaging, and ensures 
                compliance with enterprise communication guidelines.
              </p>

              <p>
                Replaced fragmented workflows with a unified collaboration system where stakeholders review, comment, and approve 
                directly within the platform.
              </p>

              <p>
                Enabled automatic validation against design systems, UX patterns, and legal requirements to maintain consistency 
                without manual intervention.
              </p>

              <p className="font-medium text-gray-900">
                Delivered production-ready HTML output directly from the platform, eliminating manual design-to-development translation. 
                This significantly reduced engineering effort and enabled faster deployment cycles.
              </p>

            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-semibold">Impact</h2>
            <ul className="mt-4 space-y-3 text-gray-700 max-w-3xl">
              <li>• Reduced communication turnaround from months to weeks</li>
              <li>• Eliminated fragmented Figma → PPT → email workflows</li>
              <li>• Improved consistency across communication outputs</li>
              <li>• Reduced development effort through HTML-ready output</li>
              <li>• Enabled scalable communication creation across teams</li>
              <li>• Introduced real-time metrics to track usage, performance, and adoption</li>
            </ul>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-2xl font-semibold">Reflection</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              This project reinforced that solving complex UX problems often requires rethinking the system, not just improving interfaces. 
              
              By shifting ownership to business users and embedding intelligence and guardrails into the workflow, we eliminated entire layers 
              of friction while maintaining consistency and quality.

              It also highlighted the importance of bridging gaps between design and development—where my ability to contribute across both 
              helped accelerate execution and align teams effectively.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
