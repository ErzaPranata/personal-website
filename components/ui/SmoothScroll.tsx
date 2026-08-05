"use client";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{lerp: 0.1, smoothWheel: true, wheelMultiplier: 1}}>
      {/* @ts-expect-error - Bentrok definisi ReactNode antara library Lenis (React 18) dan project bawaan (React 19) */}
      {children}
    </ReactLenis>
  );
}