import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import m2dx from "astro-m2dx";
import { defineConfig } from "astro/config";

/** @type {import('astro-m2dx').Options} */
import sitemap from "@astrojs/sitemap";
const m2dxOptions = {
  frontmatter: true,
};

// https://astro.build/config
export default defineConfig({
  site: "https://www.ralrom.com",
  integrations: [mdx(), tailwind(), preact(), sitemap()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [[m2dx, m2dxOptions]],
  },
});
