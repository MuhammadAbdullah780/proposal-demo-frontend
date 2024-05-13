import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  labelProps?: React.ComponentProps<"label">;
  label: string;
  placeholder?: string;
  items: {
    label: string;
    value: string;
  }[];
  helperText?: string | React.ReactNode;
  wrapperClassName?: string;
  disabled?: boolean;
};

const SelectField = ({
  name,
  labelProps,
  label,
  placeholder,
  items,
  helperText,
  wrapperClassName = "",
  disabled = false,
}: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name as never}
      render={({ field, fieldState }) => (
        <FormItem className={wrapperClassName}>
          <FormLabel {...labelProps}>{label}</FormLabel>
          <Select
            disabled={disabled}
            onValueChange={field.onChange}
            value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items?.map((item, i) => {
                return (
                  <SelectItem key={i} value={item.value}>
                    {item.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          {helperText && !fieldState?.error && (
            <FormDescription>{helperText}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
