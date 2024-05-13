import { Editor } from "@tiptap/react";
import { FaBold, FaItalic, FaStrikethrough } from "react-icons/fa";
import { ImUnderline } from "react-icons/im";
import { LuListOrdered } from "react-icons/lu";
import { PiListBulletsBold } from "react-icons/pi";

export type ToolbarItemType =
  | "bold"
  | "italic"
  | "strike"
  | "heading_1"
  | "heading_2"
  | "bulletList"
  | "orderedList"
  | "underline";

export const generateEditorToolbarItems = (
  editor: Editor | null,
  allowedTypes: ToolbarItemType[],
) => {
  if (!editor) return;

  return [
    allowedTypes.includes("bold")
      ? {
          icon: <FaBold />,
          type: "bold",
          onClick() {
            editor.chain().focus().toggleBold().run();
          },
          isActive: editor.isActive("bold"),
        }
      : null,
    allowedTypes.includes("bulletList")
      ? {
          icon: <PiListBulletsBold />,
          type: "bulletList",
          onClick() {
            editor.chain().focus().toggleBulletList().run();
          },
          isActive: editor.isActive("bulletList"),
        }
      : null,
    allowedTypes.includes("heading_1")
      ? {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-heading-1">
              <path d="M4 12h8" />
              <path d="M4 18V6" />
              <path d="M12 18V6" />
              <path d="m17 12 3-2v8" />
            </svg>
          ),
          type: "heading_1",
          onClick() {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          },
          isActive: editor.isActive("heading", { level: 1 }),
        }
      : null,
    allowedTypes.includes("heading_2")
      ? {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-heading-2">
              <path d="M4 12h8" />
              <path d="M4 18V6" />
              <path d="M12 18V6" />
              <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
            </svg>
          ),
          type: "heading_2",
          onClick() {
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          },
          isActive: editor.isActive("heading", { level: 2 }),
        }
      : null,
    allowedTypes.includes("italic")
      ? {
          icon: <FaItalic />,
          type: "italic",
          onClick() {
            editor.chain().focus().toggleItalic().run();
          },
          isActive: editor.isActive("italic"),
        }
      : null,
    allowedTypes.includes("orderedList")
      ? {
          icon: <LuListOrdered />,
          type: "orderedList",
          onClick() {
            editor.chain().focus().toggleOrderedList().run();
          },
          isActive: editor.isActive("orderedList"),
        }
      : null,
    allowedTypes.includes("strike")
      ? {
          icon: <FaStrikethrough />,
          type: "strike",
          onClick() {
            editor.chain().focus().toggleStrike().run();
          },
          isActive: editor.isActive("strike"),
        }
      : null,
    allowedTypes.includes("underline")
      ? {
          icon: <ImUnderline />,
          type: "underline",
          onClick() {
            editor.chain().focus().toggleUnderline().run();
          },
          isActive: editor.isActive("underline"),
        }
      : null,
  ].filter((item) => !!item);
};
