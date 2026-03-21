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
              Enterprise communication creation was a fragmented, multi-step process involving business, design, and development teams. 
              Each stage depended on the previous one, creating delays and inefficiencies across the system.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              The workflow spanned multiple disconnected tools—Figma for design, PowerPoint for stakeholder reviews, and manual 
              development for HTML conversion. This created bottlenecks, version confusion, and heavy reliance on design teams, 
              resulting in turnaround times of 2–6 months even for simple communications.
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-2xl font-semibold">Approach</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              I worked across business, design, and engineering teams to map the complete lifecycle and identify systemic friction points. 
              Instead of optimizing individual steps, I reframed the problem by shifting ownership closer to business users while 
              maintaining design and compliance guardrails.
            </p>
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
                Delivered production-ready HTML output, eliminating manual design-to-development translation and significantly 
                reducing engineering effort.
              </p>

            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-semibold">Impact</h2>
            <ul className="mt-4 space-y-3 text-gray-700 max-w-3xl">
              <li>• Reduced communication turnaround from months to weeks</li>
              <li>• Eliminated Figma → PPT → email workflow fragmentation</li>
              <li>• Removed design bottlenecks and improved team efficiency</li>
              <li>• Reduced development effort through HTML-ready output</li>
              <li>• Enabled scalable, consistent communication creation</li>
            </ul>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-2xl font-semibold">Reflection</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              This project highlighted that meaningful UX impact comes from rethinking systems, not just interfaces. By shifting 
              ownership and embedding intelligence into the workflow, we were able to eliminate entire layers of friction and 
              enable faster, more scalable outcomes.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
