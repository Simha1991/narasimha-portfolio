// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Featured from "./components/Featured";

// Detail pages
import DepDetail from "./pages/DepDetail";
import UpeDetail from "./pages/UpeDetail";
import VaDetail from "./pages/VaDetail";

import "./index.css"; // keep your global css import if present

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main portfolio content (wrapped so it can be reused in router)
  const PortfolioPage = () => (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-teal-500 via-purple-600 to-indigo-600 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex justify-center items-center py-6">
          <div className="space-x-8 font-medium">
            <a href="#about" className="text-white hover:text-gray-200 transition">
              About
            </a>
            <a href="#skills" className="text-white hover:text-gray-200 transition">
              Skills
            </a>
            <a href="#featured" className="text-white hover:text-gray-200 transition">
              Featured work
            </a>
            <a href="#experience" className="text-white hover:text-gray-200 transition">
              Experience
            </a>
            <a href="#testimonials" className="text-white hover:text-gray-200 transition">
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-gray-200 transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Featured />

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-white text-center">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-2xl font-semibold">
                Principal UX Designer — Dell Technologies
              </h3>
              <p className="text-gray-600 mt-2">
                Led UX for enterprise-scale products including award-winning Digital
                Entry Point, Unified Portal, and Virtual Assistant, delivering
                measurable impact across efficiency, adoption, and cost savings.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white text-center">
          <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <blockquote className="p-6 bg-gray-50 rounded-lg shadow italic">
              "Narasimha consistently delivers high-quality design work—even on tight
              timelines—without ever compromising on excellence."
              <span className="block mt-2 font-semibold">— Todd Boyum</span>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-teal-500 to-indigo-600 text-white text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
          <p className="text-lg mb-4">
            I’m always open to new opportunities, collaborations, and design
            conversations.
          </p>
          <a
            href="mailto:bhatnarasimha1991@gmail.com"
            className="text-lg font-semibold hover:underline"
          >
            bhatnarasimha1991@gmail.com
          </a>
        </section>
      </main>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/dep-detail" element={<DepDetail />} />
        <Route path="/upe-detail" element={<UpeDetail />} />
        <Route path="/va-detail" element={<VaDetail />} />
      </Routes>
    </Router>
  );
}
