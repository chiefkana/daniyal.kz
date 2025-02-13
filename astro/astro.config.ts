import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

import vercel from "@astrojs/vercel/static";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page: any) => SITE.showArchives || !page.endsWith("/archives"),
    }),
    vue({
      include: ["**/*.vue"],
    }),
  ],

  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },

  vite: {
    envPrefix: "VITE_",
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  scopedStyleStrategy: "where",

  experimental: {
    contentLayer: true,
  },

  output: "static",
  adapter: vercel(),
});
