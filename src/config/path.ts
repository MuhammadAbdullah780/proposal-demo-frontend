export class ApiPaths {
  static ADD_REFERENCE = "/reference-history/create";
  static UPDATE_REFERENCE = (referenceType: string) =>
    `/reference-history/${referenceType}/update`;
  static CREATE_PROPOSAL = "/submissions/proposal/create";
  static LIST_REFERENCE_TYPES = "/reference-history/list-references";
  static FETCH_SPECIFIC_REFERENCE = (id: string) => `/reference-history/${id}`;
  static FETCH_REFERENCES = "/reference-history";
  static DELETE_REFERENCE = (id: string) => `/reference-history/${id}/delete`;
}
