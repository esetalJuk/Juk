import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/components/icons/icon";

type Item = {
  number: string;
  title: string;
  body: string;
  icon?: string;
};

export function NumberedList({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <Reveal
          key={item.number}
          className="group grid gap-2 py-6 transition-colors sm:grid-cols-[88px_1fr] sm:gap-6 sm:hover:bg-white/[0.03]"
        >
          <span className="flex items-center gap-3 font-mono text-sm text-azul-primario">
            {item.number}
            {item.icon && (
              <Icon
                name={item.icon}
                className="h-4 w-4 text-azul-primario opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            )}
          </span>
          <div>
            <h3 className="font-display text-lg">{item.title}</h3>
            <p className="mt-1 max-w-2xl text-sm text-ink-muted">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
