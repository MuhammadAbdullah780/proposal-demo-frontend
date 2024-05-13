import CreateProposal from "@/containers/CreateProposal";
import ProposalContextProvider from "@/containers/CreateProposal/context";
import { NextPage } from "next";

type Props = {
  params: Record<string, any>;
  searchParams: Record<string, any>;
};

export const dynamic = true;

const CreateProposalPage: NextPage<Props> = ({ searchParams }) => {
  return (
    <ProposalContextProvider>
      <CreateProposal />
    </ProposalContextProvider>
  );
};

export default CreateProposalPage;
