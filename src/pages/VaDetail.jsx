{/* Problem Breakdown */}
<section className="py-20 border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT — TEXT */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Understanding the problem
      </h2>

      <p className="text-lg text-gray-600 mb-6">
        The existing support experience required users to navigate multiple disconnected steps 
        before getting help. Critical actions like identifying the issue, validating severity, 
        and choosing contact methods were scattered across pages — increasing effort and delaying resolution.
      </p>

      <ul className="space-y-4 text-gray-700">
        <li>• 9+ steps before reaching actual support</li>
        <li>• Forced decisions before understanding the issue</li>
        <li>• Redundant validation (sign-in, severity confirmation)</li>
        <li>• No clear or immediate entry point to get help</li>
        <li>• Experience implied low trust in user inputs</li>
      </ul>
    </div>

    {/* RIGHT — IMAGE */}
    <div>
      <img
        src="/narasimha-portfolio/images/va-problem-flow.png"
        alt="Fragmented support flow before Virtual Assistant redesign"
        className="w-full rounded-lg shadow-md"
      />

      <p className="text-sm text-gray-500 mt-4">
        Legacy support journey showing multiple steps, delays, and unnecessary validation 
        before users could access help.
      </p>
    </div>

  </div>
</section>
