import CreateProposal from "@/containers/CreateProposal";
import ProposalContextProvider from "@/containers/CreateProposal/context";
import { NextPage } from "next";

type Props = {
  params: Record<string, any>;
  searchParams: Record<string, any>;
};

const CreateProposalPage: NextPage<Props> = ({ searchParams }) => {
  return (
    <ProposalContextProvider>
      <CreateProposal searchParams={searchParams} />
    </ProposalContextProvider>
  );
};

export default CreateProposalPage;
