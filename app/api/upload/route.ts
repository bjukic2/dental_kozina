import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { uploadToCloudinary } from "@/utils/cloudinary";

export const dynamic = "force-dynamic"; // za development

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const naziv = formData.get("naziv") as string;
  const opis = formData.get("opis") as string;
  const prijeImage = formData.get("prijeImage") as Blob | null;
  const poslijeImage = formData.get("poslijeImage") as Blob | null;

  if (!naziv || !prijeImage || !poslijeImage) {
    return NextResponse.json(
      { success: false, message: "Missing fields" },
      { status: 400 }
    );
  }

  try {
    const prijeUrl = await uploadToCloudinary(prijeImage);
    const poslijeUrl = await uploadToCloudinary(poslijeImage);

    await prisma.usporedba.create({
      data: {
        naziv,
        opis,
        prijeUrl,
        poslijeUrl,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
