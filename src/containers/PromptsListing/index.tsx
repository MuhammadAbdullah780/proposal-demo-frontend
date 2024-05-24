import PageHeading from "@/components/common/PageHeading";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import Link from "next/link";
import React, { Suspense } from "react";
import PromptListingTable from "./ListingTable";

type Props = {};

const PromptsListingContainer = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 max-w-screen overflow-x-hidden p-8">
      <section className="flex items-center justify-between">
        <PageHeading
          text="Your Prompts"
          description="A Page build for the listing of Prompt Templates"
        />
        <Link href="/prompts/create">
          <Button>Create</Button>
        </Link>
      </section>
      {/* <section>
        <SubmissionFilters />
      </section> */}
      {/* <Separator className="bg-gray-300" /> */}
      <section className="p-5 rounded-md bg-white">
        <Suspense key={"is"} fallback={<Spinner wrapperClassName="min-h-60" />}>
          <PromptListingTable />
        </Suspense>
      </section>
    </div>
  );
};

export default PromptsListingContainer;
