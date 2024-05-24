/* eslint-disable react/display-name */
import { cn } from "@/lib/utils";
import { VariableOption } from "@/types";
import { SuggestionOptions, SuggestionProps } from "@tiptap/suggestion";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useFormContext } from "react-hook-form";

export const VariablesList = forwardRef<
  ReturnType<NonNullable<SuggestionOptions["render"]>>,
  SuggestionProps<VariableOption>
>(({ command }, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { getValues } = useFormContext();

  const items: VariableOption[] = getValues("variablesFormatted") ?? [];

  const selectItem = (index: number) => {
    const item = items[index];

    if (item) {
      command(item);
    }
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + items.length - 1) % items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className="min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md flex flex-col gap-1">
      {items?.length ? (
        items.map((item, index: number) => (
          <button
            className={cn(
              "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full",
              index === selectedIndex && "bg-accent text-accent-foreground",
            )}
            key={index}
            onClick={() => selectItem(index)}>
            {item?.label?.toString().replace("}", "") as string}
          </button>
        ))
      ) : (
        <p className="px-4 py-1 font-semibold text-gray-600 text-base">
          No Variables Found
        </p>
      )}
    </div>
  );
});
