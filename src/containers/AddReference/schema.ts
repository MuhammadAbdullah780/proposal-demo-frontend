import { z } from "zod";

export const addReferenceFormSchema = z.object({
  reference_type: z.string().min(3),
  text: z.string().min(10).max(2000),
  rich_text: z.string(),
});
