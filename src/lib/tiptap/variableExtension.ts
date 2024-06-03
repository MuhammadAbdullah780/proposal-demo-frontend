import { default as MentionExtension } from "@tiptap/extension-mention";
import { ReactNodeViewRenderer, mergeAttributes } from "@tiptap/react";
import { Variable } from "@/components/common/Variable";

export const VariablesExtension = MentionExtension.extend({
  addNodeView() {
    return ReactNodeViewRenderer(Variable);
  },
  parseHTML() {
    return [
      {
        tag: "span",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes(HTMLAttributes)];
  },
});
