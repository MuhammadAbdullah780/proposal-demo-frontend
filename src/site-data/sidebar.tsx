import { FaHistory } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { CgTemplate } from "react-icons/cg";

export const sidebarConfig = [
  {
    icon: <FaHistory />,
    text: "Reference History",
    to: "/reference",
    matcher: ["/reference", "/reference/create"],
  },
  {
    icon: <MdOutlineAssignment />,
    text: "Submissions",
    to: "/submissions",
    matcher: ["/submissions"],
  },
  {
    icon: <CgTemplate />,
    text: "Prompts",
    to: "/prompts",
    matcher: ["/prompts"],
  },
];
