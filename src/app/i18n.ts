import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './locale/en/en.json'
import deJSON from './locale/de/de.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    de: { ...deJSON },
  },
  lng: "en",
});