"use client";

import { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden group/slider bg-[#0d0d11] flex items-center justify-center border border-white/5 shadow-inner">
      
      {/* RENDER GAMBAR DENGAN SKALA PENUH */}
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Project screenshot ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain p-2 transition-all duration-500 ease-in-out ${
            currentIndex === index 
              ? "opacity-100 scale-100 filter brightness-95 contrast-105" 
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        />
      ))}

      {/* Lapisan Vignette Halus pada Gambar */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* TOMBOL NAVIGASI MANUAL */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-purple-600 hover:border-purple-600 z-20 cursor-pointer text-xl select-none font-sans"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-purple-600 hover:border-purple-600 z-20 cursor-pointer text-xl select-none font-sans"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Indikator Dot Aktif */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-4 bg-purple-500" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}