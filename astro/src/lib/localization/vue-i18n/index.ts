// src/plugins/i18n.ts
import { createI18n } from "vue-i18n";
import en from "../translations/en.json";
import kz from "../translations/kz.json";
import ru from "../translations/ru.json";

type JSONMessage = { [key: string]: string };

const messages: JSONMessage | { [key: string]: JSONMessage } = {
  en,
  kz,
  ru,
};

// Function to get the initial locale from the URL or browser
function getInitialLocale() {
  // Example: Check URL for a locale parameter like ?lang=kz
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  if (langParam && messages[langParam]) {
    return langParam;
  }

  // Example: Check localStorage
  const storedLocale = localStorage.getItem("locale");
  if (storedLocale && messages[storedLocale]) {
    return storedLocale;
  }

  // Default to browser language if available and supported
  const browserLanguage = navigator.language.split("-")[0];
  if (messages[browserLanguage]) {
    return browserLanguage;
  }

  // Fallback to a default
  return "en";
}

const i18n = createI18n({
  legacy: false, // Use the Composition API
  locale: getInitialLocale(), // Set the initial locale dynamically
  fallbackLocale: "en", // Fallback to English if a translation is missing
  messages,
});

export default i18n;
