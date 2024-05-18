// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const bookCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      subtitle: z.string().optional(),
      olid: z.string(),
      tags: z.array(z.string()).optional(),
      page_current: z.number(),
      page_total: z.number(),
      affiliate_link: z.string(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  books: bookCollection,
};
