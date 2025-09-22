// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6"
      >
        <h1 className="text-5xl font-bold mb-4">Narasimha Bhat</h1>
        <h2 className="text-2xl mb-6">
          Principal UX Designer · AI-Augmented Experience Strategist
        </h2>
        <p className="max-w-2xl text-lg mb-8">
          I design seamless, human-centered digital experiences that merge UX
          craft with the power of AI. Explore my portfolio to see award-winning
          projects, leadership, and my design philosophy.
        </p>
        <a
          href="#projects"
          className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          I am a Principal UX Designer at Dell Technologies, specializing in
          AI-augmented experiences, enterprise-scale design, and customer-first
          digital transformations. Recognized as a Figma guru and design mentor,
          I thrive on solving complex problems with simple, human-centered
          solutions. I’ve led multiple award-winning projects, driving millions
          in savings while elevating customer satisfaction and efficiency.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4">Core UX Expertise</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Designing with AI expertise</li>
              <li>User research & prototyping</li>
              <li>Information architecture</li>
              <li>Usability testing</li>
              <li>Interaction design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Special Strengths</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Figma Guru & Design Mentor</li>
              <li>Agile Coach (Kanban)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Figma</li>
              <li>Emergent</li>
              <li>Adobe CC (XD, Premiere Pro, Express)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold">
              Principal UX Designer — Dell Technologies
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-2">
              <li>Led award-winning designs across multiple software products.</li>
              <li>Revolutionized Virtual Assistant → improved self-service by 71%.</li>
              <li>Designed Unified Portal Experience → unified enterprise experiences.</li>
              <li>
                Worked on ProDeploy Client under TechDirect → reduced lead time from 5 weeks to under 1 week.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Digital Entry Point (DEP)</h3>
            <p className="text-gray-600 mb-4">
              Revolutionized device registration with serialized QR codes,
              delivering $37M+ savings.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Unified Portal Experience (UPE)</h3>
            <p className="text-gray-600 mb-4">
              Capability mapping, IA via open card sorting, and dashboard
              unification for ISG customers.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Virtual Assistant (VA)</h3>
            <p className="text-gray-600 mb-4">
              Standardized VA across portals with design system methodology,
              cutting self-service start time by 71%.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="italic text-gray-700">
            “Narasimha consistently delivers high-quality design work—even on
            tight timelines—without compromising excellence. A true Figma guru
            and mentor.”
            <br />
            <span className="font-semibold">— Todd Boyum, Senior Manager</span>
          </blockquote>
          <blockquote className="italic text-gray-700">
            “Ambitious, dedicated, and loyal, Simha delivers excellence as an
            individual contributor and thrives in leadership roles.”
            <br />
            <span className="font-semibold">— Jason Cook, Product Experience Strategist</span>
          </blockquote>
          <blockquote className="italic text-gray-700">
            “Simha has a deep UX toolkit and always asks the right questions. His
            solutions made me say ‘Wow!’ more than once.”
            <br />
            <span className="font-semibold">— Gail Mitchell, Software Engineer</span>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-lg text-gray-600 mb-6">
          I’m always open to new opportunities, collaborations, and design
          conversations.
        </p>
        <p className="text-lg">
          📧{" "}
          <a
            href="mailto:bhatnarasimha1991@gmail.com"
            className="text-blue-600 hover:underline"
          >
            bhatnarasimha1991@gmail.com
          </a>
        </p>
        <p className="mt-2">📞 +91 7899745213</p>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/narasimha-bhat"
            className="text-blue-700 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="http://figma.com/@IaMSimha007"
            className="text-blue-700 hover:underline"
          >
            Figma
          </a>
          <a
            href="https://twitter.com/IaMSimha007"
            className="text-blue-700 hover:underline"
          >
            Twitter
          </a>
        </div>
      </section>
    </div>  {/* ✅ This closes the main wrapper div */}
  );
}

export default App;
