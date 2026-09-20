import { OEM_SOLUTION_LINES } from "@/lib/oem-content";

export function OemContentsNav() {
  return (
    <nav
      aria-label="Contenido de la página"
      className="border-b border-line bg-tinta-raised"
    >
      <div className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-5 py-3 sm:px-8">
        {OEM_SOLUTION_LINES.map((line) => (
          <a
            key={line.slug}
            href={`#${line.slug}`}
            className="group flex shrink-0 items-center gap-2 px-4 py-2 text-sm text-ink-muted transition-colors hover:text-white"
          >
            <span className="font-mono text-xs text-azul-primario transition-colors group-hover:text-verde-acento">
              {line.number}
            </span>
            <span className="relative">
              {line.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-verde-acento transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
