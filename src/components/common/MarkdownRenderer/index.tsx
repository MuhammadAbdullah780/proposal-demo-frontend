import React from "react";
import Markdown from "react-markdown";

type Props = {
  text: string;
};

const MarkdownRenderer = ({ text }: Props) => {
  return <Markdown className="space-y-3">{text}</Markdown>;
};

export default MarkdownRenderer;
