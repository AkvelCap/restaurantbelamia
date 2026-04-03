import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import courtyard from "@/assets/courtyard.jpg";
import { useLanguage } from "@/context/LanguageContext";

const srcs = [
  { src: food1, alt: "Traditional Macedonian skara" },
  { src: food2, alt: "Wood-fired pizza" },
  { src: food3, alt: "Signature steak" },
  { src: courtyard, alt: "Rustic inner courtyard" },
];

const SpecialtiesSection = () => {
  const { t } = useLanguage();
  const images = srcs.map((s, i) => ({ ...s, label: t.specialties.labels[i] }));

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-warm-gold text-sm font-sans tracking-[0.25em] uppercase mb-3">{t.specialties.tag}</p>
          <h2 className="section-title text-foreground mb-6">{t.specialties.title}</h2>
          <p className="text-muted-foreground font-sans leading-relaxed">{t.specialties.desc}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div key={img.alt} className="group relative overflow-hidden rounded-lg aspect-square">
              <img src={img.src} alt={img.alt} loading="lazy" width={800} height={800} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-deep-charcoal/0 group-hover:bg-deep-charcoal/40 transition-all duration-300 flex items-end">
                <span className="text-primary-foreground font-serif text-lg px-4 pb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
