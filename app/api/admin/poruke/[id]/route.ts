import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function DELETE(_: NextRequest, { params }: { params: Params }) {
  const id = parseInt(params.id);
  await prisma.poruka.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
