import { notFound } from "next/navigation";

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

// Containers
import DiscardReferenceModal from "./DiscardReferenceModal";
import EditReferenceDrawer from "./EditReferenceDrawer";
import ViewReferenceInfoModal from "./ViewReferenceInfoModal";

// Actions
import { getReferences } from "@/actions/referenceHistory";

export const dynamic = true;

const ReferenceListingTable = async () => {
  // Server Actions
  const payload: any = await getReferences();

  if (!payload?.isSuccess) {
    notFound();
  }

  // Functions
  const referenceTypeListing = await payload?.data?.map((item: any) => {
    return {
      label: item?.reference_type,
      value: item?.reference_type,
    };
  });

  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>Reference Type</TableHead>
          <TableHead>Creation Time</TableHead>
          <TableHead>Last Modified</TableHead>
          <TableHead>Info</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(payload?.data || [])?.map((item: any) => {
          return (
            <TableRow key={item?._id}>
              <TableCell className="font-medium">
                {item?.reference_type}
              </TableCell>
              <TableCell>
                {new Date(item?.created_at)?.toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(item?.updated_at)?.toLocaleDateString()}
              </TableCell>
              <TableCell>
                <ViewReferenceInfoModal text={item?.rich_text} />
              </TableCell>
              <TableCell className="flex gap-2 justify-end">
                <EditReferenceDrawer
                  id={item?._id}
                  reference_type={item?.reference_type}
                  rich_text={item?.rich_text}
                  text={item?.text}
                  referenceTypeListing={referenceTypeListing}
                />
                <DiscardReferenceModal id={item?._id} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ReferenceListingTable;
