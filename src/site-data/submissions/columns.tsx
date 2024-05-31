"use client";
import InfoModal from "@/components/common/InfoModal";
import { Button } from "@/components/ui/Button";
import { ColumnDef } from "@tanstack/react-table";

export const submissionsListingColumns: ColumnDef<any>[] = [
  {
    accessorKey: "serialNo",
    header: "Title",
    enableSorting: false,
    cell(p) {
      return <p>{String(p?.getValue())}</p>;
    },
  },
  {
    accessorKey: "response",
    header: "AI Response",
    enableSorting: false,
    cell(p) {
      return (
        <InfoModal
          text={p.getValue() as string}
          title="AI Response"
          textFormat="markdownText"
        />
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    sortingFn: "datetime",
    enableSorting: true,
    cell(p) {
      return <p>{new Date(String(p?.getValue())).toLocaleDateString()}</p>;
    },
  },
];
