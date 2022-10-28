import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import m2dx from "astro-m2dx";
import { defineConfig } from "astro/config";

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  frontmatter: true,
};

export default defineConfig({
  output: "server",
  site: "https://www.ralrom.com",
  integrations: [
    mdx(),
    tailwind(),
    preact(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [[m2dx, m2dxOptions]],
  },
});
