import { useNavigate } from "react-router-dom";

export default function UpeDetail() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-600 hover:text-black transition"
          >
            ← Back to work
          </button>

          <span className="text-sm font-medium text-gray-700">
            Narasimha Bhat
          </span>

        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 text-gray-900">
        
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">

          {/* Hero */}
          <section className="pb-12 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unified Portal Experience (UPE)
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Simplifying and unifying enterprise portal workflows across systems
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Role:</strong> Lead UX Designer
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Scope:</strong> Enterprise Platform
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Impact:</strong> +30% task completion
              </span>
            </div>
          </section>

          {/* Screenshot */}
          <section>
            <div className="w-full h-[320px] bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400">
              Product overview / dashboard screenshot
            </div>
          </section>

          {/* Context */}
          <section>
            <h2 className="text-2xl font-semibold">Context</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              The portal was used by enterprise users to access and manage multiple services 
              across systems. However, the experience was fragmented, requiring users to navigate 
              disconnected workflows and interfaces.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              Users faced inconsistent navigation, high cognitive load, and inefficient task flows, 
              making it difficult to complete key actions within the portal.
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-2xl font-semibold">Approach</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              I worked closely with stakeholders across product and engineering to understand 
              constraints, identify pain points, and align on priorities. By navigating ambiguity 
              and actively gathering insights, I helped bring clarity to the problem space.
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-semibold">Solution</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              Designed a unified experience that streamlined navigation, reduced fragmentation, 
              and created a more intuitive flow for users to complete their tasks efficiently.
            </p>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-semibold">Impact</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              The redesign improved task completion rates by over 30% and enhanced overall user 
              satisfaction across the platform.
            </p>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-2xl font-semibold">Reflection</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              This project highlighted the importance of aligning stakeholders early and continuously 
              in complex environments. Proactively navigating ambiguity played a key role in delivering 
              a cohesive and effective solution.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
