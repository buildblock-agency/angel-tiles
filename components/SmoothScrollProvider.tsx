"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth acceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Update ScrollTrigger on scroll
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Listen to custom scroll lock events from mobile header
    const handleLockScroll = (e: Event) => {
      const customEvent = e as CustomEvent;
      const shouldLock = customEvent.detail?.lock;
      if (lenisRef.current) {
        if (shouldLock) {
          lenisRef.current.stop();
        } else {
          lenisRef.current.start();
        }
      }
    };
    window.addEventListener("lock-scroll", handleLockScroll);

    // Dedicated requestAnimationFrame rendering loop for Lenis
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("lock-scroll", handleLockScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Resize and recalculate page heights on page transitions to prevent scroll locking
  useEffect(() => {
    const handleResize = () => {
      if (lenisRef.current) {
        lenisRef.current.resize();
        ScrollTrigger.refresh();
      }
    };

    // Run immediately on page transition
    handleResize();

    // Trigger double checks as DOM settles and images load
    const timeout1 = setTimeout(handleResize, 150);
    const timeout2 = setTimeout(handleResize, 600);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [pathname]);

  return <>{children}</>;
}
