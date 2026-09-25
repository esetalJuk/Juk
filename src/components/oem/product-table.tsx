import { Reveal } from "@/components/motion/reveal";

type Row = { producto: string; proteccion: string };

export function ProductTable({ rows }: { rows: Row[] }) {
  return (
    <Reveal className="overflow-x-auto border border-line">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-line bg-tinta-raised">
            <th className="eyebrow px-5 py-4 text-ink-faint">Producto</th>
            <th className="eyebrow px-5 py-4 text-ink-faint">Cómo se protege</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.producto} className="border-b border-line last:border-b-0">
              <td className="font-display px-5 py-4 align-top text-base leading-tight">
                {row.producto}
              </td>
              <td className="px-5 py-4 align-top text-sm text-ink-muted">
                {row.proteccion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
