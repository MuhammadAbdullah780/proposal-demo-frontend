export interface VariableOption {
  id: string;
  label: string;
}

export interface VariableValue {
  id: string;
  value: string;
}

export type SelectOption = { label: string; value: string }[];

export type DbCommon = {
  created_at: string;
  updated_at: string;
  __v: number;
  _id: string;
};
