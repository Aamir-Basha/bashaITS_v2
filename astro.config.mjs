import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL ?? "https://www.bashaitsolutions.com";

export default defineConfig({
  site,
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
