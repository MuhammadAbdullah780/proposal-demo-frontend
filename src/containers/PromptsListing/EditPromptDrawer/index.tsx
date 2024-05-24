import FormDrawer from "@/components/common/FormDrawer";
import InputField from "@/components/form-fields/Input";
import TemplateField from "@/components/form-fields/TemplateField";
import { Button } from "@/components/ui/Button";
import { useFormWithAction } from "@/hooks/useFormWithAction";
import { useModalState } from "@/hooks/useModalState";
import React from "react";
import { MdEdit } from "react-icons/md";
import { z } from "zod";

type Props = {};

const schema = z.object({});

const EditPromptDrawer = (props: Props) => {
  const { currentValue, handleChange } = useModalState();

  const { form, submitFunc, isPending } = useFormWithAction<
    z.infer<typeof schema>
  >({
    async action(data) {},
    schema,
    defaultValues: {},
    onSuccess(data) {
      console.log(data, "DATA________");
    },
  });

  return (
    <FormDrawer
      open={currentValue}
      onChange={handleChange}
      submitFunc={submitFunc}
      title="Edit Prompt Form"
      submitBtnText="Edit Prompt"
      sheetContentClassName="!p-5 !max-w-xl"
      triggerBtn={
        <Button
          onClick={() => handleChange(true)}
          size="icon"
          variant="secondary">
          <MdEdit />
        </Button>
      }
      form={form}
      formId="edit-prompt-form"
      description="This is the simple form through which the user can edit the specific prompt template">
      <InputField
        label="Prompt Title"
        helperText="Enter the title for Your Prompt"
        name="title"
        placeholder="Add Prompt Title"
        wrapperClassName="max-w-sm w-full"
      />
      <TemplateField
        identifierForHTML="promptInHTML"
        identifierForText="promptInText"
        identifierForVariables="variables"
        fieldClassName="w-full"
        helperText="Enter the LLM Prompt template with their specified variables."
        placeholder="Enter Prompt Template..."
      />
    </FormDrawer>
  );
};

export default EditPromptDrawer;
