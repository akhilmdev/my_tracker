import { db } from "@/db";
import type { Affermations } from "@prisma/client";
export type getAffermationType = Awaited<ReturnType<typeof getAffermation>>;

export async function getAffermation(): Promise<Affermations | null> {
  const count = await db.affermations.count();
  
  return db.affermations.findFirst({
    take: 1,
    skip: Math.floor(Math.random() * count || 0),
  });
}
