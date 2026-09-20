"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export type SceneVariant =
  | "radar"
  | "signage"
  | "ripple"
  | "scan"
  | "orbit"
  | "matrix"
  | "wave";

const AZUL_PRIMARIO = "0, 128, 223";
const VERDE_ACENTO = "39, 211, 140";
const AZUL_CORPORATIVO = "0, 75, 142";

function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Drawer = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  rand: () => number,
) => void;

/** Radar rings pulsing outward from an origin, sweeping past scattered sensor dots. */
const radar: Drawer = (ctx, w, h, t, rand) => {
  const cx = w * 0.72;
  const cy = h * 0.4;
  const dots = 22;
  const positions: [number, number][] = [];
  for (let i = 0; i < dots; i++) {
    const angle = rand() * Math.PI * 2;
    const dist = 40 + rand() * Math.min(w, h) * 0.42;
    positions.push([cx + Math.cos(angle) * dist, cy + Math.sin(angle) * dist]);
  }
  for (let ring = 0; ring < 3; ring++) {
    const progress = ((t * 0.28 + ring / 3) % 1);
    const radius = Math.max(0, progress * Math.max(w, h) * 0.5);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${AZUL_PRIMARIO}, ${0.32 * (1 - progress)})`;
    ctx.lineWidth = 1.4;
    ctx.stroke();
  }
  positions.forEach(([x, y]) => {
    const dist = Math.hypot(x - cx, y - cy);
    const sweepAngle = (t * 0.5) % (Math.PI * 2);
    const dotAngle = Math.atan2(y - cy, x - cx);
    let diff = Math.abs(sweepAngle - ((dotAngle + Math.PI * 2) % (Math.PI * 2)));
    if (diff > Math.PI) diff = Math.PI * 2 - diff;
    const lit = diff < 0.5 ? 1 - diff / 0.5 : 0;
    ctx.beginPath();
    ctx.arc(x, y, 2 + lit * 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${VERDE_ACENTO}, ${0.25 + lit * 0.6})`;
    ctx.fill();
    if (dist < 200) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = `rgba(${AZUL_PRIMARIO}, ${0.05 + lit * 0.12})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  });
};

/** A grid of screens whose brightness ripples in a diagonal wave, like a video wall. */
const signage: Drawer = (ctx, w, h, t) => {
  const cols = Math.max(4, Math.floor(w / 46));
  const rows = Math.max(3, Math.floor(h / 46));
  const cellW = w / cols;
  const cellH = h / rows;
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const phase = (x + y) * 0.55 - t * 1.6;
      const glow = (Math.sin(phase) + 1) / 2;
      const px = x * cellW + cellW * 0.14;
      const py = y * cellH + cellH * 0.14;
      const pw = cellW * 0.72;
      const ph = cellH * 0.72;
      ctx.fillStyle = `rgba(${AZUL_PRIMARIO}, ${0.05 + glow * 0.16})`;
      ctx.fillRect(px, py, pw, ph);
      if (glow > 0.82) {
        ctx.strokeStyle = `rgba(${VERDE_ACENTO}, ${(glow - 0.82) * 2})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(px, py, pw, ph);
      }
    }
  }
};

/** Concentric ripples expanding outward from a handful of touch points. */
const ripple: Drawer = (ctx, w, h, t, rand) => {
  const points = 4;
  for (let p = 0; p < points; p++) {
    const seedX = rand();
    const seedY = rand();
    const cx = w * (0.2 + seedX * 0.65);
    const cy = h * (0.18 + seedY * 0.7);
    const cycle = 2.6;
    const local = ((t + p * 0.9) % cycle) / cycle;
    for (let ring = 0; ring < 2; ring++) {
      const progress = (local + ring * 0.5) % 1;
      const radius = Math.max(0, progress * 70);
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${VERDE_ACENTO}, ${0.4 * (1 - progress)})`;
      ctx.lineWidth = 1.3;
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(cx, cy, 2.2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${AZUL_PRIMARIO}, 0.55)`;
    ctx.fill();
  }
};

/** A horizontal scan line sweeping the frame, briefly lighting up the dots it crosses. */
const scan: Drawer = (ctx, w, h, t, rand) => {
  const dots = 26;
  const positions: [number, number][] = [];
  for (let i = 0; i < dots; i++) positions.push([rand() * w, rand() * h]);
  const scanY = ((t * 0.22) % 1.3) * h;
  positions.forEach(([x, y]) => {
    const near = Math.abs(y - scanY) < 18;
    ctx.beginPath();
    ctx.arc(x, y, near ? 2.6 : 1.6, 0, Math.PI * 2);
    ctx.fillStyle = near
      ? `rgba(${VERDE_ACENTO}, 0.85)`
      : `rgba(${AZUL_PRIMARIO}, 0.28)`;
    ctx.fill();
  });
  if (scanY < h) {
    const grad = ctx.createLinearGradient(0, scanY - 26, 0, scanY + 4);
    grad.addColorStop(0, "rgba(39, 211, 140, 0)");
    grad.addColorStop(1, "rgba(39, 211, 140, 0.16)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, scanY - 26, w, 30);
    ctx.strokeStyle = "rgba(39, 211, 140, 0.55)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, scanY);
    ctx.lineTo(w, scanY);
    ctx.stroke();
  }
};

/** Small nodes orbiting a central hub at varying radii, like access points around a lock. */
const orbit: Drawer = (ctx, w, h, t, rand) => {
  const cx = w * 0.7;
  const cy = h * 0.45;
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${AZUL_PRIMARIO}, 0.8)`;
  ctx.fill();
  const rings = 3;
  for (let r = 0; r < rings; r++) {
    const radius = 34 + r * 32;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${AZUL_PRIMARIO}, 0.1)`;
    ctx.lineWidth = 1;
    ctx.stroke();
    const nodesInRing = 2 + r;
    const speed = 0.25 - r * 0.05;
    const offset = rand() * Math.PI * 2;
    for (let n = 0; n < nodesInRing; n++) {
      const angle = offset + (n / nodesInRing) * Math.PI * 2 + t * speed;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${VERDE_ACENTO}, 0.75)`;
      ctx.fill();
    }
  }
};

/** A sparse grid of pixels flipping on and off, like e-ink tags refreshing across a network. */
const matrix: Drawer = (ctx, w, h, t) => {
  const cols = Math.max(6, Math.floor(w / 34));
  const rows = Math.max(4, Math.floor(h / 34));
  const cellW = w / cols;
  const cellH = h / rows;
  const seedBase = Math.floor(t * 0.8);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const cellRand = mulberry32(seedBase * 977 + x * 31 + y * 17)();
      if (cellRand > 0.86) {
        const flip = mulberry32(seedBase * 977 + x * 31 + y * 17)();
        const px = x * cellW + cellW * 0.22;
        const py = y * cellH + cellH * 0.22;
        ctx.fillStyle =
          flip > 0.5
            ? `rgba(${VERDE_ACENTO}, 0.5)`
            : `rgba(${AZUL_PRIMARIO}, 0.4)`;
        ctx.fillRect(px, py, cellW * 0.56, cellH * 0.56);
      }
    }
  }
};

/** Detection-field arcs pulsing between two antenna posts at the frame edges. */
const wave: Drawer = (ctx, w, h, t) => {
  const postX1 = w * 0.08;
  const postX2 = w * 0.22;
  const postTop = h * 0.22;
  const postBottom = h * 0.82;
  [postX1, postX2].forEach((x) => {
    ctx.strokeStyle = `rgba(${AZUL_PRIMARIO}, 0.4)`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, postTop);
    ctx.lineTo(x, postBottom);
    ctx.stroke();
  });
  const arcs = 4;
  for (let i = 0; i < arcs; i++) {
    const progress = ((t * 0.35 + i / arcs) % 1);
    const x = postX1 + (postX2 - postX1) * progress;
    const bow = Math.sin(progress * Math.PI) * 10;
    ctx.beginPath();
    ctx.moveTo(x, postTop);
    ctx.quadraticCurveTo(x + bow, (postTop + postBottom) / 2, x, postBottom);
    ctx.strokeStyle = `rgba(${VERDE_ACENTO}, ${0.5 * (1 - Math.abs(progress - 0.5) * 1.4)})`;
    ctx.lineWidth = 1.4;
    ctx.stroke();
  }
  ctx.strokeStyle = `rgba(${AZUL_CORPORATIVO}, 0.3)`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(postX1, postBottom + 4);
  ctx.lineTo(postX2, postBottom + 4);
  ctx.stroke();
};

const DRAWERS: Record<SceneVariant, Drawer> = {
  radar,
  signage,
  ripple,
  scan,
  orbit,
  matrix,
  wave,
};

/** Decorative per-section canvas animation, echoing the home hero's network scene. */
export function SectionScene({ variant }: { variant: SceneVariant }) {
  const prefersReduced = usePrefersReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rand = mulberry32(variant.length * 97 + 13);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let frameId = 0;
    let paused = false;
    const start = performance.now();
    const draw = DRAWERS[variant];

    const animate = (now: number) => {
      if (!paused && width > 0 && height > 0) {
        const t = Math.max(0, (now - start) / 1000);
        ctx.clearRect(0, 0, width, height);
        draw(ctx, width, height, t, rand);
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    const io = new IntersectionObserver(
      ([entry]) => {
        paused = !entry.isIntersecting || document.hidden;
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);

    const onVisibility = () => {
      paused = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameId);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, [variant, prefersReduced]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
