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
  const pwimg = ["/projects/personal-website/PersonalWebsite.jpg"];
  const posimg = [
    "/projects/App-POS-Cashier/LoginScreen.jpg",
    "/projects/App-POS-Cashier/Dashboard.jpg",
    "/projects/App-POS-Cashier/MasterBarang.jpg",
    "/projects/App-POS-Cashier/DashboardLaporanKeuangan.jpg",
    "/projects/App-POS-Cashier/DashboardLaporanKeuangan2.jpg",
    "/projects/App-POS-Cashier/DashboardKasir.jpg",
    "/projects/App-POS-Cashier/OpenshiftKasir.jpg",
    "/projects/App-POS-Cashier/ContohInput.jpg",
    "/projects/App-POS-Cashier/Struk.jpg",
    "/projects/App-POS-Cashier/ReprintStruk.jpg",
    "/projects/App-POS-Cashier/TutupShiftKasir.jpg",
    "/projects/App-POS-Cashier/Laporan EOD.jpg",
    "/projects/App-POS-Cashier/LockLaci.jpg"
  ];
  const rtimg = [
    "/projects/Management-RT/rt1.jpg",
    "/projects/Management-RT/rt2.jpg",
    "/projects/Management-RT/rt3.jpg",
    "/projects/Management-RT/rt4.jpg",
    "/projects/Management-RT/rt5.jpg",
    "/projects/Management-RT/rt6.jpg",
    "/projects/Management-RT/rt7.jpg",
    "/projects/Management-RT/rt8.jpg"
  ];

  return (
    <div className="ambient-glow min-h-screen bg-[#030303] text-zinc-100 selection:bg-brand-purple/30 scroll-smooth relative overflow-x-hidden">
      
      <BackgroundMatrixParticles />

      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 z-[9999] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

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

      <div className="relative z-10 max-w-[1000px] w-full mx-auto px-6 md:px-12 flex flex-col pt-24 md:pt-28 pb-10 gap-y-20 md:gap-y-28">
        
        {/* ================= HERO SECTION (ABOUT) ================= */}
        <section id="about" className="scroll-mt-28 min-h-[calc(100vh-8rem)] flex flex-col justify-center animate-fade-in">
          <Hero />
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section id="projects" className="project-section">
          <div className="section-header">
            <div className="section-divider" />
            <span className="section-subtitle">// Technical Showcase</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="project-list">
            
            <div className="project-card group">
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <ImageSlider images={rtimg} />
                </div>
                <p className="project-caption">
                  * Capture Project.
                </p>
                
                <div className="project-actions">
                  <a 
                    href="https://github.com/ErzaPranata/Core-API-backend-rt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat source code di Github"
                    className="btn-source"
                  >
                    <span>Codebase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat demo video di Youtube"
                    className="btn-demo"
                  >
                    <span>Demo Video</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div>
                  <div className="project-meta">
                    <span>Backend System / Enterprise REST API</span>
                    <span className="text-zinc-500">2026</span>
                  </div>
                  <h3 className="project-title">
                    Sistem Informasi Management RT
                  </h3>
                  <p className="project-desc">
                    Sistem otentikasi terproteksi JWT & otorisasi bertingkat (RBAC) untuk 5 peran pengguna (Ketua RT, Bendahara, Sekretaris, Satpam, Warga). Mengembangkan API Kas RT multi-rekening, otomatisasi iuran, E-Visitor / Buku Tamu pos ronda, aduan warga realtime, polling voting, serta <em>Nuclear Reset System</em> terisolasi transactional query.
                  </p>
                </div>

                <div className="project-tech">
                  <span className="tech-badge">NestJS</span> • <span className="tech-badge">TypeScript</span> • <span className="tech-badge">Prisma ORM</span> • <span className="tech-badge">PostgreSQL</span> • <span className="tech-badge">JWT</span> • <span className="tech-badge">Swagger</span>
                </div>
              </div>
            </div>

            <div className="project-card group">
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <ImageSlider images={posimg} />
                </div>
                <p className="project-caption">
                  * Capture Project.
                </p>
                
                <div className="project-actions">
                  <a 
                    href="https://github.com/ErzaPranata/Management-Store-App" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat source code di Github"
                    className="btn-source"
                  >
                    <span>Codebase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat demo video di Youtube"
                    className="btn-demo"
                  >
                    <span>Demo Video</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div>
                  <div className="project-meta">
                    <span>Desktop App / Point of Sale</span>
                    <span className="text-zinc-500">2026</span>
                  </div>
                  <h3 className="project-title">
                    Aplikasi Management Store / POS
                  </h3>
                  <p className="project-desc">
                    Aplikasi kasir & manajemen ritel berbasis Tauri. Dilengkapi keamanan RBAC, modul POS real-time dengan integrasi scanner barcode, antrean transaksi (Hold/Recall), pencetakan struk thermal otomatis, pencatatan akuntansi <em>data snapshotting</em>, serta dashboard analitik Recharts.
                  </p>
                </div>

                <div className="project-tech">
                  <span className="tech-badge">React</span> • <span className="tech-badge">TypeScript</span> • <span className="tech-badge">Tauri</span> • <span className="tech-badge">SQLite</span> • <span className="tech-badge">Vite</span> • <span className="tech-badge">Recharts</span>
                </div>
              </div>
            </div>

            <div className="project-card group">
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <ImageSlider images={pwimg} />
                </div>
                <p className="project-caption">
                  * Capture Project.
                </p>
                
                <div className="project-actions">
                  <a 
                    href="https://github.com/erzapranata/personal-website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat source code di Github"
                    className="btn-source"
                  >
                    <span>Codebase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat demo video di Youtube"
                    className="btn-demo"
                  >
                    <span>Demo Video</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div>
                  <div className="project-meta">
                    <span>Personal Portfolio Website</span>
                    <span className="text-zinc-500">2026</span>
                  </div>
                  <h3 className="project-title">
                    Personal Portfolio Website
                  </h3>
                  <p className="project-desc">
                    Situs web personal responsif sebagai wadah portofolio interaktif dan branding profesional. Mengintegrasikan galeri proyek, data riwayat interaktif, contact form langsung, serta optimasi SEO dan performa tinggi di berbagai perangkat.
                  </p>
                </div>

                <div className="project-tech">
                  <span className="tech-badge">React</span> • <span className="tech-badge">Next.js</span> • <span className="tech-badge">Tailwind CSS</span> • <span className="tech-badge">TypeScript</span> • <span className="tech-badge">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="project-card group">
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <ImageSlider images={taimg} />
                </div>
                <p className="project-caption">
                  * Capture Project.
                </p>
                
                <div className="project-actions">
                  <a 
                    href="https://github.com/erzapranata" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat source code di Github"
                    className="btn-source"
                  >
                    <span>Codebase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat demo video di Youtube"
                    className="btn-demo"
                  >
                    <span>Demo Video</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div>
                  <div className="project-meta">
                    <span>Tugas Akhir — Data / Text Mining</span>
                    <span className="text-zinc-500">2025</span>
                  </div>
                  <h3 className="project-title">
                    Analisa Komparatif MNB & MLR untuk Klasifikasi Hoax
                  </h3>
                  <p className="project-desc">
                    Aplikasi klasifikasi hoax multi-kategori berbasis desktop. Berhasil mengumpulkan <strong>2.100+ data berita nasional</strong> via web scraping Python dari CNN, Kompas, Detik, & Turnbackhoax. Hasil akurasi algoritma Multinomial Naive Bayes mencapai <strong>79.29%</strong> dan Multinomial Logistic Regression <strong>77.14%</strong>.
                  </p>
                </div>

                <div className="project-tech">
                  <span className="tech-badge">Python</span> • <span className="tech-badge">Web Scraping</span> • <span className="tech-badge">Scikit-Learn</span> • <span className="tech-badge">Preprocessing</span> • <span className="tech-badge">Text Mining</span>
                </div>
              </div>
            </div>

            <div className="project-card group">
              <div className="project-visual">
                <div className="project-image-wrapper">
                  <ImageSlider images={kkpimg} />
                </div>
                <p className="project-caption">
                  * Capture Project.
                </p>
              
                <div className="project-actions">
                  <a 
                    href="https://github.com/erzapranata/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat source code di Github"
                    className="btn-source"
                  >
                    <span>Codebase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/erzapranata/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat sumber di Github"
                    className="btn-demo"
                  >
                    <span>Live Preview</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 md:w-3.5 md:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div>
                  <div className="project-meta">
                    <span>Kuliah Kerja Praktik — Web & Security</span>
                    <span className="text-zinc-500">2024</span>
                  </div>
                  <h3 className="project-title">
                    Pengamanan File Kriptografi Metode AES-128
                  </h3>
                  <p className="project-desc">
                    Sistem keamanan berkas berbasis web untuk PT. Karunia Laut Sejahtera. Mengimplementasikan algoritma kriptografi kunci simetris AES-128 yang sukses mengeksekusi enkripsi & dekripsi file secara presisi dengan waktu pemrosesan ultra cepat <strong>0,36 detik</strong>.
                  </p>
                </div>

                <div className="project-tech">
                  <span className="tech-badge">PHP</span> • <span className="tech-badge">SQL Database</span> • <span className="tech-badge">AES-128 Cryptography</span> • <span className="tech-badge">Web Security</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= EDUCATION SECTION ================= */}
        <section id="education" className="education-section">
          <div className="section-header">
            <div className="section-divider" />
            <span className="section-subtitle">// Academic Background</span>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-item group">
              <div className="timeline-dot-active">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-purple-400 animate-pulse" />
              </div>
              <div className="timeline-card">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">
                      Universitas Budi Luhur
                    </h3>
                    <p className="timeline-desc">
                      S1 Teknik Informatika — <span className="text-purple-400 font-medium tracking-wide">IPK 3.76 / 4.00</span>
                    </p>
                  </div>
                  <span className="timeline-date">
                    2021 — 2025
                  </span>
                </div>
                <div className="timeline-actions">
                  <a 
                    href="/assets/CV-Erza-Pranata-Ramadhan.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat sertifikasi"
                    className="btn-outline-purple"
                  >
                    <span>Basic Computer Algorithm Competency (2023)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <a 
                    href="https://drive.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Lihat sertifikasi lainnya"
                    className="btn-outline-purple"
                  >
                    <span>Sertifikasi Lainnya</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 md:w-4 md:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="timeline-item group">
              <div className="timeline-dot-inactive">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-zinc-600 group-hover:bg-purple-400 transition-colors" />
              </div>
              <div className="timeline-card">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">
                      SMAN 5 Kota Tangerang Selatan
                    </h3>
                    <p className="timeline-desc">
                      IPS / High School
                    </p>
                  </div>
                  <span className="timeline-date">
                    2018 — 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE SECTION ================= */}
        <section id="experience" className="experience-section">
          <div className="section-header">
            <div className="section-divider" />
            <span className="section-subtitle">// Leadership & Society</span>
            <h2 className="section-title">Featured Experience</h2>
          </div>

          <div className="experience-card group">
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="exp-sidebar">
              <div>
                <span className="exp-badge">
                  Kuliah Kerja Nyata
                </span>
                <h3 className="exp-title">
                  Hubungan Masyarakat
                </h3>
                <p className="exp-location">
                  Desa Dangdang, Cisauk
                </p>
              </div>
              <span className="exp-date">
                Periode Tahun 2025
              </span>
            </div>

            <div className="exp-content">
              <ul className="exp-list">
                <li className="exp-list-item group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▸</span>
                  <span>Berperan aktif dalam diskusi tim terkait pemecahan masalah pada kegiatan Kuliah Kerja Nyata.</span>
                </li>
                <li className="exp-list-item group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▸</span>
                  <span>Membangun dan merawat hubungan baik dengan berbagai pemangku kepentingan, termasuk penanggung jawab desa, dosen pembimbing dan masyarakat umum.</span>
                </li>
                <li className="exp-list-item group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▸</span>
                  <span>Menjalin kerja sama dengan Pengelola Bank Sampah Budi Luhur untuk mengadakan seminar <strong>“Pengenalan Bank Sampah”</strong> di Kantor Desa Dangdang.</span>
                </li>
                <li className="exp-list-item group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▸</span>
                  <span>Memobilisasi <strong>30 Ibu-ibu PKK</strong> Desa Dangdang sebagai audiens pemaparan materi <strong>“Pengenalan Bank Sampah”</strong> di Posyandu Rambutan.</span>
                </li>
                <li className="exp-list-item group/item">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300">▸</span>
                  <span>Mendokumentasikan, mengedit, dan mengunggah keseluruhan kegiatan Kuliah Kerja Nyata di Instagram resmi kelompok.</span>
                </li>
              </ul>
              <div className="exp-tags">
                <span className="exp-tag">Public Relations</span>
                <span className="exp-tag">Event Mobilization</span>
                <span className="exp-tag">Content Management</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <section id="skills" className="skills-section">
          <div className="section-header">
            <div className="section-divider" />
            <span className="section-subtitle">// Toolbelt</span>
            <h2 className="section-title">Skills & Capabilities</h2>
          </div>

          <div className="skills-grid">
            
            <div className="skill-card skill-card-purple group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full blur-2xl pointer-events-none" />
              <div>
                <div className="skill-header">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-mono text-[10px] md:text-xs font-bold">01 /</span>
                    <h4 className="text-xs md:text-sm font-mono text-zinc-200 uppercase tracking-wider font-semibold">Web & Backend</h4>
                  </div>
                </div>
                <p className="skill-desc">
                  Arsitektur web modern, sistem backend terproteksi JWT/RBAC, hingga pembuatan desktop app.
                </p>
                <div className="skill-group">
                  <div>
                    <span className="skill-label">Frameworks & Stack</span>
                    <div className="skill-pill-container">
                      {['Next.js', 'React', 'Node.js', 'NestJS', 'Prisma', 'Tauri', 'Laravel', 'Tailwind'].map((skill) => (
                        <span key={skill} className="pill-purple">
                          {skill} 
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="skill-label">Database & API</span>
                    <div className="skill-pill-container">
                      {['PostgreSQL', 'MySQL', 'SQLite', 'Swagger'].map((skill) => (
                        <span key={skill} className="pill-neutral">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-card skill-card-fuchsia group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-fuchsia-500/5 rounded-bl-full blur-2xl pointer-events-none" />
              <div>
                <div className="skill-header">
                  <div className="flex items-center gap-2">
                    <span className="text-fuchsia-400 font-mono text-[10px] md:text-xs font-bold">02 /</span>
                    <h4 className="text-xs md:text-sm font-mono text-zinc-200 uppercase tracking-wider font-semibold">Data & Security</h4>
                  </div>
                </div>
                <p className="skill-desc">
                  Ekstraksi data via web scraping Python, klasifikasi hoax ML, serta enkripsi kriptografi file.
                </p>
                <div className="skill-group">
                  <div>
                    <span className="skill-label">Core Competencies</span>
                    <div className="skill-pill-container">
                      {['Machine Learning', 'Text Mining', 'Web Scraping', 'Data Analysis'].map((skill) => (
                        <span key={skill} className="pill-fuchsia">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="skill-label">Security & Libraries</span>
                    <div className="skill-pill-container">
                      {['Scikit-Learn', 'AES-128', 'Web Security'].map((skill) => (
                        <span key={skill} className="pill-neutral">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-card skill-card-violet group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-bl-full blur-xl pointer-events-none" />
              <div>
                <div className="skill-header">
                  <div className="flex items-center gap-2">
                    <span className="text-violet-400 font-mono text-[10px] md:text-xs font-bold">03 /</span>
                    <h4 className="text-xs md:text-sm font-mono text-zinc-200 uppercase tracking-wider font-semibold">Languages & Tools</h4>
                  </div>
                </div>
                <p className="skill-desc">
                  Penguasaan bahasa pemrograman multi-paradigma serta software produktivitas, dan desain grafis.
                </p>
                <div className="skill-group">
                  <div>
                    <span className="skill-label">Languages</span>
                    <div className="skill-pill-container">
                      {['Python', 'Java', 'TypeScript', 'JavaScript', 'PHP', 'HTML', 'CSS', 'C/C++'].map((skill) => (
                        <span key={skill} className="pill-violet">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="skill-label">Office & Creative Tools</span>
                    <div className="skill-pill-container">
                      <span className="pill-neutral">VS Code</span>
                      <span className="pill-neutral">MS Office</span>
                      <span className="pill-outline-purple">Canva & Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION & FOOTER ================= */}
        <section id="contact" className="contact-section">
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
                  <span className="text-xs font-mono font-medium tracking-wide">⚠️ Gagal mengirim. Cek koneksi atau ID Formspree Anda.</span>
                </div>
              )}
            </div>,
            document.body
          )}

          <div className="contact-wrapper">
            <div className="contact-header">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[10px] md:text-xs font-mono text-emerald-400 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Available For Opportunities</span>
              </div>

              <span className="contact-subtitle">// Opportunities</span>
              <h2 className="contact-title">Get In Touch!</h2>
              
              <p className="contact-desc">
                Hubungi langsung untuk peluang karir atau diskusi proyek di:
              </p>

              <div className="mt-4 md:mt-5 inline-flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-2 rounded-xl max-w-max mx-auto hover:border-purple-500/20 transition-colors duration-300">
                <a href="mailto:erzapranataramadhan@gmail.com" className="text-purple-400 font-medium hover:underline tracking-wide text-xs md:text-sm">
                  erzapranataramadhan@gmail.com
                </a>
                <button 
                  type="button"
                  onClick={handleCopyEmail}
                  className={`text-[10px] md:text-xs font-mono px-2.5 py-1 rounded-md transition-all duration-300 cursor-pointer flex-shrink-0 ${
                    copied 
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                      : "bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  {copied ? "Copied! 📋" : "Copy 📋"}
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmitForm} className="form-container">
              <div className="form-grid">
                <input type="text" name="name" placeholder="Nama Anda" required className="form-input" />
                <input type="email" name="email" placeholder="Email Perusahaan" required className="form-input" />
              </div>
              <textarea name="message" placeholder="Pesan atau tawaran posisi pekerjaan..." rows={3} required className="form-input resize-none" />
              <button 
                type="submit" 
                disabled={formStatus === "LOADING"}
                className="btn-submit"
              >
                {formStatus === "LOADING" ? "Sedang Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>

          <div className="footer-wrapper">
            <div className="social-links">
              <a href="https://github.com/erzapranata" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub Profile">
                <svg className="w-5 h-5 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/erzapranata" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
                <svg className="w-5 h-5 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://instagram.com/erzapranata" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram Profile">
                <svg className="w-5 h-5 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <p className="text-[11px] md:text-xs font-mono text-zinc-600 tracking-wider">&copy; 2026 Erza Pranata Ramadhan. All rights reserved.</p>
          </div>
        </section>

      </div>
    </div>
  );
}