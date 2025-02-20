// src/core/hooks/useLocale.ts
import { ref } from "vue";

export type Locales = "ru" | "kk" | "en";

const localeCookieName = "locale";

// Helper functions for cookies
function getCookie(cname: string): string {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length);
    }
  }
  return "";
}

function setCookie(cname: string, cvalue: string, exdays: number = 1): void {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

// --- Reactive Locale Store ---
const locale = ref<Locales>("ru");

// Initialize locale from cookie if available
if (getCookie(localeCookieName).length > 0) {
  locale.value = getCookie(localeCookieName) as Locales;
} else {
  setCookie(localeCookieName, locale.value, 12);
}

// The composable returns a reactive locale, plus a setter that updates cookie and the ref.
export const useLocale = () => {
  const setLocale = (newLocale: Locales) => {
    setCookie(localeCookieName, newLocale, 12);
    locale.value = newLocale;
  };

  return { locale, setLocale };
};
