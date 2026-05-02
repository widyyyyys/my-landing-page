import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { CounterStrip } from "@/components/site/CounterStrip";
import { ProductDetails } from "@/components/site/ProductDetails";

import { Gallery } from "@/components/site/Gallery";
import { OrderForm } from "@/components/site/OrderForm";
import { Footer } from "@/components/site/Footer";
import { StickyCTA } from "@/components/site/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glam Décor — طقم ديكور إسلامي فاخر | الدفع عند الاستلام" },
      {
        name: "description",
        content:
          "طقم ديكور حائط إسلامي 3 قطع MDF — الله، الكعبة، محمد ﷺ. خط عربي ذهبي بارز. توصيل لكل الجزائر مع الدفع عند الاستلام.",
      },
      { property: "og:title", content: "Glam Décor — ديكور إسلامي فاخر" },
      {
        property: "og:description",
        content: "طقم 3 لوحات MDF فاخر بخط عربي ذهبي. توصيل 24-48 ساعة لكل الجزائر.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <CounterStrip />
        <Gallery />

        <ProductDetails />
        <OrderForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
