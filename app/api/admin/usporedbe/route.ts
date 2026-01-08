import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const usporedbe = await prisma.usporedba.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(usporedbe);
}
