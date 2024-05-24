"use client";
import { createPromptTemplate } from "@/actions/prompts";
import RhfWrapper from "@/components/common/RhfWrapper";
import Spinner from "@/components/common/Spinner";
import InputField from "@/components/form-fields/Input";
import RichTextField from "@/components/form-fields/RichText";
import TemplateField from "@/components/form-fields/TemplateField";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { useFormWithAction } from "@/hooks/useFormWithAction";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(5),
  variables: z.array(z.string()).min(1),
  promptInText: z.string().min(1),
  promptInHTML: z.string().min(1),
});

const CreatePromptForm = () => {
  // Hooks
  const router = useRouter();
  const { form, submitFunc, isPending } = useFormWithAction<
    z.infer<typeof schema>
  >({
    async action(data) {
      "use Server";
      await createPromptTemplate({
        template: data?.promptInText,
        templateInRichText: data?.promptInHTML,
        title: data?.title,
        variables: data?.variables,
      });

      redirect("/prompts");
    },
    schema,
    defaultValues: {
      variables: [],
      title: "",
    },
    onSuccess(data) {
      console.log(data, "DATA________");
    },
  });

  return (
    <RhfWrapper form={form} submitFunc={submitFunc}>
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
      <Separator className="my-4 w-full" />
      <div className="flex items-center justify-end gap-3 w-full">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit" className="flex gap-2">
          {isPending && <Spinner spinnerColor="white" size="extra_small" />}
          Create Prompt
        </Button>
      </div>
    </RhfWrapper>
  );
};

export default CreatePromptForm;
