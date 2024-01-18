import { NextRequest, NextResponse } from "next/server";
import { paths } from "@/schemas/openapi/healthCheck";

type Response =
  paths["/"]["get"]["responses"]["200"]["content"]["application/json"];

export async function GET(request: NextRequest) {
  const response: Response = {
    message: "Hello, World!",
  };
  return NextResponse.json(response, { status: 200 });
}
