// src/plugins/i18n.ts
import { createI18n } from "vue-i18n";
import en from "../translations/en";
import kz from "../translations/kz";
import ru from "../translations/ru";

const i18n = createI18n({
  legacy: false, // Use the Composition API
  locale: "ru-RU", // Set the initial locale dynamically
  fallbackLocale: "kk-KZ", // Fallback to English if a translation is missing
  messages: {"en-US": en, "ru-RU": ru, "kk-KZ": kz},
});

export default i18n;
