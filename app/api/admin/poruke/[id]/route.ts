import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    await prisma.poruka.delete({ where: { id }});
    
    return NextResponse.json({ success: true });
}