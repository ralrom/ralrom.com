import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.ralrom.com/",

  image: {
    domains: ["covers.openlibrary.org", "ralrom.com"],
  },

  integrations: [
    mdx(),
    icon({
      include: {
        mdi: ["instagram", "youtube", "twitter"],
        cib: ["tiktok"],
      },
    }),
    preact(),
    sitemap(),
  ],

  adapter: netlify({
    edgeMiddleware: true,
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
