"use client";
import InfoModal from "@/components/common/InfoModal";
import MarkdownRenderer from "@/components/common/MarkdownRenderer";
import { Button } from "@/components/ui/Button";
import DeletePromptModal from "@/containers/PromptsListing/DeletePrompt";
import EditPromptDrawer from "@/containers/PromptsListing/EditPromptDrawer";
import { Prompt } from "@/types/prompt";
import { ColumnDef } from "@tanstack/react-table";
import { MdDelete, MdEdit } from "react-icons/md";

export const promptListingColumns: ColumnDef<Prompt>[] = [
  {
    accessorKey: "title",
    header: "Title",
    enableSorting: false,
    cell(p) {
      return <p className="truncate max-w-[200px]">{String(p?.getValue())}</p>;
    },
  },
  {
    accessorKey: "template",
    header: "Template",
    enableSorting: false,
    cell(p) {
      return (
        <InfoModal
          textFormat="markdownText"
          text={String(p?.getValue())}
          title="Prompt Preview"
          description="This is the basic preview of the Prompt Template."
          triggerBtnText="Preview"
          contentClassName="max-h-96"
        />
      );
    },
  },

  {
    accessorKey: "variables",
    header: "Variables",
    enableSorting: false,
    cell(p) {
      return (
        <div className="flex 2xl:max-w-2xl xl:max-w-xl lg:max-w-md w-full flex-wrap gap-3">
          {((p?.getValue() as string[]) || [])?.map((item, i) => {
            return (
              <p
                className="px-2 py-1 select-none bg-gray-100 rounded-md"
                key={i}>
                {`{${item}}`}
              </p>
            );
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Creation Time",
    enableSorting: true,
    sortingFn: "datetime",
    cell(p) {
      return <p>{new Date(String(p?.getValue())).toLocaleDateString()}</p>;
    },
  },
  {
    accessorKey: "",
    header: "Action",
    cell(p) {
      return <DeletePromptModal id={p?.row?.original?._id} />;
    },
  },
];
