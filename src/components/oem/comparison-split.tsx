import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { OEM_COMPARISON } from "@/lib/oem-content";

export function ComparisonSplit() {
  return (
    <Reveal
      group
      stagger={0.08}
      className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2"
    >
      <div data-reveal-item className="bg-tinta-raised p-8 sm:p-10">
        <p className="eyebrow text-ink-faint">{OEM_COMPARISON.fragmented.label}</p>
        <ul className="mt-6 flex flex-col gap-4">
          {OEM_COMPARISON.fragmented.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
              <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div data-reveal-item className="bg-tinta-card p-8 sm:p-10">
        <p className="eyebrow text-azul-primario">{OEM_COMPARISON.integrated.label}</p>
        <ul className="mt-6 flex flex-col gap-4">
          {OEM_COMPARISON.integrated.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-white/90">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-azul-primario" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
