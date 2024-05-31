import { DbCommon } from ".";

export type Prompt = DbCommon & {
  title: string;
  template: string;
  templateInRichText: string;
  variables: string[];
};
