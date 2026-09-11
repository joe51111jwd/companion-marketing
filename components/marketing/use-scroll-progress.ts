"use client";

import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";

import { clamp, usePrefersReducedMotion } from "@/lib/motion";

export function useScrollProgress<T extends HTMLElement>(): {
  ref: RefObject<T | null>;
  progress: number;
  style: CSSProperties;
} {
  const ref = useRef<T>(null);
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) {
      setProgress(0);
      return;
    }

    const update = () => {
      const rect = node.getBoundingClientRect();
      const travel = Math.max(rect.height * 0.65, 1);
      setProgress(clamp(-rect.top / travel, 0, 1));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduced]);

  return {
    ref,
    progress,
    style: { ["--hero-p" as string]: String(progress) } as CSSProperties,
  };
}
