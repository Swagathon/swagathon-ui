import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const propertyMap = {
  "1": "overallScore",
  "2": "num1",
  "3": "num2",
  "4": "num3",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // make sure the ID is valid
  if (!id || !propertyMap[id as keyof typeof propertyMap]) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const property = propertyMap[id as keyof typeof propertyMap];

  if (!property) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const response = await fetch("http://localhost:3000/api/sponsors");
  const sponsors = await response.json();

  const topSponsors = sponsors
    .sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => b[property] - a[property])
    .slice(0, 10);

  return NextResponse.json(topSponsors);
}
