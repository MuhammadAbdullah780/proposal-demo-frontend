"use client";
import { useEffect, useState } from "react";
import { z } from "zod";

// Components
import FormDrawer from "@/components/common/FormDrawer";
import InputField from "@/components/form-fields/Input";
import SelectField from "@/components/form-fields/Select";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";

// Actions
import { fetchPrompts } from "@/actions/prompts";
import { getReferences } from "@/actions/referenceHistory";

// Constants
import { modalTypeOptions } from "@/constants/selectOptions";

// Hooks
import { useFormWithAction } from "@/hooks/useFormWithAction";
import { useModalState } from "@/hooks/useModalState";

// Context
import { usePromptContext } from "../context";

// Schema
import { createProposalSchema } from "./schema";

// Utils
import { camelToFormatted } from "@/utils/conversions";

// Types
import { SelectOption } from "@/types";
import { Prompt } from "@/types/prompt";
import { createSubmission } from "@/actions/submissions";

const ProposalFormDrawer = () => {
  // Use States
  const [references, setReferences] = useState<SelectOption | null>(null);
  const [prompt, setPrompt] = useState<Prompt[] | null>(null);

  // Vars
  const formId = "generate-proposal-form";
  const promptOptions = prompt?.map((item, i) => {
    return {
      label: item?.title,
      value: item?._id,
    };
  });

  // Context
  const { setText } = usePromptContext();

  // Hooks
  const { currentValue, handleChange } = useModalState();
  const { form, isPending, submitFunc } = useFormWithAction<
    z.infer<typeof createProposalSchema>
  >({
    action: createSubmission,
    schema: createProposalSchema,
    onSuccess(res) {
      setText(res?.data?.aiMessage);
      handleChange(false);
    },
  });

  // Extractions
  const { getValues, setValue, watch } = form;

  // Functions
  const handleDynamicFields = () => {
    console.log("CHALA___________");

    // vars
    const templateId = getValues("promptType");
    const targetedRecord = prompt?.find((item) => item?._id === templateId);

    // Formats the variables
    const formattedVariables =
      targetedRecord?.variables?.map((item) => {
        return { [item]: "" };
      }) || [];

    console.log(formattedVariables, "FORMATTED_VARIABLES____");

    // Setting the value
    setValue("templateVariables", formattedVariables);

    console.log("FORM____VALUES____", getValues());
  };

  // Use Effects
  useEffect(() => {
    const fetch = async () => {
      const data = await getReferences();

      const formattedOptions = await data?.data.map((item: any) => {
        return {
          label: item?.reference_type,
          value: item?.reference_type,
        };
      });
      setReferences(formattedOptions);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchPrompts();

      setPrompt(data?.data);
    };
    fetch();
  }, []);

  console.log(getValues(), "FORM________VALUES");

  return (
    <>
      <FormDrawer
        description="Generate a proposal with the help of following form values."
        form={form}
        formId={formId}
        onChange={handleChange}
        submitBtnText="Generate"
        loading={isPending}
        open={currentValue}
        submitFunc={submitFunc}
        title="Generate Proposal"
        triggerBtn={
          <Button onClick={() => handleChange(true)}>Generate Proposal</Button>
        }
        sheetContentClassName="!max-w-[500px]">
        <SelectField
          name="referenceType"
          label="Reference Type"
          placeholder="Add Reference Type"
          items={references || []}
          helperText="Person's Reference key"
        />
        <SelectField
          name="llm"
          label="Modal Type"
          placeholder="Enter Modal Type"
          items={modalTypeOptions}
          helperText="Choose Language model for generating the proposal."
        />
        <SelectField
          name="promptType"
          label="Prompt Type"
          onAfterChange={handleDynamicFields}
          placeholder="Enter Prompt Type"
          items={promptOptions || []}
          helperText="Choose Prompt Type"
        />
        {!!(watch("templateVariables") || [])?.length && (
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold">Additional Fields</p>
            <Separator className="" />
            {(watch("templateVariables") || [])?.map((item, i) => {
              console.log(
                {
                  item,
                  getValues: getValues("templateVariables"),
                },
                "GET__VALUES___",
              );

              console.log(
                `templateVariables.${i}.${Object.keys(item)[0]}`,
                "FIELD____NAME____",
              );

              return (
                <InputField
                  key={i}
                  label={camelToFormatted(Object.keys(item)[0] || "")}
                  name={`templateVariables.${i}.${Object.keys(item)[0]}`}
                />
              );
            })}
          </div>
        )}
      </FormDrawer>
    </>
  );
};

export default ProposalFormDrawer;
