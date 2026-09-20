const PATHS: Record<string, string> = {
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  chart: "M4 20V10m6 10V4m6 16v-7",
  pin: "M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  headset: "M4 13a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-1v-6h3M4 13v4a2 2 0 0 0 2 2h1v-6H4",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z",
  grid: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z",
  bell: "M6 8a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 12 6 8Zm4.5 9.5a1.5 1.5 0 0 0 3 0",
  refresh: "M4 4v5h5M20 20v-5h-5M4.5 15a8 8 0 0 0 14.9 2.5M19.5 9A8 8 0 0 0 4.6 6.5",
  wifi: "M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0M12 19h.01",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3 3",
  play: "M8 5v14l11-7L8 5Z",
  tag: "M3 12 12 3h7v7l-9 9-7-7Zm11-4.5h.01",
  lock: "M6 11V8a6 6 0 1 1 12 0v3M5 11h14v9H5v-9Z",
  device: "M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5 15h.01",
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Zm10 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
  tool: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.6-.6-.6-2.6 2.8-2.8Z",
  store: "M4 9v11h16V9M2 9l2-5h16l2 5M2 9h20M9 20v-6h6v6",
  tap: "M9 12V6a2 2 0 0 1 4 0v5m0-4a2 2 0 0 1 4 0v3m0-1a2 2 0 0 1 4 0v5c0 4-2.5 6-6 6h-2c-3 0-4.5-1-6-3l-2.5-4c-.6-1 .3-2.2 1.4-1.8L9 12",
  key: "M15 7a4 4 0 1 0-4 4h.5L15 8.5V11h2.5V8.5H20V6h-2.6A4 4 0 0 0 15 7ZM7 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4-4-6 6",
  camera: "M4 8h3l2-2h6l2 2h3v11H4V8Zm8 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z",
  cloud: "M7 18a4.5 4.5 0 0 1-1-8.9 5.5 5.5 0 0 1 10.8-1.6A4 4 0 0 1 17 18H7Z",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  check: "M5 13l4 4L19 7",
  close: "M6 6l12 12M18 6 6 18",
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: keyof typeof PATHS | string;
  className?: string;
}) {
  const d = PATHS[name] ?? PATHS.device;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
