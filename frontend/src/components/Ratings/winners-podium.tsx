/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0bcc4osjgY1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Card } from "../ui/card";
import { InfoIcon } from "lucide-react";

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

export type WinnerCategory = "Overall" | "Booth" | "Swag" | "Sustainable";

export function WinnersPodium() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-end space-x-4 mt-8">
        <div className="flex flex-col items-center">
          <img
            src="/placeholder.svg"
            alt="2nd place logo"
            className="mb-2 rounded-lg bg-[#0077b6] w-44"
          />
          <div className="w-60 h-36 bg-[#0077b6] flex items-center justify-center rounded-lg relative">
            <span className="text-white text-lg font-bold">
              2<sup>nd</sup>
            </span>
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 87
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Winner name
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                    <InfoIcon className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is the 2nd place winner.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/placeholder.svg"
            alt="1st place logo"
            className="mb-2 rounded-lg bg-[#023e8a] w-56"
          />
          <div className="w-64 h-48 bg-[#023e8a] flex items-center justify-center rounded-lg relative">
            <span className="text-white text-lg font-bold">
              1<sup>st</sup>
            </span>
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 95
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Winner name
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                    <InfoIcon className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is the 1st place winner.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/placeholder.svg"
            alt="3rd place logo"
            className="mb-2 rounded-lg bg-[#0077b6] w-36"
          />
          <div className="w-56 h-20 bg-[#347496] flex items-center justify-center rounded-lg relative">
            <span className="text-white text-lg font-bold">
              3<sup>rd</sup>
            </span>
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 81
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Winner name
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                    <InfoIcon className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is the 3rd place winner.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* RUNNER-UPs */}
      <Card className="px-6 pb-6 pt-0 w-full mx-0 my-4 bg-slate-300">
        <div className="flex justify-center items-end space-x-4 mt-8">
          <h2 className="text-2xl font-bold mb-4">Honourable Mentions</h2>
        </div>
        <div className="flex justify-center items-end space-x-4 mt-4">
          <div className="flex flex-col items-center relative">
            <img
              src="/placeholder.svg"
              alt="4th place logo"
              className="mb-2 rounded-lg bg-[#0077b6]"
            />
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 78
            </div>
            <div className="mt-2 flex-col justify-center align-middle items-center">
              4<sup>th</sup> Place
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Runner up name
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src="/placeholder.svg"
              alt="5th place logo"
              className="mb-2 rounded-lg bg-[#0077b6]"
            />
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 75
            </div>
            <div className="mt-2 flex-col justify-center align-middle items-center">
              5<sup>th</sup> Place
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Runner up name
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src="/placeholder.svg"
              alt="6th place logo"
              className="mb-2 rounded-lg bg-[#0077b6]"
            />
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 72
            </div>
            <div className="mt-2 flex-col justify-center align-middle items-center">
              6<sup>th</sup> Place
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Runner up name
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src="/placeholder.svg"
              alt="7th place logo"
              className="mb-2 rounded-lg bg-[#0077b6]"
            />
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 69
            </div>
            <div className="mt-2 flex-col justify-center align-middle items-center">
              7<sup>th</sup> Place
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Runner up name
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src="/placeholder.svg"
              alt="8th place logo"
              className="mb-2 rounded-lg bg-[#0077b6]"
            />
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 66
            </div>
            <div className="mt-2 flex-col justify-center align-middle items-center">
              8<sup>th</sup> Place
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Runner up name
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src="/placeholder.svg"
              alt="9th place logo"
              className="mb-2 rounded-lg bg-[#0077b6]"
            />
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 63
            </div>
            <div className="mt-2 flex-col justify-center align-middle items-center">
              9<sup>th</sup> Place
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Runner up name
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src="/placeholder.svg"
              alt="10th place logo"
              className="mb-2 rounded-lg bg-[#0077b6]"
            />
            <div className="absolute top-0 right-0 bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs font-medium">
              Score: 60
            </div>
            <div className="mt-2 flex-col justify-center align-middle items-center">
              10<sup>th</sup> Place
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Runner up name
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}


