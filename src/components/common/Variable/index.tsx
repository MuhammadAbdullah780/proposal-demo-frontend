import { cn } from "@/lib/utils";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";

export function Variable(props: NodeViewProps) {
  return (
    <NodeViewWrapper className="inline w-fit">
      <span
        className={cn("rounded bg-gray-200 p-1 text-gray-700 font-semibold")}>
        {`{${props.node.attrs?.label}`}
      </span>
    </NodeViewWrapper>
  );
}
