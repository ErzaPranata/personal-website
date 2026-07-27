"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  duration?: number; // dalam milidetik
  decimals?: number; // jumlah angka di belakang koma
}

export default function Counter({ target, duration = 2000, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Hitung persentase progress animasi (maksimal 1)
      const progressRatio = Math.min(progress / duration, 1);
      
      // Efek easing out kuadratis agar melambat mulus di akhir gerakan
      const easeOutQuad = progressRatio * (2 - progressRatio);

      // Hitung nilai saat ini berdasarkan efek easing
      const currentValue = easeOutQuad * target;
      setCount(currentValue);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count.toFixed(decimals)}</span>;
}