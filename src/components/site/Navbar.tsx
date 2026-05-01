import { useEffect, useState } from "react";
import logo from "@/assets/glam-decor-logo.jpg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Glam Décor" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl font-bold text-primary">Glam Décor</span>
        </a>
        <a
          href="#order"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-rose text-primary-foreground px-5 py-2.5 text-sm font-bold shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
        >
          اطلب الآن
        </a>
      </div>
    </header>
  );
}
