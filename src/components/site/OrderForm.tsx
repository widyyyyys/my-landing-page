import { useMemo, useState } from "react";
import { z } from "zod";
import { wilayas } from "@/lib/wilayas";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "الاسم قصير جدًا").max(80),
  wilaya: z.string().min(1, "اختر الولاية"),
  commune: z.string().min(1, "اختر البلدية"),
  phone: z
    .string()
    .trim()
    .regex(/^(0)(5|6|7)[0-9]{8}$/, "رقم هاتف جزائري غير صحيح (مثال: 0555123456)"),
});

export function OrderForm() {
  const [name, setName] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const communes = useMemo(
    () => wilayas.find((w) => w.name === wilaya)?.communes ?? [],
    [wilaya],
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, wilaya, commune, phone });
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);
    setName("");
    setWilaya("");
    setCommune("");
    setPhone("");
  };

  return (
    <section id="order" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-6 md:p-10 shadow-elegant">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-success/15 text-success px-4 py-1.5 text-xs font-bold mb-3">
              ✓ الدفع عند الاستلام
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">أكمل طلبك الآن</h2>
            <p className="mt-2 text-muted-foreground">
              املأ المعلومات وسنتصل بك لتأكيد الطلب خلال ساعات.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-foreground mb-1.5">الاسم الكامل</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                placeholder="مثال: أحمد بن علي"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-foreground mb-1.5">الولاية</label>
                <select
                  value={wilaya}
                  onChange={(e) => {
                    setWilaya(e.target.value);
                    setCommune("");
                  }}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">اختر الولاية</option>
                  {wilayas.map((w) => (
                    <option key={w.code} value={w.name}>
                      {w.code} — {w.name}
                    </option>
                  ))}
                </select>
                {errors.wilaya && <p className="mt-1 text-xs text-destructive">{errors.wilaya}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-1.5">البلدية</label>
                <select
                  value={commune}
                  onChange={(e) => setCommune(e.target.value)}
                  disabled={!wilaya}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                >
                  <option value="">{wilaya ? "اختر البلدية" : "اختر الولاية أولًا"}</option>
                  {communes.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.commune && <p className="mt-1 text-xs text-destructive">{errors.commune}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-1.5">رقم الهاتف</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                maxLength={10}
                placeholder="0555123456"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                dir="ltr"
              />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rose text-primary-foreground px-8 py-4 text-base font-bold shadow-elegant hover:shadow-gold transition-all hover:-translate-y-0.5 disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> جاري الإرسال...
                </>
              ) : (
                <>تأكيد الطلب — 3900 دج</>
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              لن نشارك معلوماتك مع أي طرف ثالث.
            </p>
          </form>
        </div>
      </div>

      {success && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setSuccess(false)}
        >
          <div
            className="bg-card rounded-3xl p-8 max-w-md text-center shadow-elegant border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto h-16 w-16 rounded-full bg-success/15 flex items-center justify-center text-success mb-4">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">تم استلام طلبك!</h3>
            <p className="mt-2 text-muted-foreground">
              شكرًا لك. سنتصل بك خلال ساعات لتأكيد التوصيل والدفع عند الاستلام.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-rose text-primary-foreground px-6 py-3 text-sm font-bold shadow-soft hover:shadow-elegant"
            >
              حسنًا
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
