import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL!;

// Napravi adapter
const adapter = new PrismaNeon({ connectionString });

// Cache kao globalna varijabla
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Napravi instancu PrismaClient s adapterom
const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter: adapter as any }); // <- dodan `as any`

// Cache samo u developmentu
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };
