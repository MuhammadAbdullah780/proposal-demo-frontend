import { isCamelCase } from ".";

export const camelToFormatted = (camelCaseString: string) => {
  return isCamelCase(camelCaseString)
    ? camelCaseString
        .replace(/([a-z])([A-Z])|([A-Z])([A-Z][a-z])/g, "$1 $2")
        .replace(/^./, (str) => str.toUpperCase())
    : camelCaseString;
};
