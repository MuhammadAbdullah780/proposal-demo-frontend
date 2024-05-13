import { FaHistory } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";

export const sidebarConfig = [
  {
    icon: <FaHistory />,
    text: "Reference History",
    to: "/reference",
    matcher: ["/reference", "/reference/create"],
  },
  {
    icon: <MdOutlineAssignment />,
    text: "Proposals",
    to: "/proposal",
    matcher: ["/proposal", "/proposal/generate"],
  },
];
