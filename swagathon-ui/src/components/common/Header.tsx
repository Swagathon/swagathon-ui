/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/oK0GvlzQXsu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  CircleUserIcon,
  MenuIcon,
  Package2Icon,
  SearchIcon,
} from "@/components/icons";

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 dark:bg-gray-950">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          prefetch={false}
        >
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="#"
          className="text-gray-950 transition-colors hover:text-gray-950 dark:text-gray-50 dark:hover:text-gray-50"
          prefetch={false}
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Orders
        </Link>
        <Link
          href="#"
          className="text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Customers
        </Link>
        <Link
          href="#"
          className="text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Analytics
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="hover:text-gray-950 dark:hover:text-gray-50"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUserIcon className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}