import { useNavigate } from "react-router-dom";

export default function VaDetail() {
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
              Virtual Assistant (ISG)
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Enabling fast, intelligent support for enterprise infrastructure customers
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Role:</strong> Principal UX Designer
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Scope:</strong> AI Assistant · Customer Support
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Impact:</strong> 71% faster start · 8% → 95% success rate
              </span>
            </div>
          </section>

          {/* Visual */}
          <section>
            <div className="w-full h-[320px] bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400">
              AI assistant interface / support workflow
            </div>
          </section>

          {/* Context */}
          <section>
            <h2 className="text-2xl font-semibold">Context</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              A virtual assistant already existed within the ISG ecosystem, but it was deeply buried within the support experience—requiring 
              up to 9 steps to access. As a result, adoption was extremely low, and many enterprise customers were unaware that such assistance existed.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              The existing support flow was complex and inefficient. Users had to navigate multiple steps—entering service tags, selecting 
              device types, verifying warranty, and answering rigid yes/no questions—before reaching the assistant.

              There was no support for natural language input, and the system often delayed or blocked access to actual help. For enterprise 
              users dealing with critical infrastructure issues, this created frustration and delays in resolving problems.
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-2xl font-semibold">Approach</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              I reimagined the assistant as the primary entry point rather than a buried feature. The goal was to reduce time-to-help and 
              align the experience with how enterprise users actually seek support.

              Instead of forcing users through structured flows, I introduced a more flexible interaction model that supports natural language 
              input while still maintaining system intelligence and routing logic.

              I also aligned the assistant with broader platform initiatives, including DEP and UPE, to ensure a unified and consistent experience.
            </p>
          </section>

          {/* Before vs After */}
          <section>
            <h2 className="text-2xl font-semibold">Before vs After</h2>

            <div className="mt-6 grid md:grid-cols-2 gap-8 text-gray-700 max-w-4xl">
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Before</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 9-step navigation to reach assistant</li>
                  <li>• Rigid yes/no interaction model</li>
                  <li>• No natural language support</li>
                  <li>• Delayed access to help</li>
                  <li>• Low discoverability and adoption</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">After</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Assistant available at first entry point</li>
                  <li>• Natural language interaction enabled</li>
                  <li>• Faster access to support options</li>
                  <li>• Integrated with DEP and support systems</li>
                  <li>• High success rate and improved usability</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Key Interaction */}
          <section>
            <div className="w-full h-[300px] bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400">
              Critical issue → instant phone support / AI flow
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-semibold">Solution</h2>

            <div className="mt-6 space-y-6 text-gray-700 max-w-3xl">

              <p>
                Brought the virtual assistant to the forefront of the experience, allowing users to access support immediately after 
                entering their service tag.
              </p>

              <p>
                Introduced natural language input to replace rigid decision trees, enabling users to describe their issues in their 
                own words.
              </p>

              <p>
                Designed a priority-based flow where critical issues are identified upfront and users are immediately provided with 
                direct phone support for faster resolution.
              </p>

              <p>
                Integrated the assistant with Digital Entry Point, ensuring users land in a unified ecosystem where device details 
                and support are seamlessly connected.
              </p>

              <p className="font-medium text-gray-900">
                Consolidated “Contact Us” and knowledge base access within the assistant, reducing fragmentation and making support 
                more accessible in a single interface.
              </p>

            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-semibold">Impact</h2>
            <ul className="mt-4 space-y-3 text-gray-700 max-w-3xl">
              <li>• Reduced time-to-start support by 71%</li>
              <li>• Increased success rate from ~8% to ~95%</li>
              <li>• Improved discoverability of support tools</li>
              <li>• Reduced unnecessary service request creation</li>
              <li>• Enabled faster issue resolution for enterprise users</li>
              <li>• Expected improvement in customer satisfaction (CSAT)</li>
            </ul>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-2xl font-semibold">Reflection</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              This project reinforced that in high-stakes environments, speed and clarity are critical. Enterprise users are not 
              exploring—they are solving urgent problems.

              By prioritizing immediate access to help and simplifying interaction models, we transformed the assistant from a 
              hidden feature into a critical support channel.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
