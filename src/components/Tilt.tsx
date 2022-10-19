/**
 * This component fakes a 3D effect
 * Adapted from: https://www.youtube.com/watch?v=UqEmFSlx4ps
 */

import type { ComponentChildren } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";

const TILT_SETTINGS = {
  max: 12, // max tilt rotation (degrees (deg))
  perspective: 2000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1, // transform scale, 2 = 200%, 1.5 = 150%, etc..
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

    return () => {
      document.removeEventListener("mousemove", trackPointer);
      document.removeEventListener("touchmove", trackFirstTouch);
    };
  }, [trackPointer]);

  useEffect(() => {
    // Run on page load to prevent scaling jump
    // @ts-ignore
    update({ pageX: window.innerWidth / 2, pageY: window.innerHeight / 2 });
  }, []);

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
    const rotateXUncapped = (-1 * TILT_SETTINGS.max * mouseY) / (tiltHeight / 2);
    const rotateYUncapped = (+1 * TILT_SETTINGS.max * mouseX) / (tiltWidth / 2);
    const rotateX =
      rotateXUncapped < -TILT_SETTINGS.max
        ? -TILT_SETTINGS.max
        : rotateXUncapped > TILT_SETTINGS.max
        ? TILT_SETTINGS.max
        : rotateXUncapped;
    const rotateY =
      rotateYUncapped < -TILT_SETTINGS.max
        ? -TILT_SETTINGS.max
        : rotateYUncapped > TILT_SETTINGS.max
        ? TILT_SETTINGS.max
        : rotateYUncapped;

    tilt.style.transform = `perspective(${TILT_SETTINGS.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
        scale3d(${TILT_SETTINGS.scale}, ${TILT_SETTINGS.scale}, ${TILT_SETTINGS.scale})`;
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
