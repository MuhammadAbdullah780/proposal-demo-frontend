"use client";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Components
import RhfWrapper from "@/components/common/RhfWrapper";
import Spinner from "@/components/common/Spinner";
import InputField from "@/components/form-fields/Input";
import RichTextField from "@/components/form-fields/RichText";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Seperator";

// Actions
import { createReferenceHistory } from "@/actions/referenceHistory";

// Hooks
import { useFormWithAction } from "@/hooks/useFormWithAction";

// Schemas
import { addReferenceFormSchema } from "../schema";

const AddRefernceForm = () => {
  // Hooks
  const router = useRouter();
  const { form, isPending, submitFunc } = useFormWithAction<
    z.infer<typeof addReferenceFormSchema>
  >({
    schema: addReferenceFormSchema,
    action: createReferenceHistory,
    async onSuccess() {
      router.push("/reference");
    },
  });

  return (
    <RhfWrapper form={form} submitFunc={submitFunc}>
      <InputField
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
      <Separator className="my-4 w-full" />
      <div className="flex items-center justify-end gap-3 w-full">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit" className="flex gap-2">
          {isPending && <Spinner spinnerColor="white" size="extra_small" />}
          Create Reference
        </Button>
      </div>
    </RhfWrapper>
  );
};

export default AddRefernceForm;
