"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    let interval: NodeJS.Timeout | null = null;

    const scramble = () => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (interval) clearInterval(interval);
      }

      iteration += 500 / 30; // Kecepatan decoding
    };

    interval = setInterval(scramble, 15);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [text, isInView]);

  return <span ref={ref}>{displayText}</span>;
}