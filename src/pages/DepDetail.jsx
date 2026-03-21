import { useNavigate } from "react-router-dom";

export default function DepDetail() {
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
              Digital Entry Point (DEP)
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Simplifying device access and support through a unified QR-based experience
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Role:</strong> Principal UX Designer
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Scope:</strong> Customer Experience
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <strong>Impact:</strong> $37M+ saved · President’s Award
              </span>
            </div>
          </section>

          {/* Visual */}
          <section>
            <div className="w-full h-[320px] bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400">
              QR scan → Device lifecycle dashboard
            </div>
          </section>

          {/* Context */}
          <section>
            <h2 className="text-2xl font-semibold">Context</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              Digital Entry Point was designed as a unified access layer for customers to view and manage their devices. 
              By scanning a QR code placed on the device, users can instantly access a personalized page that provides 
              complete lifecycle information—from setup to support to end-of-life actions.
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-2xl font-semibold">Problem</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              Previously, users had to manually enter a service tag—a 7-digit alphanumeric code—to access device details. 
              This required navigating to different support pages depending on the product type, which created confusion and friction.

              Most users did not understand what a service tag was or where to find it, leading to frequent support calls 
              and poor self-service adoption.
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-2xl font-semibold">Approach</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              I focused on simplifying access by removing the need for manual input and creating a universally understandable entry point.

              Instead of asking users to search and decode technical identifiers, we introduced QR codes that users could scan instantly 
              from their phones—even if their device was not functioning.

              The goal was to create a consistent experience across all device types while making the interface intuitive enough 
              that users could navigate without guidance.
            </p>
          </section>

          {/* Before vs After */}
          <section>
            <h2 className="text-2xl font-semibold">Before vs After</h2>

            <div className="mt-6 grid md:grid-cols-2 gap-8 text-gray-700 max-w-4xl">
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Before</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Manual service tag entry</li>
                  <li>• Confusing support navigation</li>
                  <li>• Multiple pages based on device type</li>
                  <li>• High dependency on support calls</li>
                  <li>• Low self-service adoption</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">After</h3>
                <ul className="space-y-2 text-sm">
                  <li>• QR-based instant access</li>
                  <li>• Unified experience across devices</li>
                  <li>• No login required for key details</li>
                  <li>• Mobile-first accessibility</li>
                  <li>• Increased self-service usage</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Lifecycle Visual */}
          <section>
            <div className="w-full h-[300px] bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400">
              Device lifecycle experience (Setup → Maintain → Support → Renew)
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-semibold">Solution</h2>

            <div className="mt-6 space-y-6 text-gray-700 max-w-3xl">

              <p>
                Designed a QR-based entry system that allows users to instantly access their device information without 
                needing to understand or input technical identifiers.
              </p>

              <p>
                Created a unified interface that works across device types, ensuring consistency in how users access 
                support, warranty details, and lifecycle information.
              </p>

              <p>
                Built a lifecycle-driven experience that adapts based on the device stage—guiding users through setup, 
                updates, troubleshooting, and renewal decisions.
              </p>

              <p className="font-medium text-gray-900">
                Enabled mobile-first access so users can retrieve critical information even when their device is not functioning.
              </p>

            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-semibold">Impact</h2>
            <ul className="mt-4 space-y-3 text-gray-700 max-w-3xl">
              <li>• Achieved over $37M in savings by transitioning assisted support (calls) to self-service</li>
              <li>• Significantly reduced support call volume</li>
              <li>• Increased QR scan adoption and engagement</li>
              <li>• Improved accessibility to device information across user segments</li>
              <li>• Enabled scalable self-service support experience</li>
              <li>• Recognized with Dell’s President’s Award for business impact</li>
            </ul>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-2xl font-semibold">Reflection</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              This project reinforced the importance of removing friction rather than adding guidance. 
              By replacing a system that required users to adapt with one that aligned with natural behavior, 
              we significantly improved usability and adoption.

              It also demonstrated how simplifying the entry point can drive large-scale business impact—both in customer 
              experience and operational efficiency.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
