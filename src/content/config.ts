// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      summary: z.string(),
      title: z.string(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const artworkCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      medium: z.string().optional(),
      draft: z.boolean().optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  artwork: artworkCollection,
};
