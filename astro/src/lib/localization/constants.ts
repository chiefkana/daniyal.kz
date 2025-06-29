import en from "./translations/en.json";
import ru from "./translations/ru.json";
import kz from "./translations/kz.json";

import enR from "./routes/en.json";
import ruR from "./routes/ru.json";
import kzR from "./routes/kz.json";

export const languages = {
  ru: "Русский",
  kz: "Қазақша",
  en: "English",
};

export const defaultLang = "ru";

export const ui = {
  ru,
  kz,
  en,
} as const;

export const routes = {
  ru: ruR,
  kz: kzR,
  en: enR,
} as const;
