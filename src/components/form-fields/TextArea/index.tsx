import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Textarea, TextareaProps } from "@/components/ui/TextArea";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  labelProps?: React.ComponentProps<"label">;
  placeholder?: string;
  helperText?: string | React.ReactNode;
  shouldResize?: boolean;
  textAreaProps?: TextareaProps;
};

const TextAreaField = ({
  label,
  name,
  labelProps,
  placeholder,
  helperText,
  shouldResize,
  textAreaProps = {},
}: Props) => {
  const { className = "", ...rest } = textAreaProps;

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel {...labelProps}>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...rest}
              placeholder={placeholder}
              className={cn([className, !shouldResize && "resize-none"])}
              {...field}
            />
          </FormControl>
          {helperText && !fieldState?.error && (
            <FormDescription>{helperText}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextAreaField;
