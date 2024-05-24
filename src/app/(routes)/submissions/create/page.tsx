import PromptContextProvider from "@/containers/CreateSubmission/context";
import React from "react";
import CreateProposal from "@/containers/CreateSubmission";

const CreatePromptPage = () => {
  return (
    <PromptContextProvider>
      <CreateProposal />
    </PromptContextProvider>
  );
};

export default CreatePromptPage;
