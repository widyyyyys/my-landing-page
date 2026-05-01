export function CounterStrip() {
  return (
    <section className="py-12 bg-gradient-rose text-primary-foreground">
      <div className="container mx-auto px-4 grid grid-cols-2 gap-6 text-center">
        <div>
          <div className="text-5xl md:text-6xl font-bold">69</div>
          <div className="mt-2 text-sm md:text-base opacity-90">ولاية نوصل إليها</div>
        </div>
        <div className="border-r border-primary-foreground/30">
          <div className="text-5xl md:text-6xl font-bold">48h</div>
          <div className="mt-2 text-sm md:text-base opacity-90">مدة التوصيل القصوى</div>
        </div>
      </div>
    </section>
  );
}
