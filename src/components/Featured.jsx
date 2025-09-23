// src/components/Featured.jsx
import React from "react";

export default function Featured() {
  return (
    <section id="featured" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Featured Work</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Digital Entry Point</h3>
          <p className="text-gray-600 mb-4">
            Award-winning product saving <strong>$37M+</strong> by revolutionizing
            device registration & lifecycle.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Unified Portal</h3>
          <p className="text-gray-600 mb-4">
            Unified experience for ISG customers with improved IA and capability mapping.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Virtual Assistant</h3>
          <p className="text-gray-600 mb-4">
            AI-powered conversational design reducing self-service start time by <strong>71%</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
