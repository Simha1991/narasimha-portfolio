import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-teal-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-4xl text-center px-6">
        
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Narasimha Bhat
        </motion.h1>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl md:text-2xl text-gray-200"
        >
          Designing scalable enterprise experiences that simplify complexity
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto"
        >
          Principal UX Designer at Dell Technologies with a focus on data-heavy platforms, 
          design systems, and user-centered innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-indigo-500 font-medium hover:scale-105 transition transform shadow-lg"
          >
            View Work
          </a>

          <a
            href="/narasimha-portfolio/cv.pdf"
            className="px-6 py-3 rounded-xl border border-white/30 backdrop-blur-md hover:bg-white/10 transition"
          >
            Download CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
