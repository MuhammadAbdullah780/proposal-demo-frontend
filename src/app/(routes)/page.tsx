"use client";
import RhfWrapper from "@/components/common/RhfWrapper";
import TemplateField from "@/components/form-fields/TemplateField";
import { Button } from "@/components/ui/Button";
import { useFormWithAction } from "@/hooks/useFormWithAction";
import React from "react";
import { z } from "zod";

type Props = {};

const schema = z.object({
  variables: z.array(z.string()).min(5),
  value_in_text: z.string().min(10),
  value_in_html: z.string(),
  variablesFormatted: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
    }),
  ),
});

const MainPage = (props: Props) => {
  const { form } = useFormWithAction<z.infer<typeof schema>>({
    async action(data) {},
    schema,
    defaultValues: {
      variables: [],
      value_in_html: "",
      value_in_text: "",
      variablesFormatted: [],
    },
  });

  return (
    <div className="flex flex-col gap-12">
      <RhfWrapper
        form={form}
        submitFunc={async (data) => {
          console.log(data, "ONSUBMIT___DATA____FORM");
        }}>
        <TemplateField
          label="Proper Field Label"
          identifierForVariables="variables"
          identifierForHTML="value_in_html"
          identifierForText="value_in_text"
          helperText="This is Helper Text"
        />
        <Button type="submit">Submit</Button>
      </RhfWrapper>
    </div>
  );
};

export default MainPage;
