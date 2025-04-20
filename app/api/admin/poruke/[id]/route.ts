import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

// Ispod 13.4 verzije, parametri se mogu dobiti direktno iz 'context.params'
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json({ success: false, message: "Invalid ID" }, { status: 400 });
    }
    await prisma.poruka.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Greška u brisanju poruke:", error);
    return NextResponse.json({ success: false, message: "Greška u brisanju poruke" }, { status: 500 });
  }
}
