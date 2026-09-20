"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

/** Full-screen brand preloader shown on every fresh page load, ~2s. */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const bracketsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const finish = () => {
      document.body.style.overflow = previousOverflow;
      setVisible(false);
    };

    if (prefersReduced) {
      const t = setTimeout(finish, 300);
      return () => clearTimeout(t);
    }

    const brackets = bracketsRef.current?.querySelectorAll("[data-bracket]");
    const tl = gsap.timeline({ onComplete: finish });

    tl.set(logoRef.current, { opacity: 0, scale: 0.92 });
    tl.set(barRef.current, { scaleX: 0 });
    if (brackets?.length) tl.set(brackets, { opacity: 0, scale: 1.5 });

    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.55,
      ease: "power3.out",
    });
    if (brackets?.length) {
      tl.to(
        brackets,
        { opacity: 1, scale: 1, duration: 0.45, stagger: 0.05, ease: "power3.out" },
        "-=0.35",
      );
    }
    tl.to(
      barRef.current,
      { scaleX: 1, duration: 1, ease: "power2.inOut" },
      "-=0.1",
    );
    tl.to(
      rootRef.current,
      { opacity: 0, duration: 0.4, ease: "power2.inOut" },
      "+=0.1",
    );

    return () => {
      tl.kill();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-tinta"
    >
      <div className="flex flex-col items-center gap-7">
        <div ref={bracketsRef} className="relative flex h-20 w-56 items-center justify-center">
          <Corner className="left-0 top-0" />
          <Corner className="right-0 top-0 rotate-90" />
          <Corner className="bottom-0 right-0 rotate-180" />
          <Corner className="bottom-0 left-0 -rotate-90" />
          <div ref={logoRef} className="relative h-9 w-[132px]">
            <Image
              src="/brand/dasok-logo.png"
              alt="Dások All Solutions"
              fill
              priority
              className="object-contain"
              sizes="132px"
            />
          </div>
        </div>
        <div className="h-[2px] w-40 overflow-hidden bg-white/10">
          <div
            ref={barRef}
            className="h-full w-full origin-left"
            style={{
              background:
                "linear-gradient(90deg, var(--color-azul-primario), var(--color-verde-acento))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      data-bracket
      viewBox="0 0 20 20"
      className={`absolute h-5 w-5 text-azul-primario ${className}`}
    >
      <path
        d="M1 8V2a1 1 0 0 1 1-1h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
