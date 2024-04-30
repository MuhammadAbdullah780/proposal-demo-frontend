import { ReferenceType } from "@/types/enums";

export class ApiPaths {
  static ADD_REFERENCE = "/reference-history/create";
  static UPDATE_REFERENCE = (referenceType: ReferenceType) =>
    `/reference-history/${referenceType}/update`;
  static CREATE_PROPOSAL = "/submissions/proposal/create";
}
