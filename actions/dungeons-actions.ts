"use server";

import { dungeons } from "@/db/schema";
import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const upsertDungeon = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const existingDungeon = await db.query.dungeons.findFirst({
    where: eq(dungeons.clerk_user_id, userId),
  });

  if (existingDungeon) {
    console.log("Existing Dungeon");
    return existingDungeon;
  }

  console.log("New Dungeon");

  const newDungeon = await db.insert(dungeons).values({
    clerk_user_id: userId, // Ensure it's passed as string
    name: "New Dungeon", // Default dungeon name
    following: [], // Ensure this matches JSON type
    follow_counter: 0, // Ensure type matches integer
    path: [], // Ensure this is an array (or JSON object) type as expected
    path_counter: 0, // Ensure type matches integer
    room_counter: 0, // Ensure type matches integer
    threat: -1, // Ensure type matches integer
    danger: false, // Ensure type matches boolean
    image: "/assets/images/backgrounds/the-great-catacomb/catacomb-entrance", // Default image path
    music: "/assets/audio/music/threeThousandYearsOld.mp3", // Default music path
    contents: [], // Ensure this is an array (or JSON object) type as expected
  });

  return JSON.parse(JSON.stringify(newDungeon));
};
