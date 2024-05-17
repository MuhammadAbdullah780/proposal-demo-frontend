import React from "react";

// Components
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import RichTextRenderer from "../RichTextRenderer";
import MarkdownRenderer from "../MarkdownRenderer";

type Props = {
  text: string;
  triggerBtnText?: string;
  title: string;
  textFormat?: "richText" | "markdownText";
  description?: string;
};

const InfoModal = ({
  text,
  triggerBtnText = "View",
  title,
  textFormat = "richText",
  description,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="text">{triggerBtnText}</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="w-full h-[400px] bg-secondary p-5 overflow-x-hidden overflow-y-auto rounded-md flex flex-col gap-3">
          {textFormat === "richText" && <RichTextRenderer text={text} />}
          {textFormat === "markdownText" && <MarkdownRenderer text={text} />}
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
