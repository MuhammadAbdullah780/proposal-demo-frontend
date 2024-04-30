import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input, InputProps } from "@/components/ui/Input";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  labelProps?: React.ComponentPropsWithRef<"label">;
  label: string;
  inputProps?: InputProps;
  helperText?: string | React.ReactNode;
};

const InputField = ({
  name,
  labelProps,
  label,
  inputProps,
  helperText,
}: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name as never}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel {...labelProps}>{label}</FormLabel>
          <FormControl>
            <Input {...inputProps} {...field} />
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

export default InputField;
