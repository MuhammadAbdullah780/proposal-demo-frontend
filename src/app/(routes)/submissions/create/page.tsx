import PromptContextProvider from "@/containers/CreatePrompt/context";
import React from "react";
import CreateProposal from "@/containers/CreatePrompt";

const CreatePromptPage = () => {
  return (
    <PromptContextProvider>
      <CreateProposal />
    </PromptContextProvider>
  );
};

export default CreatePromptPage;
