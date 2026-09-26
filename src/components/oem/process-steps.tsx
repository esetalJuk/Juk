import { Reveal } from "@/components/motion/reveal";
import { OEM_PROCESS } from "@/lib/oem-content";

export function ProcessSteps() {
  return (
    <Reveal
      group
      stagger={0.08}
      className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
    >
      {OEM_PROCESS.steps.map((step) => (
        <div key={step.number} data-reveal-item className="bg-[#070d14] p-7 sm:p-8">
          <p className="font-mono text-sm text-azul-primario">{step.number}</p>
          <h3 className="font-display mt-4 text-lg leading-tight text-[#fff]">{step.title}</h3>
          <p className="mt-2 font-body text-sm normal-case tracking-normal text-[#fff]/70">
            {step.body}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
