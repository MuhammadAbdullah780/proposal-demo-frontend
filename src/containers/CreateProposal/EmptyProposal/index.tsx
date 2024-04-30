import { VscNewFolder } from "react-icons/vsc";
import ProposalFormDrawer from "../CreateProposalDrawer";

const EmptyProposal = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <VscNewFolder size={40} className="text-gray-600" />
      <div className="text-center">
        <h1 className="text-xl font-medium text-gray-700">No Proposal Found</h1>
        <p className="text-gray-500 text-base mt-2">
          There are currently no proposals available. Click the button below to
          create a new one.
        </p>
      </div>
      <ProposalFormDrawer />
    </div>
  );
};

export default EmptyProposal;
