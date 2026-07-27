"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import ImageSlider from "../components/ui/ImageSlider";
import InteractiveBackground from "../components/ui/InteractiveBackground";
import BackgroundMatrixParticles from "../components/ui/BackgroundMatrixParticles";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      setMounted(false);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("LOADING");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xaqgnnbg", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus("SUCCESS");
        form.reset();
        setTimeout(() => setFormStatus("IDLE"), 4000);
      } else {
        setFormStatus("ERROR");
        form.reset();
        setTimeout(() => setFormStatus("IDLE"), 4000);
      }
    } catch (error) {
      setFormStatus("ERROR");
      form.reset();
      setTimeout(() => setFormStatus("IDLE"), 4000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("erzapranataramadhan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const kkpimg = [
    "/projects/KKP/kkp1.jpg", "/projects/KKP/kkp2.jpg", "/projects/KKP/kkp3.jpg", 
    "/projects/KKP/kkp4.jpg", "/projects/KKP/kkp5.jpg", "/projects/KKP/kkp6.jpg", 
    "/projects/KKP/kkp7.jpg", "/projects/KKP/kkp8.jpg", "/projects/KKP/kkp9.jpg", 
    "/projects/KKP/kkp10.jpg", "/projects/KKP/kkp11.jpg", "/projects/KKP/kkp12.jpg", 
    "/projects/KKP/kkp13.jpg", "/projects/KKP/kkp14.jpg", 
  ];
  const taimg = [
    "/projects/TA/ta1.jpg", "/projects/TA/ta2.jpg", "/projects/TA/ta3.jpg", 
    "/projects/TA/ta4.jpg", "/projects/TA/ta5.jpg", "/projects/TA/ta6.jpg", 
    "/projects/TA/ta7.jpg", "/projects/TA/ta8.jpg", "/projects/TA/ta9.jpg", 
    "/projects/TA/ta10.jpg", "/projects/TA/ta11.jpg", "/projects/TA/ta12.jpg", 
    "/projects/TA/ta13.jpg", "/projects/TA/ta14.jpg", "/projects/TA/ta15.jpg", 
    "/projects/TA/ta16.jpg", 
  ];
  const pwimg = ["/projects/personal-website/Personal-Website.jpg"]

  return (
    <div className="ambient-glow min-h-screen bg-[#030303] text-zinc-100 selection:bg-brand-purple/30 scroll-smooth relative overflow-hidden">
      
      {/* 1. KANVAS PARTIKEL SUTIL PENGISI BACKGROUND */}
      <BackgroundMatrixParticles />

      {/* 2. PROGRESS BAR DI ATAS LAYAR */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 z-[9999] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 3. CYBER TECH GRID LINES BACKGROUND PATTERN (MENYELURUH & FIXED) */}
      <div 
        className="fixed inset-0 opacity-[0.12] pointer-events-none z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(31, 41, 55, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(31, 41, 55, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'
        }}
      />

      <InteractiveBackground />
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-8 space-y-24">
        
        {/* ================= HERO SECTION (ABOUT) ================= */}
        <section id="about" className="scroll-mt-28 animate-fade-in">
          <Hero />
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section id="projects" className="scroll-mt-28 opacity-0 animate-fade-in [animation-delay:150ms]">
          <div className="flex flex-col mb-8">
            <div className="w-12 h-[2px] bg-purple-500 mb-3 rounded-full" />
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-medium">// Technical Showcase</span>
            <h2 className="text-3xl font-bold text-white mt-1 tracking-tight">Featured Projects</h2>
          </div>

          <div className="space-y-6">
            
            {/* CARD PROJECT 1: TUGAS AKHIR */}
            {/* ANIMASI MIKRO: Ditambahkan transform hover:-translate-y-1 dan pendaran bayangan super halus */}
            <div className="rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 flex flex-col md:flex-row gap-8 hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.04)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              
              <div className="w-full md:w-[380px] flex flex-col gap-3 flex-shrink-0 relative z-10">
                <div className="w-full h-[240px] rounded-2xl overflow-hidden border border-white/5 bg-[#121216] flex items-center justify-center shadow-inner">
                  <ImageSlider images={taimg} />
                </div>
                <p className="text-[11px] font-mono text-zinc-500 text-center italic tracking-wide">
                  * Capture Project.
                </p>
                
                <div className="flex items-center justify-center gap-3 pt-1">
                  <a 
                    href="https://github.com/erzapranata/hoax-classification" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat source code di Github"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-zinc-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform active:scale-95"
                  >
                    <span>Codebase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/link-demo-anda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat demo video di Youtube"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-purple-500/20 bg-purple-500/5 text-xs font-mono text-purple-300 hover:text-white hover:border-purple-500 hover:bg-purple-600 transition-all duration-300 transform active:scale-95"
                  >
                    <span>Demo Video</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col justify-between py-1 relative z-10 w-full">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-purple-400">
                    <span>TUGAS AKHIR — DATA / TEXT MINING</span>
                    <span className="text-zinc-500">2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-purple-400 transition-colors duration-300">
                    Analisa Komparatif MNB & MLR untuk Klasifikasi Hoax Multi-Kategori Berbasis Desktop
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed font-light">
                    Merancang dan membuat aplikasi klasifikasi hoax multi-kategori menggunakan algoritma <em>Multinomial Naive Bayes</em> (Akurasi <strong>79.29%</strong>) dan <em>Multinomial Logistic Regression</em> (Akurasi <strong>77.14%</strong>). Sukses mengumpulkan <strong>2.100+ data berita nasional</strong> melalui metode <em>web scraping menggunakan Python</em> pada portal CNN, Kompas, dan Detik.
                  </p>
                </div>

                <div className="text-xs font-mono text-zinc-600 flex flex-wrap gap-2 mt-5 pt-3 border-t border-white/5">
                  <span className="hover:text-purple-300 transition-colors">Python</span> • <span className="hover:text-purple-300 transition-colors">Web Scraping</span> • <span className="hover:text-purple-300 transition-colors">Scikit-Learn</span> • <span className="hover:text-purple-300 transition-colors">Data Preprocessing</span>
                </div>
              </div>
            </div>

            {/* CARD PROJECT 2: KKP */}
            {/* ANIMASI MIKRO: Ditambahkan style staggered delay via inline style jika diperlukan, atau hover transform halus */}
            <div className="rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 flex flex-col md:flex-row gap-8 hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.04)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              
              <div className="w-full md:w-[380px] flex flex-col gap-3 flex-shrink-0 relative z-10">
                <div className="w-full h-[240px] rounded-2xl overflow-hidden border border-white/5 bg-[#121216] flex items-center justify-center shadow-inner">
                  <ImageSlider images={kkpimg} />
                </div>
                <p className="text-[11px] font-mono text-zinc-500 text-center italic tracking-wide">
                  * Capture Project.
                </p>
              
                <div className="flex items-center justify-center gap-3 pt-1">
                  <a 
                    href="https://github.com/erzapranata/aes-file-security" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat source code di Github"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-zinc-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform active:scale-95"
                  >
                    <span>Codebase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/erzapranata/aes-file-security" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat sumber di Github"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-purple-500/20 bg-purple-500/5 text-xs font-mono text-purple-300 hover:text-white hover:border-purple-500 hover:bg-purple-600 transition-all duration-300 transform active:scale-95"
                  >
                    <span>Live Preview</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col justify-between py-1 relative z-10 w-full">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-purple-400">
                    <span>KULIAH KERJA PRAKTIK — WEB & SECURITY</span>
                    <span className="text-zinc-500">2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-purple-400 transition-colors duration-300">
                    Pengamanan File Menggunakan Kriptografi Metode AES-128 Berbasis Web
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed font-light">
                    Merancang dan membangun aplikasi website untuk sistem keamanan berkas arsip perusahaan. Mengimplementasikan algoritma kriptografi kunci simetris AES-128 yang sukses mengeksekusi enkripsi file dan dekripsi file super cepat dengan waktu pemrosesan hanya <strong>0,36 detik</strong>.
                  </p>
                </div>

                <div className="text-xs font-mono text-zinc-600 flex flex-wrap gap-2 mt-5 pt-3 border-t border-white/5">
                  <span className="hover:text-purple-300 transition-colors">PHP</span> • <span className="hover:text-purple-300 transition-colors">SQL Database</span> • <span className="hover:text-purple-300 transition-colors">Cryptography</span> • <span className="hover:text-purple-300 transition-colors">Web Security</span>
                </div>
              </div>
            </div>

            {/* CARD PROJECT 3: Personal Website */}
            <div className="rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 flex flex-col md:flex-row gap-8 hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.04)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden shadow-2xl">
              
              <div className="w-full md:w-[380px] flex flex-col gap-3 flex-shrink-0 relative z-10">
                <div className="w-full h-[240px] rounded-2xl overflow-hidden border border-white/5 bg-[#121216] flex items-center justify-center shadow-inner">
                  <ImageSlider images={pwimg} />
                </div>
                <p className="text-[11px] font-mono text-zinc-500 text-center italic tracking-wide">
                  * Capture Project.
                </p>
                
                <div className="flex items-center justify-center gap-3 pt-1">
                  <a 
                    href="https://github.com/erzapranata/personal-website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat source code di Github"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-zinc-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform active:scale-95"
                  >
                    <span>Codebase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/link-demo-anda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat demo video di Youtube"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-purple-500/20 bg-purple-500/5 text-xs font-mono text-purple-300 hover:text-white hover:border-purple-500 hover:bg-purple-600 transition-all duration-300 transform active:scale-95"
                  >
                    <span>Demo Video</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col justify-between py-1 relative z-10 w-full">
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-purple-400">
                    <span>Personal Website / Portofolio</span>
                    <span className="text-zinc-500">2026</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-purple-400 transition-colors duration-300">
                    Personal Website
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed font-light">
                    Project sederhana Membuat personal website yang responsive menggunakan Node.js, Next.js, Typescript, dan Tailwind CSS 
                  </p>
                </div>

                <div className="text-xs font-mono text-zinc-600 flex flex-wrap gap-2 mt-5 pt-3 border-t border-white/5">
                  <span className="hover:text-purple-300 transition-colors">Node.js</span> • <span className="hover:text-purple-300 transition-colors">Next.js</span> • <span className="hover:text-purple-300 transition-colors">Typescript</span> • <span className="hover:text-purple-300 transition-colors">Tailwind CSS</span> • <span className="hover:text-purple-300 transition-colors">Responsive Website</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= EDUCATION SECTION ================= */}
        <section id="education" className="scroll-mt-28 opacity-0 animate-fade-in [animation-delay:300ms]">
          <div className="flex flex-col mb-10">
            <div className="w-12 h-[2px] bg-purple-500 mb-3 rounded-full" />
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-medium">// Academic Background</span>
            <h2 className="text-3xl font-bold text-white mt-1 tracking-tight">Education</h2>
          </div>

          <div className="relative border-l border-white/10 ml-4 pl-8 space-y-10 py-2">
            <div className="relative group">
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#030303] border-2 border-purple-500 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              </div>
              <div className="rounded-2xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 hover:border-purple-500/20 hover:shadow-[0_10px_25px_rgba(168,85,247,0.02)] transition-all duration-300 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                      Universitas Budi Luhur
                    </h3>
                    <p className="text-zinc-400 text-sm mt-1 font-light">
                      S1 Teknik Informatika — <span className="text-purple-400 font-medium tracking-wide">GPA 3.76 / 4.00</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                    2021 — 2025
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-purple-500/5 border border-purple-500/10 text-purple-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Basic Computer Algorithm Competency (2023)
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#030303] border-2 border-zinc-700 flex items-center justify-center z-10 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-purple-400 transition-colors" />
              </div>
              <div className="rounded-2xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 hover:border-purple-500/20 hover:shadow-[0_10px_25px_rgba(168,85,247,0.02)] transition-all duration-300 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                      SMAN 5 Kota Tangerang Selatan
                    </h3>
                    <p className="text-zinc-500 text-sm mt-1 font-light">
                      IPS / High School
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                    2018 — 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE SECTION ================= */}
        <section id="experience" className="scroll-mt-28 opacity-0 animate-fade-in [animation-delay:450ms]">
          <div className="flex flex-col mb-8">
            <div className="w-12 h-[2px] bg-purple-500 mb-3 rounded-full" />
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-medium">// Leadership & Society</span>
            <h2 className="text-3xl font-bold text-white mt-1 tracking-tight">Featured Experience</h2>
          </div>

          <div className="rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 md:p-8 hover:border-purple-500/20 hover:shadow-[0_10px_30px_rgba(168,85,247,0.04)] transition-all duration-500 group relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-8 items-start">
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="w-full md:w-[260px] flex-shrink-0 border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-6 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-semibold bg-purple-500/5 border border-purple-500/10 px-2.5 py-1 rounded-md inline-block">
                  Kuliah Kerja Nyata
                </span>
                <h3 className="text-xl font-bold text-white mt-3 tracking-tight leading-snug group-hover:text-purple-400 transition-colors duration-300">
                  Hubungan Masyarakat
                </h3>
                <p className="text-zinc-500 text-sm font-light mt-1">
                  Desa Dangdang, Cisauk
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-500 mt-4 block">
                Periode Tahun 2025
              </span>
            </div>

            <div className="flex-get w-full space-y-5">
              <ul className="text-zinc-400 text-sm space-y-3.5 font-light leading-relaxed">
                <li className="flex items-start gap-3 group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▹</span>
                  <span>Berperan aktif dalam diskusi tim terkait pemecahan masalah pada kegiatan Kuliah Kerja Nyata.</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▹</span>
                  <span>Mampu membangun dan merawat hubungan baik dengan berbagai pemangku kepentingan, termasuk penanggung jawab desa, dosen pembimbing dan masyarakat umum selama Kuliah Kerja Nyata di Desa Dangdang, Cisauk.</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▹</span>
                  <span>Memobilisasi <strong>30 Ibu-ibu PKK</strong> Desa Dangdang sebagai audiens pemaparan materi <strong>“Pengenalan Bank Sampah”</strong> di Posyandu Rambutan, Desa Dangdang.</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▹</span>
                  <span>Bertanggung jawab penuh atas manajemen komunikasi kelompok, dokumentasi digital, editing video, dan publikasi media sosial resmi.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">Digital Mobilization</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">Public Communication</span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">Content Management</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <section id="skills" className="scroll-mt-28 opacity-0 animate-fade-in [animation-delay:600ms]">
          <div className="flex flex-col mb-8">
            <div className="w-12 h-[2px] bg-purple-500 mb-3 rounded-full" />
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-medium">// Toolbelt</span>
            <h2 className="text-3xl font-bold text-white mt-1 tracking-tight">Skills & Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* BOX SKILLS 1 */}
            <div className="rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 hover:border-purple-500/20 hover:shadow-[0_10px_25px_rgba(168,85,247,0.02)] transition-all duration-500 group relative overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-mono text-xs font-bold">01 /</span>
                    <h4 className="text-sm font-mono text-zinc-200 uppercase tracking-wider font-semibold">Data & AI Engineering</h4>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed mb-5">
                  Mampu melakukan end-to-end data processing, ekstraksi informasi teks, hingga pembangunan model prediksi komparatif.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 block mb-2">Core Focus</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Machine Learning', 'Text Mining', 'Data Scraping'].map((skill) => (
                        <span key={skill} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-purple-500/5 text-purple-300 border border-purple-500/20 shadow-sm transition-all duration-300 hover:border-purple-500/50 hover:text-white">
                          {skill} 
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 block mb-2">Libraries & Frameworks</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Scikit-Learn', 'Pandas', 'Seaborn'].map((skill) => (
                        <span key={skill} className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5 transition-colors hover:border-zinc-700 hover:text-zinc-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOX SKILLS 2 */}
            <div className="rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 hover:border-fuchsia-500/20 hover:shadow-[0_10px_25px_rgba(217,70,239,0.02)] transition-all duration-500 group relative overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/5 rounded-bl-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-fuchsia-400 font-mono text-xs font-bold">02 /</span>
                    <h4 className="text-sm font-mono text-zinc-200 uppercase tracking-wider font-semibold">Web Development</h4>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed mb-5">
                  Fokus pada pembuatan performa interface web yang responsif, arsitektur modular, serta implementasi enkripsi berkas yang aman.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 block mb-2">Frameworks & Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['React.js', 'Next.js', 'Vite', 'Tailwind CSS'].map((skill) => (
                        <span key={skill} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-fuchsia-500/5 text-fuchsia-300 border border-fuchsia-500/20 shadow-sm transition-all duration-300 hover:border-fuchsia-500/50 hover:text-white">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 block mb-2">Security Integration</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Web Security', 'AES-128 Crypt'].map((skill) => (
                        <span key={skill} className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5 transition-colors hover:border-zinc-700 hover:text-zinc-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOX SKILLS 3 */}
            <div className="rounded-3xl bg-[#0a0a0c]/80 backdrop-blur-sm border border-white/5 p-6 hover:border-violet-500/20 hover:shadow-[0_10px_25px_rgba(139,92,246,0.02)] transition-all duration-500 group relative overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-bl-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-violet-400 font-mono text-xs font-bold">03 /</span>
                    <h4 className="text-sm font-mono text-zinc-200 uppercase tracking-wider font-semibold">Core & Utilities</h4>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 font-light leading-relaxed mb-5">
                  Menguasai dasar logika algoritma pemrograman multi-paradigma dan manajemen basis data relasional untuk efisiensi sistem.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 block mb-2">Languages</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'SQL', 'PHP', 'Java'].map((skill) => (
                        <span key={skill} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-violet-500/5 text-violet-300 border border-violet-500/20 shadow-sm transition-all duration-300 hover:border-violet-500/50 hover:text-white">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 block mb-2">Office & Design Utilities</span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5 transition-colors hover:border-zinc-700 hover:text-zinc-200">VS Code</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5 transition-colors hover:border-zinc-700 hover:text-zinc-200">Figma</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-sm font-medium transition-colors hover:border-purple-500/50">Microsoft Office</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION & FOOTER ================= */}
        <section id="contact" className="scroll-mt-20 max-w-xl mx-auto pt-0 opacity-0 animate-fade-in [animation-delay:750ms] relative">
          {mounted && createPortal(
            <div className="fixed top-5 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
              {formStatus === "SUCCESS" && (
                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md animate-[slide-in_0.3s_ease-out] pointer-events-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-mono font-medium tracking-wide">✓ Pesan sukses dikirim! Erza akan segera merespon.</span>
                </div>
              )}
              
              {formStatus === "ERROR" && (
                <div className="flex items-center gap-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md animate-[slide-in_0.3s_ease-out] pointer-events-auto">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-mono font-medium tracking-wide">⚠ Gagal mengirim. Cek koneksi atau ID Formspree Anda.</span>
                </div>
              )}
            </div>,
            document.body
          )}

          <div className="text-center mb-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[10px] font-mono text-emerald-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Available For Opportunities</span>
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-medium">// Opportunities</span>
            <h2 className="text-2xl font-bold text-white mt-1">Get In Touch!</h2>
            
            <p className="text-zinc-500 text-sm mt-2 font-light leading-relaxed max-w-md">
              Hubungi langsung untuk peluang karir atau diskusi proyek di:
            </p>

            <div className="mt-3 inline-flex items-center gap-3 bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl max-w-max mx-auto hover:border-purple-500/20 transition-colors duration-300">
              <a href="mailto:erzapranataramadhan@gmail.com" className="text-purple-400 font-medium hover:underline tracking-wide text-xs">
                erzapranataramadhan@gmail.com
              </a>
              <button 
                type="button"
                onClick={handleCopyEmail}
                className={`text-[10px] font-mono px-2 py-0.5 rounded-md transition-all duration-300 cursor-pointer flex-shrink-0 ${
                  copied 
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                    : "bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {copied ? "Copied! 📋" : "Copy ❐"}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmitForm} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Nama Anda" required className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors" />
              <input type="email" name="email" placeholder="Email Perusahaan" required className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors" />
            </div>
            <textarea name="message" placeholder="Pesan atau tawaran posisi pekerjaan..." rows={4} required className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors resize-none" />
            <button 
              type="submit" 
              disabled={formStatus === "LOADING"}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors shadow-lg shadow-purple-600/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99]"
            >
              {formStatus === "LOADING" ? "Sedang Mengirim..." : "Kirim Pesan"}
            </button>
          </form>

          <div className="mt-12 pt-10 border-t border-white/5 flex flex-col items-center space-y-4">
            <div className="flex items-center gap-6">
              <a href="https://github.com/erzapranata" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-fuchsia-400 transition-colors duration-300 transform hover:scale-110" aria-label="GitHub Profile">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/erzapranata" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-fuchsia-400 transition-colors duration-300 transform hover:scale-110" aria-label="LinkedIn Profile">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://instagram.com/erzapranata" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-fuchsia-400 transition-colors duration-300 transform hover:scale-110" aria-label="Instagram Profile">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <p className="text-[11px] font-mono text-zinc-600 tracking-wider">&copy; 2026 Erza Pranata Ramadhan. All rights reserved.</p>
          </div>
        </section>

      </div>
    </div>
  );
}