import productHero from "@/assets/product-hero.jpg";
import { Truck, ShieldCheck, BadgePercent } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-hero overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl" aria-hidden />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative">
        <div className="order-2 md:order-1 text-center md:text-right">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 text-gold-foreground px-4 py-1.5 text-xs font-bold mb-5">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            جديد · إصدار محدود
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            ديكور إسلامي فاخر <br />
            <span className="text-primary">يعطي دارك لمسة فخامة</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
            طقم 3 لوحات MDF مقطوعة بالليزر — الله · الكعبة المشرفة · محمد ﷺ. خط عربي ذهبي بارز وزخرفة إسلامية أنيقة.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="text-4xl font-bold text-primary">3900 دج</span>
            <span className="text-xl text-muted-foreground line-through">5500 دج</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 text-destructive px-3 py-1 text-sm font-bold">
              <BadgePercent className="h-4 w-4" /> وفّر 30%
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-success/15 text-success px-4 py-2 text-sm font-bold">
              <ShieldCheck className="h-4 w-4" /> الدفع عند الاستلام
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-bold">
              <Truck className="h-4 w-4" /> توصيل لكل الجزائر
            </span>
          </div>

          <a
            href="#order"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rose text-primary-foreground px-8 py-4 text-base font-bold shadow-elegant hover:shadow-gold transition-all hover:-translate-y-1"
          >
            اطلب الآن — الدفع عند الاستلام
          </a>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="absolute inset-0 bg-gradient-gold rounded-3xl blur-2xl opacity-30" aria-hidden />
          <img
            src={productHero}
            alt="طقم ديكور حائط إسلامي Glam Décor — الله، الكعبة، محمد"
            className="relative w-full rounded-3xl shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
}
