import { z } from 'zod';

export const articleFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(100, 'Title must be at most 100 characters'),
  content: z.discriminatedUnion('type', [
    z.object({
      type: z.literal('draft'),
    }),
    z.object({
      type: z.literal('published'),
      description: z
        .string()
        .min(10, 'Description must be at least 10 characters')
        .max(1000, 'Description must be at most 1000 characters'),
      isNew: z.boolean().default(false).optional(),
    }),
  ]),
});

export type ArticleFormValues = z.infer<typeof articleFormSchema>;
