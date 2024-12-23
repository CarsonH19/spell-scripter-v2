import { auth } from "@clerk/nextjs/server";

import { eq } from "drizzle-orm";
import db from "./drizzle";
import { players, dungeons } from "./schema";
import { cache } from "react";

export const getPlayerById = cache(async () => {
  const { userId } = await auth(); // Get the logged-in user's ID from Clerk

  if (!userId) {
    return null; // Return null if the user is not authenticated
  }

  const player = await db.query.players.findFirst({
    where: eq(players.clerk_user_id, userId), // Match Clerk's userId with the database field
  });

  return player;
});

export const getDungeonById = cache(async () => {
  const { userId } = await auth(); // Get the logged-in user's ID from Clerk

  if (!userId) {
    return null; // Return null if the user is not authenticated
  }

  const dungeon = await db.query.dungeons.findFirst({
    where: eq(dungeons.clerk_user_id, userId), // Match Clerk's userId with the database field
  });

  return dungeon;
});
