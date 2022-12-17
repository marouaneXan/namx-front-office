import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
i18next.use(HttpBackend).use(LanguageDetector).use(initReactI18next);
i18n.use(initReactI18next).init({
  fallbackLng: "fr",
  resources: {
    fr: {
      translations: require("./locales/fr/translation.json"),
    },
    en: {
      translations: require("./locales/en/translation.json"),
    },
  },
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["fr", "en"];

export default i18n;
