"use client";
import PageHeading from "@/components/common/PageHeading";
import { usePromptContext } from "./context";
import EmptyProposal from "./EmptyProposal";
import ProposalContainer from "./ProposalContainer";

const CreatePrompt = () => {
  // Context
  const { text } = usePromptContext();

  return (
    <div className="flex flex-col gap-5 max-w-screen overflow-x-hidden p-8">
      <PageHeading text="Generate Proposal" />
      <section className="w-full relative rounded-xl p-8 bg-gray-50 pt-16">
        {text ? <ProposalContainer /> : <EmptyProposal />}
      </section>
    </div>
  );
};

export default CreatePrompt;
