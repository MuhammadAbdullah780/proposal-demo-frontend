"use client";
import Tiptap, { TiptapProps } from "@/components/common/TipTap";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  labelProps?: React.ComponentPropsWithRef<"label">;
  label: string;
  helperText?: string | React.ReactNode;
  richTextFieldName?: string;
};

const RichTextField: React.FC<Props> = ({
  label,
  name,
  helperText,
  labelProps,
  richTextFieldName,
}) => {
  // Hooks
  const { control, setValue, getValues } = useFormContext();
  const { field, fieldState } = useController({ name, control });

  // Vars
  const richTextFieldId = richTextFieldName ?? `${field.name}InHTML`;

  // Functions
  const handleChange = ({
    richText,
    plainText,
  }: {
    richText: string;
    plainText: string;
  }) => {
    setValue(richTextFieldId, plainText.trim() ? richText : null);
    field.onChange(plainText);
  };

  return (
    <FormItem id={field.name} className="w-full">
      <FormLabel {...labelProps}>{label}</FormLabel>
      <Tiptap
        allowInternalStateUsage={false}
        state={getValues(richTextFieldId)}
        setState={handleChange}
      />
      {helperText && !fieldState?.error && (
        <FormDescription>{helperText}</FormDescription>
      )}
      {fieldState?.error && (
        <p className="text-[0.8rem] font-medium text-destructive">
          {fieldState?.error?.message}
        </p>
      )}
      <FormMessage />
    </FormItem>
  );
};

export default RichTextField;
