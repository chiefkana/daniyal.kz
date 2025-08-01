import en from "./translations/en";
import ru from "./translations/ru";
import kz from "./translations/kz";

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
