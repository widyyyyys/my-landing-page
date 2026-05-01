import dimensions from "@/assets/product-dimensions.jpg";

export function Gallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">الأبعاد بالتفصيل</h2>
          <p className="mt-3 text-muted-foreground">
            كل قطعة 28cm × 52cm — العرض الكلي للطقم 88cm.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-gold rounded-3xl blur-2xl opacity-25" aria-hidden />
          <img
            src={dimensions}
            alt="أبعاد طقم Glam Décor: 28×52 سم لكل لوحة، العرض الكلي 88 سم"
            className="relative w-full rounded-3xl shadow-elegant border border-border"
          />
        </div>
      </div>
    </section>
  );
}
