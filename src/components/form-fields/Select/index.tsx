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
  onBeforeChange?: () => void | Promise<void>;
  onAfterChange?: () => void | Promise<void>;
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
  onBeforeChange,
  onAfterChange,
}: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name as never}
      render={({ field, fieldState }) => {
        const handleSelectChange = async (val: string) => {
          await onBeforeChange?.();
          field.onChange(val);
          await onAfterChange?.();
        };

        return (
          <FormItem className={wrapperClassName}>
            <FormLabel {...labelProps}>{label}</FormLabel>
            <Select
              disabled={disabled}
              onValueChange={handleSelectChange}
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
        );
      }}
    />
  );
};

export default SelectField;
