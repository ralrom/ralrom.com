import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import m2dx from "astro-m2dx";
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

// const m2dxOptions = {
//   frontmatter: true,
// };

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.ralrom.com/",
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
  // markdown: {
  // extendDefaultPlugins: true,
  // remarkPlugins: [[m2dx, m2dxOptions]],
  // },
  adapter: netlify(),
});
