import { ModalType, ReferenceType } from "@/types/enums";
import { z } from "zod";

export const createProposalSchema = z.object({
  referenceType: z.string(),
  llm: z.nativeEnum(ModalType),
  promptType: z.string(),
  templateVariables: z.array(z.any()),
});
