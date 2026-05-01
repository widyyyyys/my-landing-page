import { Crown, Award, Timer, Gift, MapPin, Wallet } from "lucide-react";

const features = [
  { icon: Crown, title: "تصميم فاخر", desc: "لمسة ذهبية ترفع مستوى ديكور بيتك." },
  { icon: Award, title: "جودة تدوم", desc: "MDF متين مع طلاء يحافظ على الألوان." },
  { icon: Timer, title: "تركيب في دقيقة واحدة", desc: "خفيف وسهل التعليق دون أدوات معقدة." },
  { icon: Gift, title: "هدية مميزة", desc: "تغليف يليق بالمناسبات والإهداء." },
  { icon: MapPin, title: "توصيل لكل الجزائر", desc: "نصل إلى كل ولايات الوطن." },
  { icon: Wallet, title: "الدفع عند الاستلام", desc: "ادفع فقط عند استلام طلبك." },
];

export function Features() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
