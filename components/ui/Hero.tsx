"use client";
import RotatingText from "./RotatingText";
import Counter from "./Counter";

export default function Hero() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-center min-h-[60vh] w-full">
      
      {/* SUBTLE TECH GRID PATTERN */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* TEKS STATUS & BIO */}
      <div className="md:col-span-2 flex flex-col items-start space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono text-purple-400">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          Informatics Engineering Graduate (IPK 3.76)
        </div>
        
        <div className="flex flex-col space-y-4 min-h-[160px] sm:min-h-[180px]">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500">
              Erza Pranata.
            </span>
          </h1>
          
          <div className="flex flex-col items-start space-y-2 pt-1">
            <h5 className="text-sm sm:text-base font-mono uppercase tracking-widest text-zinc-500">
              Interested in
            </h5>
            <div className="text-2xl sm:text-3xl">
              <RotatingText />
            </div>
          </div>
        </div>
        
        <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
          Lulusan S1 Teknik Informatika Universitas Budi Luhur (IPK 3.76) yang memiliki minat kuat pada bidang pengembangan web, keamanan siber, analisis data dan desain grafis. Memiliki pemahaman fundamental Windows serta familiar dengan konsep dasar mengoperasikan Microsoft Office untuk kebutuhan analisis dan pelaporan, serta menunjukkan ketepatan dan efisiensi dalam tugas data entry. Berpengalaman dalam proyek penelitian klasifikasi hoax (Machine Learning) dan pengembangan web dengan fitur enkripsi data menggunakan database SQL.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a 
            href="/assets/CV-Erza.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 border border-purple-500 text-white text-sm font-medium hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/20 transition-all group cursor-pointer"
          >
            <span>Get Resume PDF</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-purple-200 group-hover:translate-y-0.5 transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* KOLOM KANAN: VISUAL HUB */}
      <div className="flex flex-col items-center md:items-end justify-center opacity-0 animate-fade-in [animation-delay:300ms] relative z-10 space-y-8 w-full">
        
        <div className="absolute top-12 -left-6 w-12 h-12 rounded-xl bg-[#0a0a0c] border border-white/5 flex items-center justify-center shadow-2xl animate-[bounce_3s_infinite] hidden lg:flex">
          <span className="text-xs font-mono text-purple-400 font-bold">&lt;/&gt;</span>
        </div>
        <div className="absolute top-48 -left-12 w-14 h-6 rounded-full bg-[#0a0a0c] border border-purple-500/20 flex items-center justify-center shadow-2xl animate-[bounce_4s_infinite] hidden lg:flex">
          <span className="text-[9px] font-mono text-zinc-400 tracking-widest">0101</span>
        </div>

        {/* BINGKAI FOTO */}
        <div className="relative group w-[230px] h-[290px] flex-shrink-0">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 opacity-20 blur-2xl group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 pointer-events-none" />
          <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-purple-500/10 group-hover:from-purple-500 group-hover:to-fuchsia-500 opacity-50 group-hover:opacity-100 transition-all duration-500" />

          <div className="relative w-full h-full rounded-2xl overflow-hidden border-[2px] border-[#030303] bg-[#0a0a0c] shadow-2xl">
            <img 
              src="/assets/PP.jpg"
              alt="Erza Pranata Ramadhan"
              className="w-full h-full object-cover object-center filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider text-zinc-300 uppercase">Ready to Work</span>
            </div>
          </div>
          
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 group-hover:border-purple-400 transition-colors" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 group-hover:border-purple-400 transition-colors" />
        </div>

        {/* HERO METRIC COUNTER */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5 w-full max-w-[220px] text-center md:text-right">
          <div>
            <div className="text-xl font-bold text-white tracking-tight">
              <Counter target={3.76} decimals={2} duration={2000} />
            </div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 mt-0.5">GPA</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-400 tracking-tight">
              <Counter target={2.1} decimals={1} duration={2000} />K+
            </div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 mt-0.5">Scraped</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white tracking-tight">
              <Counter target={0.36} decimals={2} duration={2000} />s
            </div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 mt-0.5">Crypt</div>
          </div>
        </div>

      </div>

    </div>
  );
}