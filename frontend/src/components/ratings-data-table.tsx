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
import { DATA_TABLE_PROPERTIES } from "@/constants";
import { ArrowUpDownIcon, InfoIcon, LinkIcon } from "lucide-react";

// interface for sponsors
//   {
//     "uuid": "11EF1C3ACA953A85B3151257CC62887F",
//     "id": 527,
//     "name": "WOLF Financial ",
//     "booth": null,
//     "website": "https://wolf.financial/",
//     "image_thumb": "//d2pasa6bkzkrjd.cloudfront.net/_resize/consensus2024/partner/500/site/consensus2024/images/userfiles/partners/7b62ab4f3c698343d55fd25e1f49bf29.png",
//     "swag": true,
//     "num1": 123,
//     "num2": 456,
//     "num3": 789,
//     "num4": 987,
//     "num5": 654,
//     "overallScore": 80
//   }

interface Sponsor {
  id: number;
  name: string;
  booth: string | null;
  website: string;
  image_thumb: string;
  swag: boolean;
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  num5: number;
  overallScore: number;
          [key: string]: any; // Add index signature

}

export function RatingsDataTable() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ key: "overallScore", order: "desc" });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [loading, setLoading] = useState(true);
  const [sponsors, setSponsors] = useState<Array<Sponsor>>([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/sponsors");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data?.message || "Failed to fetch sponsors");
        }
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

  const handleSort = (key: any) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ key, order: "desc" });
    }
  };

  const handlePageChange = (page: any) => {
    setPage(page);
  };

  const handlePageSizeChange = (size: any) => {
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
                  {DATA_TABLE_PROPERTIES["num1"]}
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
                  {DATA_TABLE_PROPERTIES["num2"]}
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
                  {DATA_TABLE_PROPERTIES["num3"]}
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
                  {DATA_TABLE_PROPERTIES["num4"]}
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
                  {DATA_TABLE_PROPERTIES["num5"]}
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
                          src={(sponsor as { image_thumb: string }).image_thumb}
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
                            {sponsor?.website
                              ?.replace(/(^\w+:|^)\/\//, "")
                              .split("/")[0]
                              .replace("www.", "")}
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
