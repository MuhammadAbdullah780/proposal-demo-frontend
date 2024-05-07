import PageHeading from "@/components/common/PageHeading";
import { Button } from "@/components/ui/Button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import Link from "next/link";
import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import ViewReferenceInfoModal from "./ViewReferenceInfoModal";

const data = [
  {
    reference_type: "yousuf-qadri-executive",
    text: "",
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  },
  {
    reference_type: "yousuf-qadri-executive",
    text: "text",
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  },
  {
    reference_type: "yousuf-qadri-executive",
    text: "text",
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  },
  {
    reference_type: "yousuf-qadri-executive",
    text: "text",
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
  },
];

const ReferencesContainer = () => {
  return (
    <div className="flex flex-col gap-5 max-w-screen overflow-x-hidden p-8">
      <div className="flex items-center justify-between">
        <PageHeading text="Reference Listing" />
        <Link href="/reference/create">
          <Button>Create</Button>
        </Link>
      </div>
      <section className="p-5 rounded-md bg-white">
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
            {data.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    {item.reference_type}
                  </TableCell>
                  <TableCell>{item.created_at.toLocaleDateString()}</TableCell>
                  <TableCell>{item.updated_at.toLocaleDateString()}</TableCell>
                  <TableCell>
                    <ViewReferenceInfoModal text="Hi" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/reference/edit">
                      <Button variant="secondary" size="sm">
                        Edit
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default ReferencesContainer;
