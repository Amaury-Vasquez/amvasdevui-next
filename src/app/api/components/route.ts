import { NextResponse } from "next/server";
import { getAllComponents } from "@/services/components";

export async function GET() {
  const components = (await getAllComponents()) ?? [];
  return NextResponse.json(components);
}
