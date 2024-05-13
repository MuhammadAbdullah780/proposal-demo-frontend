import { z } from "zod";

export const editReferenceFormSchema = z.object({
  text: z.string().min(10).max(2000),
  rich_text: z.string(),
  reference_type: z.string(),
});
