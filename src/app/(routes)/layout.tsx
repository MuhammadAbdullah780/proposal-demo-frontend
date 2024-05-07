import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
