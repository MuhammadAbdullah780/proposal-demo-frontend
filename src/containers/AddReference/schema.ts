import { ReferenceType } from "@/types/enums";
import { z } from "zod";

export const addReferenceFormSchema = z.object({
  reference_type: z.nativeEnum(ReferenceType),
  text: z.string().min(10).max(2000),
});
