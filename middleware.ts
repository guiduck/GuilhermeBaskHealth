import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const loggedRoutes = ["/"];
  const token = request.cookies.get("userToken")?.value;

  const signInURL = new URL("/auth", request.url);

  if (!token) {
    if (loggedRoutes.includes(request.nextUrl.pathname))
      return NextResponse.redirect(signInURL);

    return NextResponse.next();
  }
}

export const Config = {
  matcher: ["/", "/auth"],
};
