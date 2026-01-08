import { prisma } from "@/utils/prisma";
import GalerijaClient from "@/components/GalerijaClient";

export const dynamic = "force-dynamic";

export default async function GalerijaPage() {
  const usporedbe = await prisma.usporedba.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main
      className="
  min-h-screen
  pt-20 px-4 py-8
  bg-[linear-gradient(to_bottom,#030712_0%,#111827_50%,#030712_100%)]
"
    >
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)]">
        <h1 className="text-3xl font-bold mb-8 text-center max-w-5xl mx-auto text-white">
          Galerija osmijeha
        </h1>

        <div className="w-full max-w-5xl">
          <GalerijaClient usporedbe={usporedbe} />
        </div>
      </div>
    </main>
  );
}
