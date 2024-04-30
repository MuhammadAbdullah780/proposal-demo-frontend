"use client";
import { Button } from "@/components/ui/Button";
import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { useProposalContext } from "../context";

const ProposalContainer = () => {
  // Context
  const { text, setText } = useProposalContext();

  return (
    <>
      <div
        className="flex flex-col gap-3"
        dangerouslySetInnerHTML={{
          __html: text as string,
        }}
      />
      <div className="absolute top-8 right-10 space-x-2">
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
