import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import type React from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Manejar enlaces de anclaje
    lenis.on("scroll", () => {
      // Lenis maneja automáticamente los enlaces con href="#..."
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
