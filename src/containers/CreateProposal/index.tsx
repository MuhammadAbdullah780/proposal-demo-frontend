"use client";
import { useProposalContext } from "./context";
import EmptyProposal from "./EmptyProposal";
import ProposalContainer from "./ProposalContainer";

const CreateProposal = () => {
  // Context
  const { text } = useProposalContext();

  return (
    <>
      <div className="flex flex-col items-center gap-5 min-h-screen max-w-screen p-8 overflow-x-hidden">
        <h1 className="text-2xl font-medium">Proposal Automation</h1>
        <section className="min-h-[40vh] w-full relative rounded-xl p-8 bg-gray-50 pt-16">
          {text ? <ProposalContainer /> : <EmptyProposal />}
        </section>
      </div>
    </>
  );
};

export default CreateProposal;
