"use client";
import { Form } from "@/components/ui/Form";
import { cn } from "@/lib/utils";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<any, any, undefined>;
  submitFunc: (data: any) => Promise<void>;
  children: React.ReactNode;
  formProps?: React.ComponentProps<"form">;
  wrapperClassName?: string;
  id?: string;
};

const RhfWrapper = ({
  form,
  submitFunc,
  children,
  formProps = {},
  wrapperClassName = "",
  id = "",
}: Props) => {
  const handleSubmit = form.handleSubmit(submitFunc);

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          {...formProps}
          className={cn(["w-full space-y-6 px-1", wrapperClassName])}
          onSubmit={handleSubmit}
          id={id}>
          {children}
        </form>
      </Form>
    </FormProvider>
  );
};

export default RhfWrapper;
