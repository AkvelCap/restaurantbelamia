import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

const ReservationSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", guests: "", date: "", time: "" });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.reservation.success);
    setForm({ name: "", email: "", phone: "", guests: "", date: "", time: "" });
  };

  const inputClass = "w-full bg-background border border-border rounded px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all";

  return (
    <section id="reservations" className="section-padding bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-warm-gold text-sm font-sans tracking-[0.25em] uppercase mb-3">{t.reservation.tag}</p>
          <h2 className="section-title text-foreground mb-4">{t.reservation.title}</h2>
        </div>
        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-10 shadow-sm space-y-5">
          <input type="text" placeholder={t.reservation.name} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input type="email" placeholder={t.reservation.email} required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            <input type="tel" placeholder={t.reservation.phone} required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <input type="number" placeholder={t.reservation.guests} min={1} max={20} required value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass} />
            <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
            <input type="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputClass} />
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            {t.reservation.btn}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
