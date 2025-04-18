import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET() {
    const poruke = await prisma.poruka.findMany({
        orderBy: { createdAt: "desc" },
    });
    
    return NextResponse.json(poruke);
}