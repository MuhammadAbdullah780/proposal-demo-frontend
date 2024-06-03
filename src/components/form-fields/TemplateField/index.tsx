"use client";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/Button";
import { suggestion } from "@/lib/tiptap/suggestion";
import { cn } from "@/lib/utils";
import { VariablesExtension } from "@/lib/tiptap/variableExtension";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import AddVariableSubForm from "./AddVariable";
import { FormDescription, FormLabel } from "@/components/ui/Form";
import Placeholder from "@tiptap/extension-placeholder";

type Props = {
  fieldClassName?: string;
  identifierForText: string;
  identifierForHTML: string;
  identifierForVariables: string;
  label?: string;
  labelProps?: React.ComponentProps<"label">;
  helperText?: string;
  placeholder?: string;
};

const TemplateField: React.FC<Props> = ({
  fieldClassName = "max-w-xl",
  identifierForText,
  identifierForHTML,
  identifierForVariables,
  label,
  labelProps = {},
  helperText,
  placeholder,
}) => {
  // Use States
  const [isVarAddModeOpen, setIsVarAddModeOpen] = useState(false);

  // Hooks
  const { getValues, setValue, getFieldState } = useFormContext();
  const editor = useEditor({
    extensions: [
      StarterKit,
      VariablesExtension.configure({
        suggestion,
      }),
      Placeholder.configure({
        placeholder,
        emptyNodeClass:
          "first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "outline-none max-h-60 overflow-x-hidden overflow-y-auto px-4 py-3 bg-white [&>h1]:text-3xl [&>h2]:text-xl",
      },
    },
    content: getValues(identifierForHTML),
    onUpdate(props) {
      console.log(
        {
          text: props?.editor?.getText(),
          HTML: props?.editor?.getHTML(),
        },
        "HTML____AND__TEXT______________",
      );
      setValue(identifierForHTML, props?.editor?.getHTML() || "");
      setValue(identifierForText, props?.editor?.getText() || "");
    },
  });

  // Vars
  const hasError =
    getFieldState(identifierForText)?.error ||
    getFieldState(identifierForHTML)?.error ||
    getFieldState(identifierForVariables)?.error;

  // Functions
  const handleToggleAddMode = (val: boolean = !isVarAddModeOpen) => {
    isVarAddModeOpen !== val && setIsVarAddModeOpen(val);
  };

  return (
    <div className="flex flex-col gap-2">
      {(label || label?.trim()) && (
        <FormLabel {...labelProps}>{label}</FormLabel>
      )}
      <div
        className={cn([
          "flex flex-col w-full bg-background border rounded-md overflow-hidden",
          editor?.isFocused && "border-primary",
          fieldClassName,
        ])}>
        {editor ? (
          <>
            <EditorContent placeholder="Hi" editor={editor} />
            <div className="flex p-4 border-t">
              {isVarAddModeOpen ? (
                <AddVariableSubForm toggleFunc={handleToggleAddMode} />
              ) : (
                <div className="flex w-full items-end gap-2">
                  {!!getValues(identifierForVariables)?.length ? (
                    <div className="flex-1 flex-wrap flex h-full gap-2">
                      {(getValues("variablesFormatted") || [])?.map(
                        (item: any) => (
                          <span key={item?.id}>{`{${item?.label}`}</span>
                        ),
                      )}
                    </div>
                  ) : (
                    <p className="h-full flex-1 font-semibold text-gray-600 text-sm">
                      No Variables found
                    </p>
                  )}
                  <Button onClick={() => handleToggleAddMode(true)}>Add</Button>
                </div>
              )}
            </div>
          </>
        ) : (
          <Spinner wrapperClassName="min-h-28 flex items-center justify-center h-full border rounded-md bg-white" />
        )}
      </div>
      {helperText && !hasError?.message && (
        <FormDescription>{helperText}</FormDescription>
      )}
      {hasError && (
        <p className="text-[0.8rem] font-medium text-destructive">
          {hasError?.message}
        </p>
      )}
    </div>
  );
};

export default TemplateField;
