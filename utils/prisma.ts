// utils/prisma.ts
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

if (!globalForPrisma.prisma) {
  const databaseUrl = process.env.DATABASE_URL ?? "";

  if (databaseUrl.includes("neon.tech")) {
    // NEON konfiguracija
    const { PrismaNeon } = await import("@prisma/adapter-neon");
    const { neonConfig } = await import("@neondatabase/serverless");
    const ws = (await import("ws")).default;

    neonConfig.webSocketConstructor = ws;

    const adapter = new PrismaNeon({ connectionString: databaseUrl });
    prisma = new PrismaClient({ adapter });
  } else {
    // LOKALNA konfiguracija
    prisma = new PrismaClient();
  }

  globalForPrisma.prisma = prisma;
} else {
  prisma = globalForPrisma.prisma;
}

export { prisma };
