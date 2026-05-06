import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "mk";

const translations = {
  en: {
    nav: { home: "Home", about: "About Us", menu: "Menu", reservations: "Reservations", gallery: "Gallery", contact: "Contact" },
    hero: {
      tagline: "Est. Tetovo",
      heading1: "welcome to",
      heading2: "Restaurant Belamia",
      sub: "A hidden gem in Tetovo where traditional charm and gastronomic experience merge in harmony. ✨",
      cta: "Book a Table",
    },
    specialties: {
      tag: "What we offer",
      title: "our specialties",
      desc: "We create with a lot of love and attention! Every dish on our menu—from authentic Macedonian barbecue to our signature steaks and pizzas—is carefully crafted to satisfy your senses.",
      labels: ["Authentic Skara", "Artisan Pizza", "Signature Steaks", "Our Courtyard"],
    },
    testimonials: {
      onGoogle: "on Google Reviews",
      reviews: [
        { text: "A beautiful hidden courtyard in the old part of town. The traditional skara is perfectly cooked, and the atmosphere feels right at home. Highly recommended!", author: "Марија К." },
        { text: "Best steaks in Tetovo, hands down. The staff is incredibly warm and welcoming. We keep coming back every weekend!", author: "Александар П." },
        { text: "The pizza is outstanding and the courtyard ambiance is magical on summer evenings. A true gem worth discovering.", author: "Elena M." },
      ],
    },
    menuCta: {
      tag: "Taste the tradition",
      title: "look at our menu",
      desc: "Here you can see our delicious, rich, and authentic menu! ✨",
      btn: "View Full Menu",
      modalTitle: "Our Menu",
      modalDesc: "Our full menu is available at the restaurant. Here's a preview of our signature categories:",
      items: ["🔥 Traditional Skara & BBQ", "🥩 Premium Steaks", "🍕 Wood-Fired Pizzas", "🥗 Fresh Salads", "🍰 Homemade Desserts", "🍷 Fine Wines & Cocktails"],
    },
    reservation: {
      tag: "Reserve your spot",
      title: "visit us & book on time!",
      name: "First and last name",
      email: "Email",
      phone: "Phone number",
      guests: "Guests",
      btn: "Book now!",
      success: "Reservation request sent! We'll confirm shortly.",
    },
    gallery: {
      tag: "Explore",
      title: "belamia through photos",
      desc: "See the rustic ambiance of our beautiful inner courtyard and dining areas. ✨",
    },
    footer: {
      title: "find us",
      follow: "Follow us",
      copyright: "© 2026 Restaurant Belamia | Web Design & Development by Akvel Capital",
      hours: "Mon – Sun: 09:00 – 23:00",
    },
  },
  mk: {
    nav: { home: "Дома", about: "За нас", menu: "Мени", reservations: "Резервации", gallery: "Галерија", contact: "Контакт" },
    hero: {
      tagline: "Основано во Тетово",
      heading1: "добредојдовте во",
      heading2: "Ресторан Беламија",
      sub: "Скриен бисер во Тетово каде традиционалниот шарм и гастрономското искуство се спојуваат во хармонија. ✨",
      cta: "Резервирај маса",
    },
    specialties: {
      tag: "Што нудиме",
      title: "наши специјалитети",
      desc: "Создаваме со многу љубов и внимание! Секое јадење од нашето мени—од автентична македонска скара до нашите стекови и пици—е внимателно подготвено за да ги задоволи вашите сетила.",
      labels: ["Автентична скара", "Занаетска пица", "Врвни стекови", "Наш двор"],
    },
    testimonials: {
      onGoogle: "на Google рецензии",
      reviews: [
        { text: "Прекрасен скриен двор во стариот дел на градот. Традиционалната скара е совршено подготвена, а атмосферата те носи дома. Силно препорачувам!", author: "Марија К." },
        { text: "Најдобри стекови во Тетово, без двоумење. Персоналот е неверојатно топол и гостопримлив. Продолжуваме да се враќаме секој викенд!", author: "Александар П." },
        { text: "Пицата е извонредна, а амбиентот на дворот е магичен во летните вечери. Вистински бисер вреден за откривање.", author: "Elena M." },
      ],
    },
    menuCta: {
      tag: "Вкусете ја традицијата",
      title: "погледнете го нашето мени",
      desc: "Овде можете да го видите нашето вкусно, богато и автентично мени! ✨",
      btn: "Погледни го менито",
      modalTitle: "Наше мени",
      modalDesc: "Целосното мени е достапно во ресторанот. Еве преглед на нашите категории:",
      items: ["🔥 Традиционална скара и BBQ", "🥩 Премиум стекови", "🍕 Пици на дрва", "🥗 Свежи салати", "🍰 Домашни десерти", "🍷 Фини вина и коктели"],
    },
    reservation: {
      tag: "Резервирајте го вашето место",
      title: "посетете нè и резервирајте навреме!",
      name: "Име и презиме",
      email: "Е-пошта",
      phone: "Телефонски број",
      guests: "Гости",
      btn: "Резервирај!",
      success: "Барањето за резервација е испратено! Ќе потврдиме наскоро.",
    },
    gallery: {
      tag: "Истражи",
      title: "беламија низ фотографии",
      desc: "Погледнете го рустикалниот амбиент на нашиот прекрасен внатрешен двор и простории за јадење. ✨",
    },
    footer: {
      title: "пронајдете нè",
      follow: "Следете нè",
      copyright: "© 2026 Ресторан Беламија | Веб дизајн и развој од Akvel Capital",
      hours: "Пон – Нед: 09:00 – 23:00",
    },
  },
} as const;

type Translations = (typeof translations)[Lang];

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
