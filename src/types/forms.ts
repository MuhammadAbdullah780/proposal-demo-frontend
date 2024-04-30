export type UseFormState = {
  response: Record<string, any>;
  fields: Record<string, any>;
  isError: boolean;
  isSuccess: boolean;
  noOfAttempts: number;
};
