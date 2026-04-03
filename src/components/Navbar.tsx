import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navAnchors = ["#home", "#about", "#menu", "#reservations", "#gallery", "#contact"] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = navAnchors.map((href, i) => ({
    label: Object.values(t.nav)[i],
    href,
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-charcoal/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="font-serif text-xl md:text-2xl font-semibold text-primary-foreground tracking-wider">
            Belamia
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-warm-gold text-sm font-medium tracking-wide uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center border border-primary-foreground/20 rounded overflow-hidden">
              <button
                onClick={() => setLang("mk")}
                className={`px-2 py-1 text-xs font-medium tracking-wide transition-colors duration-200 ${
                  lang === "mk"
                    ? "bg-warm-gold text-deep-charcoal"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                MK
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-xs font-medium tracking-wide transition-colors duration-200 ${
                  lang === "en"
                    ? "bg-warm-gold text-deep-charcoal"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-primary-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-deep-charcoal/95 backdrop-blur-sm`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-primary-foreground/80 hover:text-warm-gold text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
