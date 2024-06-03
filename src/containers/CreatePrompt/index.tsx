import PageHeading from "@/components/common/PageHeading";
import React from "react";
import AddRefernceForm from "../AddReference/Form";
import CreatePromptForm from "./Form";

type Props = {};

const CreatePromptContainer = (props: Props) => {
  return (
    <div className="w-full min-h-full flex justify-center py-20 bg-white">
      <div className="flex flex-col gap-5 p-5 w-full max-w-5xl">
        <PageHeading
          text="Create Prompt"
          description="Create a new Prompt and train It."
        />
        <section>
          <CreatePromptForm />
        </section>
      </div>
    </div>
  );
};

export default CreatePromptContainer;
