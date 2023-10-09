import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let url =
    process.env.NODE_ENV === "development"
      ? process.env.SITE_URL_LOCAL
      : process.env.SITE_URL_PROD;

  const { cookies } = await import("next/headers");
  cookies().delete("userToken");

  return NextResponse.json({ redirect: `${url}/auth` }, { status: 200 });
}
