// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token")?.value
    || req.cookies.get("__Secure-next-auth.session-token")?.value; // za secure context (https)

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    // Proveri ulogu korisnika
    if (payload.role !== "admin") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // OK – pusti dalje
    return NextResponse.next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/poruke/:path*"], // obuhvati i podstranice ako ih ima
};
