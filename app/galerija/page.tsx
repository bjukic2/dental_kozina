import { prisma } from "@/utils/prisma";
import GalerijaClient from "@/components/GalerijaClient";

export const dynamic = "force-dynamic";

export default async function GalerijaPage() {
  const usporedbe = await prisma.usporedba.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center max-w-5xl mx-auto">
        Galerija osmijeha
      </h1>
      <GalerijaClient usporedbe={usporedbe} />
    </div>
  );
}
