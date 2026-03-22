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

            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Creating enterprise email communications was a highly manual, multi-team process involving business, communications, design, legal, translation, and development teams. Each stage depended on the previous one, creating a linear workflow with heavy dependencies and frequent delays.
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

            <p className="text-gray-700 leading-relaxed mb-4">
              We engaged with stakeholders across business, design, legal, translation, and development teams to understand their challenges.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Business teams faced delays and escalations due to slow turnaround times. Designers spent significant effort iterating on content. Legal teams were brought in late, causing rework. Translation workflows were disconnected and difficult to validate. Developers had to manually convert designs into HTML, increasing effort and risk of errors.
            </p>

            <p className="text-gray-700 leading-relaxed">
              These insights helped us identify the need for a unified system that could streamline workflows, reduce dependencies, and automate repetitive tasks.
            </p>
          </section>

          {/* Solution */}
          <section className="py-16 fade-in-section">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-2 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              We built Comms Studio AI — a centralized platform that enables business users to create, edit, and manage communications independently using AI assistance.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The platform integrates a design system based on reusable components, ensuring consistency without requiring manual design effort. AI helps generate content aligned with communication guidelines, reducing iteration cycles from weeks to minutes.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The entire workflow — from creation to approvals, legal validation, translation, and development — is managed within a single system, with output generated directly as production-ready HTML.
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
