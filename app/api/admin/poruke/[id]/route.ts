import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
  success: boolean;
  message?: string;
}

export const dynamic = "force-dynamic";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const parsedId = Number(id);

  if (!parsedId || isNaN(parsedId)) {
    return NextResponse.json<ApiResponse>(
      { success: false, message: "Invalid ID" },
      { status: 400 }
    );
  }

  try {
    await prisma.poruka.delete({
      where: { id: parsedId },
    });

    return NextResponse.json<ApiResponse>({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);

    return NextResponse.json<ApiResponse>(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
