import Link from "next/link";
import { Suspense } from "react";

// Components
import PageHeading from "@/components/common/PageHeading";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/Button";
import ReferenceListingTable from "./table";

const ReferencesContainer = async () => {
  return (
    <div className="flex flex-col gap-5 max-w-screen overflow-x-hidden p-8">
      <section className="flex items-center justify-between">
        <PageHeading text="Reference Listing" />
        <Link href="/reference/create">
          <Button>Create</Button>
        </Link>
      </section>
      <section className="p-5 rounded-md bg-white">
        <Suspense fallback={<Spinner wrapperClassName="min-h-60" />}>
          <ReferenceListingTable />
        </Suspense>
      </section>
    </div>
  );
};

export default ReferencesContainer;
