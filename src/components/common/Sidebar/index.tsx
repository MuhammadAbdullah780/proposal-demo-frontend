"use client";
import { cn } from "@/lib/utils";
import { sidebarConfig } from "@/site-data/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen flex flex-col gap-4 w-60 border-r border-gray-200 bg-white">
      <div className="px-8 pt-1">
        <Image src="/logo.png" alt="Logo" width={70} height={70} />
      </div>
      <div className="w-full px-4 py-1 flex flex-col gap-3">
        {sidebarConfig.map((item, i) => {
          const isActive = item.matcher.includes(pathname);

          return (
            <Link
              href={item.to}
              key={i}
              className={cn([
                "flex items-center transistion-all duration-200 gap-3 py-2 text-gray-700 font-medium px-4 rounded-md",
                isActive
                  ? "bg-primary text-white hover:bg-primary"
                  : "bg-transparent hover:text-primary hover:bg-primary-foreground",
              ])}>
              {item.icon}
              {item.text}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
