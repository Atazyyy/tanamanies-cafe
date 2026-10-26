import { Sparkle } from "lucide-react";

const ITEMS = [
  "Single Origin Nusantara",
  "Roasted in-house setiap minggu",
  "Manual brew & espresso",
  "Pastry dibuat harian",
  "WiFi kencang, colokan di mana-mana",
  "Ruangan outdoor",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-cream py-4 text-ink">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-sm font-semibold tracking-wide">{item}</span>
            <Sparkle className="h-3.5 w-3.5 text-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
