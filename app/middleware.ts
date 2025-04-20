// middleware.ts

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route"; // putanja do vašeg authOptions

export async function middleware(req: Request) {
  const session = await getServerSession(authOptions);

  // Provjerite je li korisnik prijavljen i ima li odgovarajuću ulogu
  if (!session || session.user.role !== "admin") {
    // Ako nije, preusmjerite ga na login stranicu
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Ako je korisnik prijavljen kao admin, dopustite pristup stranici
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/poruke"], // Zaštitite samo ovu stranicu
};
