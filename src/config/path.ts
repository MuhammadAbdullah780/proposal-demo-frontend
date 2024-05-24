export class ApiPaths {
  /**
   * Reference API's
   */
  static ADD_REFERENCE = "/reference-history/create";
  static UPDATE_REFERENCE = (referenceType: string): string =>
    `/reference-history/${referenceType}/update`;
  static LIST_REFERENCE_TYPES = "/reference-history/list-references";
  static FETCH_SPECIFIC_REFERENCE = (id: string) => `/reference-history/${id}`;
  static FETCH_REFERENCES = "/reference-history";
  static DELETE_REFERENCE = (id: string) => `/reference-history/${id}/delete`;

  /**
   * Submissions API's
   */
  static CREATE_PROPOSAL = "/submissions/proposal/create";
  static FETCH_SUBMISSIONS = "/submissions/";

  /**
   * Prompt API's
   */
  static CREATE_PROMPT_TEMPLATE = "/prompts/create";
  static FETCH_PROMPTS = "/prompts";
}
