import BulletList from "@tiptap/extension-bullet-list";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import { EditorProps } from "@tiptap/pm/view";
import { EditorContent, Extensions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import Toolbar from "../Toolbar";
import { cn } from "@/lib/utils";
import { ToolbarItemType } from "@/utils/generateToolbarItems";
import Spinner from "../Spinner";

export type TiptapProps = {
  allowInternalStateUsage: boolean;
  allowStarterKitUsage?: boolean;
  allowBulletListUsage?: boolean;
  allowParagraphConfiguration?: boolean;
  allowHeadingConfiguration?: boolean;
  allowDocumentConfiguration?: boolean;
  allowTextConfiguration?: boolean;
  allowOrderListConfiguration?: boolean;
  allowUnderlineConfiguration?: boolean;
  toolbarItems?: ToolbarItemType[];
  editorProps?: EditorProps<any>;
} & (InternalStateUsageProps | NonInternalStateUsage);

type InternalStateUsageProps = {
  allowInternalStateUsage: true;
};
type NonInternalStateUsage = {
  allowInternalStateUsage: false;
  state: string;
  setState: (args: { richText: string; plainText: string }) => void;
};

const Tiptap = ({
  allowInternalStateUsage = false,
  allowStarterKitUsage = true,
  allowBulletListUsage = true,
  allowParagraphConfiguration = true,
  allowHeadingConfiguration = true,
  allowDocumentConfiguration = true,
  allowTextConfiguration = true,
  allowOrderListConfiguration = true,
  allowUnderlineConfiguration = true,
  editorProps = {},
  toolbarItems = [
    "bold",
    "bulletList",
    "heading_1",
    "heading_2",
    "italic",
    "orderedList",
    "strike",
    "underline",
  ],
  ...rest
}: TiptapProps) => {
  // Extractions
  const { state: externalState, setState: externalSetState } =
    rest as NonInternalStateUsage;

  // States
  const [state, setState] = useState<string>();

  // Vars
  const extensions: Extensions = [];

  /**
   * Extensions Configuration
   */
  // 1. Starter Kit
  allowStarterKitUsage && extensions.push(StarterKit);
  // 2. Bullet List
  allowBulletListUsage &&
    extensions.push(
      BulletList.configure({
        HTMLAttributes: { class: "list-disc px-6" },
      }),
    );
  // 3. Paragraph
  allowParagraphConfiguration &&
    extensions.push(
      Paragraph.configure({
        HTMLAttributes: { class: "text-gray-800 font-poppins" },
      }),
    );
  // 4. Heading
  allowHeadingConfiguration &&
    extensions.push(
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
    );
  // 5. Document
  allowDocumentConfiguration && extensions.push(Document);
  // 6. Text
  allowTextConfiguration && extensions.push(Text);
  // 7. Ordered List
  allowOrderListConfiguration &&
    extensions.push(
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal px-4 custom",
        },
      }),
    );
  // 8. Underline
  allowUnderlineConfiguration &&
    extensions.push(
      Underline.configure({
        HTMLAttributes: { class: "text-underline" },
      }),
    );

  const editor = useEditor({
    extensions,
    content: allowInternalStateUsage ? state : externalState,
    editorProps: {
      ...editorProps,
      attributes: {
        class:
          "outline-none max-h-96 overflow-x-hidden overflow-y-auto px-4 py-3 bg-white [&>h1]:text-3xl [&>h2]:text-xl",
      },
    },
    onUpdate({ editor }) {
      allowInternalStateUsage
        ? handleChange(editor.getText())
        : externalSetState({
            plainText: editor.getText(),
            richText: editor.getHTML(),
          });
    },
  });

  //   Functions
  const handleChange = (text: string) => {
    setState(text);
  };

  if (!editor) {
    return (
      <div className="min-h-28 flex items-center justify-center h-full border rounded-md bg-white">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      className={cn([
        "flex overflow-x-hidden flex-col bg-background border w-full rounded-md",
        editor?.isFocused && "border-primary",
      ])}>
      <Toolbar editor={editor} toolbarItems={toolbarItems} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
