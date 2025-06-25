import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import navbarLt from './locales/lt/navbar.json';
import navbarEn from './locales/en/navbar.json';
import heroLt from './locales/lt/hero.json';
import heroEn from './locales/en/hero.json';
import servicesLt from './locales/lt/services.json';
import servicesEn from './locales/en/services.json';
import contactLt from './locales/lt/contact.json';
import contactEn from './locales/en/contact.json';
import footerLt from './locales/lt/footer.json';
import footerEn from './locales/en/footer.json';

const resources = {
  lt: {
    navbar: navbarLt,
    hero: heroLt,
    services: servicesLt,
    contact: contactLt,
    footer: footerLt,
  },
  en: {
    navbar: navbarEn,
    hero: heroEn,
    services: servicesEn,
    contact: contactEn,
    footer: footerEn,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'lt',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    ns: ['navbar', 'hero', 'services', 'contact', 'footer'],
    defaultNS: 'navbar',
  });

export default i18n; 