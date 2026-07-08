"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth acceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize Lenis scroll animation loop with GSAP's ticker
    const updatePhysics = (time: number) => {
      lenis.raf(time * 1000); // gsap.ticker passes time in seconds, Lenis expects ms
    };
    gsap.ticker.add(updatePhysics);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after a brief delay for image loading layout recalculation
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1200);

    return () => {
      gsap.ticker.remove(updatePhysics);
      clearTimeout(refreshTimeout);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
