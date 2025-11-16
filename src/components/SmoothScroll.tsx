import type React from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // Smooth scroll desactivado - usando scroll nativo del navegador
  return <>{children}</>;
}
