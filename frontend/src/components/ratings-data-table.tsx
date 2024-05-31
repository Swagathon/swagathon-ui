"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function RatingsDataTable() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ key: "overallScore", order: "desc" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [loading, setLoading] = useState(true);
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/sponsors");
        const data = await response.json();
        setSponsors(data);
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSponsors();
  }, []);

  const filteredSponsors = useMemo(() => {
    return sponsors
      .filter((sponsor) => {
        const searchValue = search.toLowerCase();
        return (
          sponsor.name.toLowerCase().includes(searchValue) ||
          (sponsor.booth
            ? sponsor.booth.toLowerCase().includes(searchValue)
            : false)
        );
      })
      .sort((a, b) => {
        if (sort.key === "overallScore") {
          if (sort.order === "asc") {
            return a.overallScore - b.overallScore;
          } else {
            return b.overallScore - a.overallScore;
          }
        } else if (sort.key === "swag") {
          if (sort.order === "asc") {
            return a.swag ? 1 : -1;
          } else {
            return b.swag ? 1 : -1;
          }
        } else if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      })
      .slice((page - 1) * pageSize, page * pageSize);
  }, [sponsors, search, sort, page, pageSize]);

  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ key, order: "desc" });
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-4 p-4 border-1 rounded-lg dark:border-gray-600">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search Sponsors..."
          className="bg-white dark:bg-gray-950 rounded-md border-2 p-2 border-gray-200 dark:border-gray-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="shrink-0  border-2 rounded-md border-gray-200 dark:border-gray-600"
            >
              <ArrowUpDownIcon className="w-4 h-4 mr-2" />{" "}
              {`${pageSize} per page`}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]" align="end">
            <DropdownMenuRadioGroup
              value={pageSize.toString()}
              onValueChange={(value) => handlePageSizeChange(Number(value))}
            >
              <DropdownMenuRadioItem value="25">
                25 per page
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="50">
                50 per page
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="100">
                100 per page
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-auto">
        {loading ? (
          <div className="p-4 grid gap-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name
                  {sort.key === "name" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("booth")}
                >
                  Booth
                  {sort.key === "booth" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("swag")}
                >
                  Swag?
                  {sort.key === "swag" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("overallScore")}
                >
                  Overall Score
                  {sort.key === "overallScore" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-right"
                  onClick={() => handleSort("num1")}
                >
                  Number 1
                  {sort.key === "num1" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-right"
                  onClick={() => handleSort("num2")}
                >
                  Number 2
                  {sort.key === "num2" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-right"
                  onClick={() => handleSort("num3")}
                >
                  Number 3
                  {sort.key === "num3" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-right"
                  onClick={() => handleSort("num4")}
                >
                  Number 4
                  {sort.key === "num4" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-right"
                  onClick={() => handleSort("num5")}
                >
                  Number 5
                  {sort.key === "num5" && (
                    <span className="ml-1">
                      {sort.order === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSponsors.map((sponsor, index) => (
                <TableRow
                  key={sponsor.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : ""
                  }`}
                >
                  <TableCell className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border">
                        <AvatarImage
                          src={sponsor.image_thumb}
                          alt={sponsor.name}
                        />
                        <AvatarFallback>
                          {sponsor.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start gap-1">
                        <div className="flex items-center gap-2">
                          <TooltipProvider>
                            <div className="font-bold text-lg">
                              {sponsor.name}
                            </div>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <InfoIcon className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{sponsor.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        {sponsor.website && (
                          <Link
                            href={sponsor.website}
                            target="_blank"
                            className="text-blue-500 hover:underline text-left flex items-center gap-2"
                            prefetch={false}
                          >
                            <LinkIcon className="w-4 h-4" />
                            {/* hide http, www, and path from url */}
                            {sponsor?.website?.replace(/(^\w+:|^)\/\//, "").split("/")[0].replace("www.", "")}
                          </Link>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {sponsor.booth ? `#${sponsor.booth}` : "-"}
                  </TableCell>
                  <TableCell>
                    <Badge
                    variant="outline"
                    // {sponsor.swag ? "default" : "outline"}
                      className={
                        sponsor.swag
                          ? "bg-white text-emerald-800"
                          : " text-red-800"
                      }
                    >
                      {sponsor.swag ? "Yes" : "No"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        sponsor.overallScore >= 80
                          ? "default"
                          : sponsor.overallScore >= 70
                          ? "outline"
                          : "destructive"
                      }
                      className={
                        sponsor.overallScore >= 85
                          ? "bg-green-600 text-green-100"
                          : sponsor.overallScore >= 70
                          ? "bg-teal-600 text-teal-100"
                          : "destructive"
                      }
                    >
                      {sponsor.overallScore}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {sponsor.num1 || "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    {sponsor.num2 || "-"}
                  </TableCell>
                  <TableCell className="text-right">{sponsor.num3}</TableCell>
                  <TableCell className="text-right">{sponsor.num4}</TableCell>
                  <TableCell className="text-right">{sponsor.num5}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
