import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MenuCTASection = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section id="menu" className="section-padding bg-deep-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-warm-gold text-sm font-sans tracking-[0.25em] uppercase mb-3">{t.menuCta.tag}</p>
          <h2 className="section-title text-primary-foreground mb-6">{t.menuCta.title}</h2>
          <p className="text-primary-foreground/70 font-sans leading-relaxed mb-10">{t.menuCta.desc}</p>
          <button onClick={() => setShowModal(true)} className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm uppercase tracking-widest px-10 py-4 rounded transition-all duration-300 hover:shadow-lg hover:scale-105">
            {t.menuCta.btn}
          </button>
        </div>
      </section>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-charcoal/70 backdrop-blur-sm p-4">
          <div className="bg-background rounded-lg max-w-lg w-full p-8 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close"><X size={20} /></button>
            <h3 className="font-serif text-2xl font-medium text-foreground mb-4">{t.menuCta.modalTitle}</h3>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">{t.menuCta.modalDesc}</p>
            <div className="space-y-3 text-foreground font-sans">
              {t.menuCta.items.map((item) => (
                <div key={item} className="py-2 border-b border-border last:border-0">{item}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCTASection;
