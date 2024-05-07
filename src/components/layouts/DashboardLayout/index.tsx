import Sidebar from "@/components/common/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto h-screen  bg-[#f0f2f5]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
