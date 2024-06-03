import { fetchSubmissions } from "@/actions/submissions";
import DataTable from "@/components/common/DataTable";
import { submissionsListingColumns } from "@/site-data/submissions/columns";

type Props = {
  params?: any;
};

const SubmissionListingTable = async ({ params }: Props) => {
  console.log(params, "PARAMS____");

  const data: any = await fetchSubmissions({
    ...params,
  });

  console.log(data?.data, "OUTER____");

  return (
    <DataTable columns={submissionsListingColumns} data={data?.data ?? []} />
  );
};

export default SubmissionListingTable;
