import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEn from "./locales/en/translation.json";
import translationPt from "./locales/pt/translation.json";

// Detectar idioma da URL ou do navegador
const getLanguageFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  
  // Se tem parâmetro na URL, usa ele
  if (urlLang) {
    return urlLang;
  }
  
  // Caso contrário, detecta do navegador
  const browserLang = navigator.language.split('-')[0]; // 'pt-BR' -> 'pt'
  return ['pt', 'en'].includes(browserLang) ? browserLang : 'pt';
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: getLanguageFromURL(),
    fallbackLng: "pt",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      pt: {
        translations: translationPt,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
    
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    }
  });

export default i18n;