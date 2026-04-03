import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <img src={heroBg} alt="Restaurant Belamia rustic courtyard" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-deep-charcoal/60" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-warm-gold text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-4">{t.hero.tagline}</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-tight mb-6">
          {t.hero.heading1}<br /><span className="italic">{t.hero.heading2}</span>
        </h1>
        <p className="text-primary-foreground/80 font-sans text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">{t.hero.sub}</p>
        <a href="#reservations" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm uppercase tracking-widest px-8 py-4 rounded transition-all duration-300 hover:shadow-lg hover:scale-105">
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
