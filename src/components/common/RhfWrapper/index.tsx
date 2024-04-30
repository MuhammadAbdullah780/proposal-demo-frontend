"use client";
import { Form } from "@/components/ui/Form";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<any, any, undefined>;
  submitFunc: (data: any) => Promise<void>;
  children: React.ReactNode;
  formProps?: React.ComponentProps<"form">;
};

const RhfWrapper = ({ form, submitFunc, children, formProps = {} }: Props) => {
  const handleSubmit = form.handleSubmit(submitFunc);

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          className="w-full space-y-6"
          {...formProps}
          onSubmit={handleSubmit}>
          {children}
        </form>
      </Form>
    </FormProvider>
  );
};

export default RhfWrapper;
