"use client";
import { createReferenceHistory } from "@/actions/referenceHistory";
import RhfWrapper from "@/components/common/RhfWrapper";
import Spinner from "@/components/common/Spinner";
import SelectField from "@/components/form-fields/Select";
import TextAreaField from "@/components/form-fields/TextArea";
import { Button } from "@/components/ui/Button";
import { referenceTypeOptions } from "@/constants/selectOptions";
import { useFormWithAction } from "@/hooks/useFormWithAction";
import { z } from "zod";
import { addReferenceFormSchema } from "../schema";

const AddRefernceForm = () => {
  const { form, isPending, submitFunc } = useFormWithAction<
    z.infer<typeof addReferenceFormSchema>
  >({
    schema: addReferenceFormSchema,
    action: createReferenceHistory,
  });

  return (
    <RhfWrapper form={form} submitFunc={submitFunc}>
      <SelectField
        name="reference_type"
        label="Reference Type"
        placeholder="Add Reference Type"
        items={referenceTypeOptions}
        helperText="Person's Reference key"
      />
      <TextAreaField
        label="Information"
        name="text"
        placeholder="Enter Person's Information"
        helperText="Person's Information with respect to the following reference type"
        textAreaProps={{
          rows: 5,
        }}
      />
      <Button type="submit" className="flex gap-2">
        {isPending && <Spinner spinnerColor="white" size="extra_small" />}
        Create Reference
      </Button>
    </RhfWrapper>
  );
};

export default AddRefernceForm;
