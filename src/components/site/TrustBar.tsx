import { Truck, Layers, Clock, Wallet } from "lucide-react";

const items = [
  { icon: Truck, label: "توصيل لـ 69 ولاية" },
  { icon: Layers, label: "خامة MDF عالية الجودة" },
  { icon: Clock, label: "توصيل خلال 24-48 ساعة" },
  { icon: Wallet, label: "الدفع عند الاستلام" },
];

export function TrustBar() {
  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="flex items-center justify-center gap-3 text-center">
            <div className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center text-gold shrink-0">
              <it.icon className="h-5 w-5" />
            </div>
            <span className="text-sm md:text-base font-bold text-foreground">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
