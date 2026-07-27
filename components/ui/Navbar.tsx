"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    // Daftarkan ID section yang ingin kita pantau pergerakannya
    const sectionIds = navItems.map((item) => item.id);
    
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      // Konfigurasi deteksi: memicu callback ketika 30% area section terlihat di layar
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px", // Mengunci area deteksi di tengah viewport browser
          threshold: 0,
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    // Bersihkan observer saat komponen dilepas (unmount) mencegah memory leak
    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  // Fungsi pembantu untuk handle smooth scroll manual ketika menu diklik
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl rounded-full border border-white/5 bg-[#0a0a0c]/70 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-2xl">
      {/* Brand Logo / Nama */}
      <button 
        onClick={() => handleScroll("about")}
        className="text-sm font-bold tracking-tight text-white font-mono hover:opacity-80 transition-opacity cursor-pointer"
      >
        ERZA<span className="text-purple-500">.</span>
      </button>

      {/* Menu Links */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20 shadow-inner"
                  : "text-zinc-400 hover:text-zinc-200 border border-transparent"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Resume Download Action */}
      <a 
        href="/CV-Erza Pranata Ramadhan.pdf" 
        download="CV_Erza_Pranata_Ramadhan.pdf"
        className="text-xs font-mono font-medium px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/10 transition-colors"
      >
        CV ↓
      </a>
    </nav>
  );
}