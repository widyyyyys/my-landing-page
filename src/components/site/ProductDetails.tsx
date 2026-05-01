import { Sparkles, Ruler, Hammer, Scale, Gift, Home } from "lucide-react";

const specs = [
  { icon: Sparkles, title: "تصميم فريد", desc: "خط عربي ذهبي بارز على زخرفة إسلامية مقطوعة بالليزر." },
  { icon: Ruler, title: "أبعاد مدروسة", desc: "كل قطعة 28×52 سم — العرض الكلي 88 سم." },
  { icon: Hammer, title: "سهولة التركيب", desc: "قطع خفيفة وجاهزة للتعليق في أقل من دقيقة." },
  { icon: Scale, title: "توازن بصري", desc: "ثلاث قطع متناغمة تعطي مظهرًا متناسقًا وراقيًا." },
  { icon: Gift, title: "صالح كهدية", desc: "اختيار رائع للأعراس والمناسبات والإهداء." },
  { icon: Home, title: "يناسب كل غرفة", desc: "صالون · غرفة نوم · مدخل البيت · المكتب." },
];

export function ProductDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">تفاصيل المنتج</h2>
          <p className="mt-3 text-muted-foreground">كل ما تحتاج معرفته عن طقم Glam Décor الإسلامي.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specs.map((s, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center text-gold-foreground mb-4 shadow-gold">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
