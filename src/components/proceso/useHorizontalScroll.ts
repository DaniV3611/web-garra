import { useEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useHorizontalScroll({
  sectionRef,
  horizontalContainerRef,
  phaseCount,
  onPhaseChange,
}: {
  sectionRef: RefObject<HTMLElement>;
  horizontalContainerRef: RefObject<HTMLDivElement>;
  phaseCount: number;
  onPhaseChange: (index: number) => void;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const horizontalContainer = horizontalContainerRef.current;

    if (!section || !horizontalContainer) return;

    let animation: gsap.core.Tween | null = null;

    const initScrollTrigger = () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) trigger.kill();
      });

      const viewportWidth = window.innerWidth;
      horizontalContainer.style.width = `${phaseCount * 100}vw`;
      void horizontalContainer.offsetWidth;

      const totalWidth = phaseCount * viewportWidth;
      const scrollDistance = totalWidth - viewportWidth;

      const pinWrapper = section.querySelector(".pin-wrapper") as HTMLElement | null;
      if (!pinWrapper) return;

      gsap.set(horizontalContainer, { x: 0, clearProps: "transform" });

      animation = gsap.to(horizontalContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: pinWrapper,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const phaseIndex = Math.min(
              Math.floor(self.progress * phaseCount),
              phaseCount - 1
            );
            onPhaseChange(phaseIndex);
          },
        },
      });
    };

    const timeoutId = window.setTimeout(() => initScrollTrigger(), 500);

    const handleResize = () => ScrollTrigger.refresh();
    const handleLoad = () => {
      clearTimeout(timeoutId);
      initScrollTrigger();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);

    if (document.readyState === "complete") {
      clearTimeout(timeoutId);
      initScrollTrigger();
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) trigger.kill();
      });
    };
  }, [phaseCount, onPhaseChange, sectionRef, horizontalContainerRef]);
}
