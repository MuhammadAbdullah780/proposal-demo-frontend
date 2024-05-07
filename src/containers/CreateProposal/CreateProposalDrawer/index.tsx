"use client";
import { generateProposal } from "@/actions/proposal";
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
import { referenceTypeOptions } from "@/constants/selectOptions";
import { useFormWithAction } from "@/hooks/useFormWithAction";
import { useState } from "react";
import { z } from "zod";
import { useProposalContext } from "../context";
import { createProposalSchema } from "./schema";

const ProposalFormDrawer = () => {
  // States
  const [open, setOpen] = useState<boolean>(false);

  // Vars
  const formId = "generate-proposal-form";

  // Context
  const { setText } = useProposalContext();

  // Hooks
  const { form, isPending, submitFunc } = useFormWithAction<
    z.infer<typeof createProposalSchema>
  >({
    action: generateProposal,
    schema: createProposalSchema,
    onSuccess(res) {
      console.log("ON__SUCCESS_RESPONSE___", res);
      setText(res?.data?.aiMessage);
      setOpen(false);
    },
  });

  return (
    <>
      <Button onClick={() => setOpen(true)}>Generate Proposal</Button>
      <Sheet modal open={open} onOpenChange={() => setOpen(!open)}>
        <SheetContent className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle>Create Proposal</SheetTitle>
            <SheetDescription>
              Create an Automated Proposal with the help of AI along with
              specified {"user's"} context
            </SheetDescription>
          </SheetHeader>
          {/* CONTENT */}
          <RhfWrapper
            form={form}
            formProps={{
              id: formId,
              className: "flex flex-1 flex-col gap-4",
            }}
            submitFunc={submitFunc}>
            <SelectField
              name="referenceType"
              label="Reference Type"
              placeholder="Add Reference Type"
              items={referenceTypeOptions}
              helperText="Person's Reference key"
            />
            <InputField
              label="Project title"
              name="projectTitle"
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
          </RhfWrapper>
          <SheetFooter>
            <Button form={formId} className="flex gap-2" type="submit">
              {isPending && <Spinner spinnerColor="white" size="extra_small" />}
              {isPending ? "Generating" : "Generate"}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProposalFormDrawer;
