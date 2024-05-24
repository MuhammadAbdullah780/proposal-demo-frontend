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
  label?: string;
  inputProps?: InputProps;
  helperText?: string | React.ReactNode;
  placeholder?: string;
  wrapperClassName?: string;
};

const InputField = ({
  name,
  labelProps,
  label,
  inputProps,
  helperText,
  placeholder,
  wrapperClassName = "",
}: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name as never}
      render={({ field, fieldState }) => (
        <FormItem className={wrapperClassName}>
          {label && <FormLabel {...labelProps}>{label}</FormLabel>}
          <FormControl>
            <Input {...inputProps} placeholder={placeholder} {...field} />
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
