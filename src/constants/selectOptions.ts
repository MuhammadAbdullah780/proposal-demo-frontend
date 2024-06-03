import { ModalType, ReferenceType } from "@/types/enums";

export const referenceTypeOptions = [
  {
    label: "Yousuf Qadri Executive",
    value: ReferenceType.YOUSUF_QADRI_EXECUTIVE,
  },
  {
    label: "Kumail Raza Executive",
    value: ReferenceType.KUMAIL_RAZA_EXECUTIVE,
  },
  {
    label: "Amaan Nadeem Executive",
    value: ReferenceType.AMAAN_NADEEM_EXECUTIVE,
  },
  {
    label: "Company",
    value: ReferenceType.COMPANY,
  },
];

export const modalTypeOptions = [
  {
    label: "Chat GPT",
    value: ModalType.CHAT_GPT,
  },
  {
    label: "Google Gemini",
    value: ModalType.GEMINI,
  },
];
