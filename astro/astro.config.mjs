// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    envPrefix: "VITE_"
  },

  integrations: [vue({appEntrypoint: "/src/pages/_vue", devtools: { launchEditor: "code" },
})],

  i18n: {
    locales: ["ru-RU", "en-US", "kk-KZ"], // Locales you want to support
    defaultLocale: "ru-RU", // Default locale (fallback)

    routing: {
      prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    },
  },
});