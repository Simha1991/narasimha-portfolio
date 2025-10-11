// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Featured from "./components/Featured";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import DepDetail from "./pages/DepDetail";
import UpeDetail from "./pages/UpeDetail";
import VaDetail from "./pages/VaDetail";

import "./index.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter basename="/narasimha-portfolio">
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

        {/* Routes */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Featured />
                  <Experience />
                  <Testimonials />
                  <Contact />
                </>
              }
            />
            <Route path="/dep-detail" element={<DepDetail />} />
            <Route path="/upe-detail" element={<UpeDetail />} />
            <Route path="/va-detail" element={<VaDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
