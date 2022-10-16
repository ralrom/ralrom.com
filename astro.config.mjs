import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import m2dx from "astro-m2dx";
import { defineConfig } from "astro/config";

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  frontmatter: true,
};

export default defineConfig({
  integrations: [mdx(), tailwind(), preact()],
  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    shikiConfig: {
      wrap: true,
    },
  },
});
