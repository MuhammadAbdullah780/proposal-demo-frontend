import { useState } from "react";

export const useModalState = () => {
  const [state, setState] = useState<boolean>(false);

  const handleChange = (val: boolean = !state) => {
    val !== state && setState(val);
  };

  return {
    handleChange,
    currentValue: state,
  };
};
