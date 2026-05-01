import logo from "@/assets/glam-decor-logo.jpg";

export function Footer() {
  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="container mx-auto px-4 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Glam Décor" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl font-bold text-primary">Glam Décor</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Glam Décor. كل الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
