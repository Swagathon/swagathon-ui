import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

const CACHE_DURATION = 3600; // Cache duration in seconds (1 hour)

export async function GET() {
  const filePath = path.join(process.cwd(), "public/data/sponsors.json");
  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    const sponsors = JSON.parse(fileContents);
    return NextResponse.json(sponsors);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read sponsors data" },
      { status: 500 }
    );
  }
}
