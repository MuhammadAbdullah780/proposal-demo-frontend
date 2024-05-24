import { fetchPrompts } from "@/actions/prompts";
import DataTable from "@/components/common/DataTable";
import { promptListingColumns } from "@/site-data/prompts/columns";
import React from "react";

type Props = {};

const PromptListingTable = async (props: Props) => {
  const data = await fetchPrompts();

  console.log(data, "DATA__________");

  return <DataTable columns={promptListingColumns} data={data?.data || []} />;
};

export default PromptListingTable;
