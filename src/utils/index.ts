export const isCamelCase = (input: string): boolean => {
  const camelCaseRegex = /^[a-z]+([A-Z][a-z]*)*$/;
  return camelCaseRegex.test(input);
};
