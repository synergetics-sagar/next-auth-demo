import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const proxy = auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  const isProfilePage = pathname.startsWith("/profile");
  const isLoginPage = pathname.startsWith("/login");

  if (isProfilePage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/profile/:path*", "/login"],
};