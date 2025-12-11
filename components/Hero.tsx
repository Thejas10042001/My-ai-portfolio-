import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-slate-900">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://tse4.mm.bing.net/th/id/OIP.GXY8d-QM0inmFHZzm8HkAAHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center opacity-50 brightness-110" 
        />
        {/* Gradient Overlay to blend with the dark theme and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Main gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 50 + 20,
              height: Math.random() * 50 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-slate-800/80 border border-slate-700 text-primary-400 text-sm font-medium mb-8 backdrop-blur-md"
          >
            <Sparkles size={14} />
            <span>AI & Full-Stack Developer</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
            Hello, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7,#d946ef)]">Thejas Sreenivasu</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
            Innovative MCA Student building the future with <span className="text-white font-semibold">AI</span>, <span className="text-white font-semibold">IoT</span>, <span className="text-white font-semibold">Java</span>, <span className="text-white font-semibold">Node.js</span>, <span className="text-white font-semibold">PHP</span>, <span className="text-white font-semibold">Cybersecurity</span>, <span className="text-white font-semibold">Full Stack (Java, MERN)</span>, <span className="text-white font-semibold">SQL</span>, <span className="text-white font-semibold">RDBMS</span>, and <span className="text-white font-semibold">Secure Cloud Solutions</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-full font-medium transition-all shadow-lg shadow-primary-500/25"
            >
              Explore Projects
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm group"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-primary-400 transition-colors cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;