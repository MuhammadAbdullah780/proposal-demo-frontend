import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  text: string;
};

const RichTextRenderer = ({ className = "", text }: Props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: text }} className={className} />
  );
};

export default RichTextRenderer;
