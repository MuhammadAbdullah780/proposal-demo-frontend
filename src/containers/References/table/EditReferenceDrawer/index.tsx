"use client";
import { MdEdit } from "react-icons/md";
import { z } from "zod";

// Components
import FormDrawer from "@/components/common/FormDrawer";
import RichTextField from "@/components/form-fields/RichText";
import SelectField from "@/components/form-fields/Select";
import { Button } from "@/components/ui/Button";

// Actions
import { updateReference } from "@/actions/referenceHistory";

// Hooks
import { useFormWithAction } from "@/hooks/useFormWithAction";
import { useModalState } from "@/hooks/useModalState";

// Schemas
import { editReferenceFormSchema } from "./schema";

type Props = {
  reference_type: string;
  text: string;
  rich_text: string;
  referenceTypeListing: {
    label: string;
    value: string;
  }[];
  id: string;
};

const EditReferenceDrawer = ({
  reference_type,
  referenceTypeListing,
  rich_text,
  text,
}: Props) => {
  const formId = "edit-reference-form";

  // Hooks
  const { currentValue, handleChange } = useModalState();
  const { submitFunc, form, isPending } = useFormWithAction<
    z.infer<typeof editReferenceFormSchema>
  >({
    action: updateReference,
    schema: editReferenceFormSchema,
    defaultValues: {
      reference_type,
      rich_text,
      text,
    },
    onSuccess() {
      handleChange(false);
    },
  });

  return (
    <FormDrawer
      formId={formId}
      sheetContentClassName="!max-w-4xl"
      form={form}
      submitFunc={submitFunc}
      title="Edit Reference"
      open={currentValue}
      onChange={handleChange}
      triggerBtn={
        <Button
          onClick={() => handleChange(true)}
          variant="secondary"
          size="icon">
          <MdEdit />
        </Button>
      }
      loading={isPending}
      submitBtnText="Edit Reference"
      description="Edit specific User's Reference.">
      <SelectField
        items={referenceTypeListing}
        // disabled={true}
        label="Reference Type"
        helperText="Person's Reference key"
        name="reference_type"
        placeholder="Add Reference Type"
        wrapperClassName="max-w-sm w-full"
      />
      <RichTextField
        label="Information"
        name="text"
        richTextFieldName="rich_text"
        helperText="Person's Information with respect to the following reference type"
      />
    </FormDrawer>
  );
};

export default EditReferenceDrawer;
