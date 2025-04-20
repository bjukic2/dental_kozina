import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { Prisma } from "@prisma/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 5;
  const query = searchParams.get("q");

  const filters: Prisma.porukaWhereInput = {};
  if (query) {
    filters.OR = [
      { ime: { contains: query, mode: "insensitive" } },
      { email: { contains: query, mode: "insensitive" } },
    ];
  }

  try {
    const total = await prisma.poruka.count({
      where: filters,
    });

    const poruke = await prisma.poruka.findMany({
      where: filters,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return NextResponse.json({
      poruke,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (err) {
    console.error("Greška u dohvaćanju poruka:", err);
    return NextResponse.json(
      { success: false, message: "Greška u dohvaćanju poruka" },
      { status: 500 }
    );
  }
}
