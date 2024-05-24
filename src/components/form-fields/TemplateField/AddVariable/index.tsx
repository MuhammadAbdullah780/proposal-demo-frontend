import InputField from "@/components/form-fields/Input";
import { Button } from "@/components/ui/Button";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  toggleFunc?: (val?: boolean) => void;
};

const AddVariableSubForm = ({ toggleFunc }: Props) => {
  const { setValue, getValues, watch } = useFormContext();

  const handleAddVariable = () => {
    const variableValue = getValues("addVariableInputVal");

    // Pushing values to variables Array
    setValue("variables", [...getValues("variables"), variableValue]);

    // Pushing formatted values to Array
    setValue("variablesFormatted", [
      ...(getValues("variablesFormatted") || []),
      {
        id: String(Math.random() * 1000),
        label: `${getValues("variables")?.at(-1)}}`,
      },
    ]);

    // Again setting the variable value to undefined
    setValue("addVariableInputVal", undefined);

    //
    toggleFunc?.(false);
  };

  return (
    <div className="flex justify-center w-full items-center gap-3">
      <InputField
        label=""
        name="addVariableInputVal"
        placeholder="Enter Variable Name"
        wrapperClassName="flex-1 !space-y-0"
      />
      <Button
        disabled={!watch("addVariableInputVal")}
        onClick={handleAddVariable}>
        Confirm
      </Button>
    </div>
  );
};

export default AddVariableSubForm;
