"use client";
import { Button } from "@/components/ui/Button";
import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useProposalContext } from "../context";
import Markdown from "react-markdown";

const ProposalContainer = () => {
  // Context
  const { text, setText } = useProposalContext();

  return (
    <>
      <Markdown skipHtml className="space-y-3">
        {text}
      </Markdown>
      <div className="absolute top-4 right-10 space-x-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => navigator.clipboard.writeText(text!)}>
          <FaRegCopy />
        </Button>
        <Button onClick={() => setText(null)} size="icon" variant="outline">
          <MdClear />
        </Button>
      </div>
    </>
  );
};

export default ProposalContainer;
