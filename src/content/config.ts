import { defineCollection, z } from "astro:content";

const recetas = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    ingredients: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});


export const recetario = {recetas}