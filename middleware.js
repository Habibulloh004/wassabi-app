import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);
  const cookies = request.cookies;
  const roleCookie = cookies.get("role");

  if (!roleCookie) {
    if (url.pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  try {
    const { role } = JSON.parse(roleCookie.value);

    if (url.pathname === "/login") {
      if (role === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url));
      } else if (role === "delivery") {
        return NextResponse.redirect(new URL("/delivery", request.url));
      }
      return NextResponse.next();
    }

    if (url.pathname === "/") {
      if (role === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url));
      } else if (role === "delivery") {
        return NextResponse.redirect(new URL("/delivery", request.url));
      } else {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }

    if (url.pathname.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (url.pathname.startsWith("/delivery") && role !== "delivery") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    console.log("Error parsing cookie:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin/:path*", "/delivery/:path*", "/"],
};
