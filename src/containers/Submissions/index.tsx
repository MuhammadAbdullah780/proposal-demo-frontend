import PageHeading from "@/components/common/PageHeading";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import Link from "next/link";
import { Suspense } from "react";
import SubmissionFilters from "./Filters";
import SubmissionListingTable from "./ListingTable";

type Props = {
  params?: any;
};

const SubmissionsContainer = ({ params }: Props) => {
  const searchQuery = params?.search_query;
  const generatedFrom = params?.generated_from;

  console.log(searchQuery + generatedFrom, "KEY________");

  return (
    <div className="flex flex-col gap-5 max-w-screen overflow-x-hidden p-8">
      <section className="flex items-center justify-between">
        <PageHeading text="Your Submissions" />
        <Link href="/submissions/create">
          <Button>Create</Button>
        </Link>
      </section>
      <section>
        <SubmissionFilters />
      </section>
      <Separator className="bg-gray-300" />
      <section className="p-5 rounded-md bg-white">
        <Suspense
          key={searchQuery + generatedFrom}
          fallback={<Spinner wrapperClassName="min-h-60" />}>
          <SubmissionListingTable params={params} />
        </Suspense>
      </section>
    </div>
  );
};

export default SubmissionsContainer;
