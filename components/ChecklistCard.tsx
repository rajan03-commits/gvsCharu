import { Check } from "lucide-react";

export default function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-border p-8">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-foreground">
            <Check
              size={18}
              aria-hidden="true"
              className="mt-1 shrink-0 text-primary"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}