import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { NumberedList } from "@/components/oem/numbered-list";
import { OEM_CLOSING } from "@/lib/oem-content";

export function OemClosing() {
  return (
    <Section className="py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">{OEM_CLOSING.eyebrow}</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          {OEM_CLOSING.title}
        </h2>
      </Reveal>

      <div className="mt-10">
        <NumberedList items={OEM_CLOSING.items} />
      </div>

      <Reveal className="mt-8">
        <p className="font-display text-2xl text-verde-acento sm:text-3xl">
          {OEM_CLOSING.closing}
        </p>
      </Reveal>
    </Section>
  );
}
