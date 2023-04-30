/**
 * This component fakes a 3D effect
 * Adapted from: https://www.youtube.com/watch?v=UqEmFSlx4ps
 */
import type { ComponentChildren } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";

const TILT_SETTINGS = {
  max: 12, // max tilt rotation (degrees (deg))
  perspective: 2000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1, // transform scale, 2 = 200%, 1.5 = 150%, etc..
};

export default function Tilt({ children, className }: { children: ComponentChildren; className: string }) {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  const trackPointer = useCallback((event: any) => {
    requestAnimationFrame(() => {
      update(event);
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", trackPointer);

    return () => {
      document.removeEventListener("mousemove", trackPointer);
    };
  }, [trackPointer]);

  useEffect(() => {
    // Run on page load to prevent scaling jump
    // @ts-ignore
    update({ pageX: window.innerWidth / 2, pageY: window.innerHeight / 2 });
  }, []);

  // function enableTilt() {
  //   function handleOrientation(event: DeviceOrientationEvent) {
  //     const alpha = event.alpha;
  //     const beta = event.beta;
  //     const gamma = event.gamma;

  //     set_data({ alpha, beta, gamma });

  //     // @ts-ignore
  //     update({ pageX: (45 - gamma) * 14, pageY: (90 - beta) * 14 });
  //   }

  //   // @ts-ignore
  //   if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
  //     // @ts-ignore
  //     DeviceMotionEvent.requestPermission()
  //       .then((response: any) => {
  //         if (response == "granted") {
  //           window.addEventListener("deviceorientation", handleOrientation);
  //         }
  //       })
  //       .catch(console.error);
  //   }

  //   return () => {
  //     window.removeEventListener("deviceorientation", handleOrientation);
  //   };
  // }

  function update(event: MouseEvent) {
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

    tilt.style.transformStyle = "preserve-3d";
  }

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
