import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FooterSection = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-deep-charcoal text-primary-foreground">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-primary-foreground mb-2">{t.footer.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3">
              <MapPin size={20} className="text-warm-gold" />
              <p className="font-sans text-sm text-primary-foreground/80 leading-relaxed">Goce Delcev 108<br />Tetovo 1220, North Macedonia</p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
              <Phone size={20} className="text-warm-gold" />
              <p className="font-sans text-sm text-primary-foreground/80">044 331 332</p>
              <div className="flex items-start gap-2 mt-1">
                <Clock size={16} className="text-warm-gold mt-0.5" />
                <p className="font-sans text-sm text-primary-foreground/80 leading-relaxed">{t.footer.hours}</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
              <p className="font-sans text-sm text-primary-foreground/60 uppercase tracking-wide">{t.footer.follow}</p>
              <div className="flex gap-4">
                <a href="#" className="text-primary-foreground/70 hover:text-warm-gold transition-colors" aria-label="Facebook"><Facebook size={22} /></a>
                <a href="#" className="text-primary-foreground/70 hover:text-warm-gold transition-colors" aria-label="Instagram"><Instagram size={22} /></a>
                <a href="#" className="text-primary-foreground/70 hover:text-warm-gold transition-colors" aria-label="Google">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6">
        <p className="text-center font-sans text-xs text-primary-foreground/40">{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
