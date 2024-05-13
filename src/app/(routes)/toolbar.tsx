"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import { Button } from "@/components/ui/Button";
import { GoBold } from "react-icons/go";
import { FaBold, FaItalic, FaStrikethrough } from "react-icons/fa";
import { BiItalic } from "react-icons/bi";
import { LuHeading1, LuListOrdered } from "react-icons/lu";
import { PiListBulletsBold } from "react-icons/pi";
import { ImUnderline } from "react-icons/im";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-3 border-b py-2 flex justify-start
    gap-2 w-full flex-wrap">
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        variant={editor.isActive("bold") ? "default" : "secondary"}
        size="icon">
        <FaBold />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        variant={editor.isActive("italic") ? "default" : "secondary"}
        size="icon">
        <FaItalic />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        variant={editor.isActive("strike") ? "default" : "secondary"}
        size="icon">
        <FaStrikethrough />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "secondary"
        }
        size="icon">
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
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "secondary"
        }
        size="icon">
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
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        variant={editor.isActive("bulletList") ? "default" : "secondary"}
        size="icon">
        <PiListBulletsBold />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        variant={editor.isActive("orderedList") ? "default" : "secondary"}
        size="icon">
        <LuListOrdered />
      </Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        variant={editor.isActive("underline") ? "default" : "secondary"}
        size="icon">
        <ImUnderline />
      </Button>
    </div>
  );
};

export default Toolbar;
