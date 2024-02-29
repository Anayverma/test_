import { NextResponse } from "next/server";
export function middleware(request) {
  //   if (request.nextUrl.pathname != "/test")
  //     return NextResponse.redirect(new URL("/test", request.url));
}

export const config = {
  matcher: ["/test/:path*", "/format/:path*"],
};
