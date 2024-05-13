"use client";
import { Button } from "@/components/ui/Button";
import {
  generateEditorToolbarItems,
  ToolbarItemType,
} from "@/utils/generateToolbarItems";
import { type Editor } from "@tiptap/react";

type Props = {
  editor: Editor | null;
  toolbarItems: ToolbarItemType[];
};

const Toolbar = ({ editor, toolbarItems }: Props) => {
  if (!editor) {
    return null;
  }

  const items = generateEditorToolbarItems(editor, toolbarItems);

  return (
    <div className="px-3 border-b py-2 bg-secondary flex justify-start gap-2 w-full flex-wrap">
      {items?.map((item, i) => {
        return (
          <Button
            type="button"
            key={i}
            onClick={item?.onClick}
            variant={item?.isActive ? "default" : "outline"}
            size="icon">
            {item?.icon}
          </Button>
        );
      })}
    </div>
  );
};

export default Toolbar;
