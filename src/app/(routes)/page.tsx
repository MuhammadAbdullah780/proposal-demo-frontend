"use client";
import SelectField from "@/components/form-fields/Select";
import TextAreaField from "@/components/form-fields/TextArea";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/ui/Form";
import { ReferenceType } from "@/types/enums";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { action } from "./server";

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const form = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      await action();
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <SelectField
          name="reference_type"
          label="Reference Type"
          placeholder="Add Reference Type"
          items={[
            {
              label: "Yousuf Qadri Executive",
              value: ReferenceType.YOUSUF_QADRI_EXECUTIVE,
            },
            {
              label: "Kumail Raza Executive",
              value: ReferenceType.KUMAIL_RAZA_EXECUTIVE,
            },
            {
              label: "Amaan Nadeem Executive",
              value: ReferenceType.AMAAN_NADEEM_EXECUTIVE,
            },
            {
              label: "Company",
              value: ReferenceType.COMPANY,
            },
          ]}
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
        <Button type="submit">
          {isPending ? "Loading" : "Create Reference"}
        </Button>
      </form>
    </Form>
  );
}
