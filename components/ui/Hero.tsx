"use client";
import RotatingText from "./RotatingText";
import Counter from "./Counter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-bg-grid" />

      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-content"
      >
        <div className="hero-status-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          Informatics Engineering Graduate (IPK 3.76)
        </div>
        
        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500">
              Erza Pranata.
            </span>
          </h1>
          
          <div className="hero-subtitle-wrapper">
            <h5 className="hero-subtitle">Interested in</h5>
            <div className="text-2xl sm:text-3xl md:text-4xl">
              <RotatingText />
            </div>
          </div>
        </div>
        
        <p className="hero-desc">
          Lulusan S1 Teknik Informatika Universitas Budi Luhur (IPK 3.76) yang memiliki minat kuat pada bidang pengembangan web, backend developer, keamanan siber, analisis data dan desain grafis. Berpengalaman merancang aplikasi yang aman dan efisien melalui berbagai proyek nyata. Berbekal kemampuan belajar cepat dan dedikasi tinggi, saya siap berkontribusi menciptakan solusi teknologi yang bermanfaat bagi pertumbuhan perusahaan, serta tumbuh bersama tim profesional di perusahaan.
        </p>
        
        <div className="hero-actions">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/assets/CV-Erza-Pranata-Ramadhan.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <span>Get Resume PDF</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-purple-200 group-hover:translate-y-0.5 transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
        className="hero-visual"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="floating-icon-1"
        >
          <span className="text-sm font-mono text-purple-400 font-bold">&lt;/&gt;</span>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="floating-icon-2"
        >
          <span className="text-[10px] font-mono text-zinc-400 tracking-widest">0101</span>
        </motion.div>

        <div className="hero-photo-frame group">
          <div className="hero-photo-glow" />
          <div className="hero-photo-border group-hover:from-purple-500 group-hover:to-fuchsia-500 group-hover:opacity-100" />

          <div className="hero-photo-inner">
            <img 
              src="/assets/PP.jpg"
              alt="Erza Pranata Ramadhan"
              className="hero-photo-img group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider text-zinc-300 uppercase font-medium">Ready to Work</span>
            </div>
          </div>
          
          <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-white/20 group-hover:border-purple-400 transition-colors" />
          <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-white/20 group-hover:border-purple-400 transition-colors" />
        </div>

        <div className="hero-metrics">
          <div>
            <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
              <Counter target={3.76} decimals={2} duration={2000} />
            </div>
            <div className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-1">GPA</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-purple-400 tracking-tight">
              <Counter target={2.1} decimals={1} duration={2000} />K+
            </div>
            <div className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-1">Scraped</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
              <Counter target={0.36} decimals={2} duration={2000} />s
            </div>
            <div className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-1">Crypt</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}