import { useRef, useEffect, useCallback } from "preact/hooks";
import type { ComponentChildren } from "preact";
// Adapted from: https://www.youtube.com/watch?v=UqEmFSlx4ps

const tiltEffectSettings = {
  max: 12, // max tilt rotation (degrees (deg))
  perspective: 2000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: "cubic-bezier(.03,.98,.52,.99)", // easing (transition-timing-function) of the enter/exit transition,
  reverse: true,
};

export default function Tilt({ children }: { children: ComponentChildren }) {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  const trackPointer = useCallback((event: any) => {
    requestAnimationFrame(() => {
      update(event);
    });
  }, []);

  useEffect(() => {
    const trackFirstTouch = (e: TouchEvent) => trackPointer(e.touches[0]);

    document.addEventListener("mousemove", trackPointer);
    document.addEventListener("touchmove", trackFirstTouch);

    document.addEventListener("touchend", resetStyles);
    document.addEventListener("mouseleave", resetStyles);

    return () => {
      document.removeEventListener("mousemove", trackPointer);
      document.removeEventListener("touchmove", trackFirstTouch);

      document.removeEventListener("touchend", resetStyles);
      document.removeEventListener("mouseleave", resetStyles);
    };
  }, [trackPointer]);

  function update(event: MouseEvent | Touch) {
    const tilt = tiltRef.current;
    if (!tilt) return;

    const tiltWidth = tilt.clientWidth;
    const tiltHeight = tilt.clientHeight;

    const tiltRect = tilt.getBoundingClientRect();
    const centerX = window.scrollX + tiltRect.x + tiltWidth / 2;
    const centerY = window.scrollY + tiltRect.y + tiltHeight / 2;

    const mouseX = event.pageX - centerX;
    const mouseY = event.pageY - centerY;
    const rotateXUncapped = (-1 * tiltEffectSettings.max * mouseY) / (tiltHeight / 2);
    const rotateYUncapped = (+1 * tiltEffectSettings.max * mouseX) / (tiltWidth / 2);
    const rotateX =
      rotateXUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateXUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateXUncapped;
    const rotateY =
      rotateYUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateYUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateYUncapped;

    tilt.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
        scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  }

  function resetStyles() {
    const tilt = tiltRef.current;
    if (!tilt) return;
    tilt.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }

  return (
    <div
      ref={tiltRef}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
