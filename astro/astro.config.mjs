// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [vue()],

  i18n: {
    locales: ["ru", "en", "kz"], // Locales you want to support
    defaultLocale: "ru", // Default locale (fallback)

    routing: {
      prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    },
  },
});