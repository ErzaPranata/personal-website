"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  duration?: number;
  decimals?: number;
}

export default function Counter({ target, duration = 2000, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);      
      const easeOutQuad = progressRatio * (2 - progressRatio);
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