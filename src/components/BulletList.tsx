import { cn } from "../lib/utils";

export default function BulletList({ items, className }: { items: string[], className?: string }) {
  return (
    <ul className={cn('list-disc list-inside text-sm flex flex-col gap-2', className)} >
      {
        items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))
      }
    </ul>
  );
}