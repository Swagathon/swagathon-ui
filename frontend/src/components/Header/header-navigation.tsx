import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/routes";

const HeaderNavigation: React.FC = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      {/* {activePath}  */}
      {routes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
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
              activePath === route.path
                ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                : "dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            }`}
        >
          {route.label}
          {/* {route.path} */}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
