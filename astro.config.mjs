import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.ralrom.com/",
  image: {
    domains: ["covers.openlibrary.org"],
  },
  integrations: [
    mdx(),
    icon({
      include: {
        mdi: ["instagram", "youtube", "twitter"],
        cib: ["tiktok"],
      },
    }),
    tailwind(),
    preact(),
    sitemap(),
  ],
  adapter: netlify(),
});
