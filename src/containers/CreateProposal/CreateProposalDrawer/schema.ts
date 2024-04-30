import { ReferenceType } from "@/types/enums";
import { z } from "zod";

export const createProposalSchema = z.object({
  projectTitle: z.string(),
  projectDescription: z.string().min(5),
  referenceType: z.nativeEnum(ReferenceType),
});
