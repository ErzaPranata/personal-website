"use client";

import { useEffect, useState } from "react";

export default function RotatingText() {
  const words = ["Cyber Security","Data Analyst", "Web Developer", "Web Designer", "Graphic Design"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000); // Jeda membaca 2 detik
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    // 1. Mengubah leading-none menjadi leading-tight agar ada ruang vertikal yang cukup
    // 2. Menambahkan pb-2 agar huruf 'g', 'y', 'p' tidak terpotong oleh clipping border
    <span className="inline-flex items-center select-none leading-tight pb-2">
      
      {/* Teks utama dengan gradasi warna */}
      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 min-h-[1em] inline-block py-1">
        {currentText === "" ? "\u00A0" : currentText}
      </span>
      
      {/* Kursor ketik yang disesuaikan posisinya agar tetap sejajar dan kokoh */}
      <span className="ml-1 w-[2.5px] h-[22px] sm:h-[30px] bg-purple-500 animate-[pulse_0.8s_infinite] inline-block align-middle" />
    </span>
  );
}