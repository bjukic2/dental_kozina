import { prisma } from "@/utils/prisma";
import GalerijaClient from "@/components/GalerijaClient";

export const dynamic = "force-dynamic";

export default async function GalerijaPage() {
  const usporedbe = await prisma.usporedba.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="px-4 py-8 bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)]">
      <h1 className="text-3xl font-bold mb-8 text-center max-w-5xl mx-auto text-white">
        Galerija osmijeha
      </h1>
      <GalerijaClient usporedbe={usporedbe} />
    </div>
  );
}
