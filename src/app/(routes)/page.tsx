"use client";
import RhfWrapper from "@/components/common/RhfWrapper";
import RichTextField from "@/components/form-fields/RichText";
import { useFormWithAction } from "@/hooks/useFormWithAction";
import { z } from "zod";

const MainPage = () => {
  const form = useFormWithAction<{ sample: string }>({
    async action(data) {
      console.log(data, "DATA______");
    },
    schema: z.object({
      sample: z.string(),
    }),
    defaultValues: {
      sample: "",
    },
  });

  return (
    <RhfWrapper {...form}>
      <RichTextField
        label="Sample RichText Field"
        name="sample"
        helperText="This is Helper Text"
      />
    </RhfWrapper>
  );
};

export default MainPage;
