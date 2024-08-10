import { NextRequest, NextResponse } from "next/server";
import { getComponentByName } from "@/services/components";

interface Params {
  name: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const { name } = params;
    const component = await getComponentByName(name);
    return NextResponse.json(component);
  } catch (error) {
    console.error("Failed to get component", error);
    return NextResponse.json(
      { message: "Component not found" },
      { status: 404 }
    );
  }
}
