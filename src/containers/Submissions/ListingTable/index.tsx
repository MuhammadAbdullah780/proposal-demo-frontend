import { fetchSubmissions } from "@/actions/submissions";
import DataTable from "@/components/common/DataTable";
import { submissionsListingColumns } from "@/site-data/submissions/columns";

type Props = {
  params?: any;
};

const SubmissionListingTable = async ({ params }: Props) => {
  const data: any = await fetchSubmissions({
    ...params,
  });

  return (
    <DataTable columns={submissionsListingColumns} data={data?.data ?? []} />
  );
};

export default SubmissionListingTable;
