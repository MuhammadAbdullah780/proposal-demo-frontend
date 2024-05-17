import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/Sheet";
import { cn } from "@/lib/utils";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import RhfWrapper from "../RhfWrapper";
import Spinner from "../Spinner";
import { ScrollArea } from "@/components/ui/ScrollArea";

type Props = {
  loading?: boolean;
  open: boolean;
  triggerBtn: React.ReactNode;
  onChange: (val: boolean) => void;
  sheetContentClassName?: string;
  title: string;
  description: string;
  form: UseFormReturn<any, any, undefined>;
  formId: string;
  submitFunc: (data: any) => Promise<void>;
  children: React.ReactNode;
  formWrapperClassName?: string;
  submitBtnText?: string;
};

const FormDrawer = ({
  loading = false,
  onChange,
  open,
  sheetContentClassName = "",
  triggerBtn,
  description,
  title,
  form,
  formId = "",
  children,
  submitFunc,
  submitBtnText = "",
  formWrapperClassName = "",
}: Props) => {
  return (
    <>
      {triggerBtn}
      <Sheet open={open} onOpenChange={(val) => onChange(val)}>
        <SheetContent
          className={cn([
            "w-full flex flex-col gap-4 mx-1!",
            sheetContentClassName,
          ])}>
          <SheetHeader>
            <SheetTitle className="px-1 mx-2">{title}</SheetTitle>
            <SheetDescription className="px-1 ml-2">
              {description}
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-screen">
            <RhfWrapper
              id={formId}
              wrapperClassName={`flex-1 ${formWrapperClassName}`}
              form={form}
              submitFunc={submitFunc}>
              {children}
            </RhfWrapper>
          </ScrollArea>
          <Separator className="w-[calc(100%-8px)] ml-2" />
          <SheetFooter className="flex items-center justify-end gap-2 w-full">
            <Button
              type="button"
              variant="outline"
              onClick={() => onChange(false)}>
              Cancel
            </Button>
            <Button form={formId} type="submit" className="flex gap-2">
              {loading && <Spinner spinnerColor="white" size="extra_small" />}
              {loading ? "Loading" : submitBtnText}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FormDrawer;
