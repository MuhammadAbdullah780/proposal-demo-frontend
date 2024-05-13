"use client";
import { useEffect, useState } from "react";
import { z } from "zod";

// Components
import RhfWrapper from "@/components/common/RhfWrapper";
import Spinner from "@/components/common/Spinner";
import InputField from "@/components/form-fields/Input";
import SelectField from "@/components/form-fields/Select";
import TextAreaField from "@/components/form-fields/TextArea";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/Sheet";

// Actions
import { generateProposal } from "@/actions/proposal";

// Constants
import { referenceTypeOptions } from "@/constants/selectOptions";

// Hooks
import { useFormWithAction } from "@/hooks/useFormWithAction";
import { useModalState } from "@/hooks/useModalState";

// Context
import { useProposalContext } from "../context";

// Schema
import { createProposalSchema } from "./schema";
import FormDrawer from "@/components/common/FormDrawer";
import { getReferences } from "@/actions/referenceHistory";

const ProposalFormDrawer = () => {
  const [references, setReferences] = useState<
    { label: string; value: string }[] | null
  >(null);

  // Vars
  const formId = "generate-proposal-form";

  // Context
  const { setText } = useProposalContext();

  // Hooks
  const { currentValue, handleChange } = useModalState();
  const { form, isPending, submitFunc } = useFormWithAction<
    z.infer<typeof createProposalSchema>
  >({
    action: generateProposal,
    schema: createProposalSchema,
    onSuccess(res) {
      setText(res?.data?.aiMessage);
      handleChange(false);
    },
  });

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
          items={[
            {
              label: "Chat GPT",
              value: "gpt",
            },
            {
              label: "Google Gemini",
              value: "gemini",
            },
          ]}
          helperText="Choose Language model for generating the proposal."
        />
        <InputField
          label="Project title"
          name="projectTitle"
          placeholder="Enter Project Title"
          helperText="Project title for your proposal"
          inputProps={{ placeholder: "Enter Project Title" }}
        />
        <TextAreaField
          label="Project Description"
          name="projectDescription"
          placeholder="Enter Project Description"
          helperText="Project Description for your proposal"
          textAreaProps={{
            rows: 5,
          }}
        />
      </FormDrawer>
    </>
  );
};

export default ProposalFormDrawer;
