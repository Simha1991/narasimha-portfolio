// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Featured from "./components/Featured";
import Approach from "./components/Approach";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CanvasBackground from "./components/CanvasBackground";

import DepDetail from "./pages/DepDetail";
import CommsStudio from "./pages/CommsStudio";
import UpeDetail from "./pages/UpeDetail";
import VaDetail from "./pages/VaDetail";

import "./index.css";

/* 👇 Wrapper to access useLocation */
function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 👇 Hide navbar on detail pages */
  const isDetailPage = location.pathname.includes("detail");

  return (
    <div className="font-sans scroll-smooth">

      {/* Navbar (hidden on case studies) */}
      {!isDetailPage && (
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
                Selected work
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
      )}

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
                <Approach />
                <Testimonials />
                <Contact />
              </>
            }
          />
          <Route path="/dep-detail" element={<DepDetail />} />
          <Route path="/comms-studio" element={<CommsStudio />} />
          <Route path="/upe-detail" element={<UpeDetail />} />
          <Route path="/va-detail" element={<VaDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/narasimha-portfolio">
      <AppContent />
    </BrowserRouter>
  );
}
