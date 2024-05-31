import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/routes";
import { Package2 } from "lucide-react";

const HeaderNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      {routes.map((route) => (
        <Link
          href={route.path}
          // passHref
          className={`
              group 
              inline-flex 
              h-9 w-max 
              items-center justify-center 
              rounded-md 
              bg-white px-4 py-2 
              text-sm font-medium transition-colors
              hover:bg-gray-100 
              hover:text-gray-900
              focus:bg-gray-300 
              focus:text-gray-900 
              focus:outline-none 
              disabled:pointer-events-none 
              disabled:opacity-50 ${
                pathname === route.path
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  : "dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
