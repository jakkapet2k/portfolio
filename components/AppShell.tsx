"use client";

import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const handleComplete = useCallback(() => {
    setLoading(false);
    // Content starts at opacity 0 via inline style, GSAP animates it in
    requestAnimationFrame(() => {
      if (contentRef.current) {
        gsap.fromTo(contentRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
      }
    });
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleComplete} />}
      <div ref={contentRef} style={{ opacity: 0 }}>
        <Navbar />
        {children}
      </div>
    </>
  );
}
