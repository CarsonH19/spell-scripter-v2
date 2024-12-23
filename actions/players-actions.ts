"use server";

// import { getPlayerById } from "@/db/queries";
import { players } from "@/db/schema";
import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import { ConsoleLogWriter, eq } from "drizzle-orm";

export const upsertPlayer = async () => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const existingPlayer = await db.query.players.findFirst({
    where: eq(players.clerk_user_id, userId),
  });

  if (existingPlayer) {
    console.log("Existing Player")
    return existingPlayer;
  }


  console.log("New Player")

  const newPlayer = await db
    .insert(players)
    .values({
      clerk_user_id: userId,
      identifier: "PLAYER",
      name: "Spell Scripter",
      image: "/assets/images/player/player",
      icon: "/assets/images/player/player-1-icon",
      level: 1,
      mastery_points: 0,
      total_mastery_points: 1,
      current_health: 100,
      current_mana: 50,
      stats: {
        baseStrength: 1,
        strength: { totalStrength: 0, attack: 0, maxHealth: 0, healthRegen: 0 },
        baseAgility: 1,
        agility: { totalAgility: 0, defense: 0, speed: 0, hitChance: 0 },
        baseArcana: 1,
        arcana: { totalArcana: 0, spellPower: 0, maxMana: 0, manaRegen: 0 },
      },
      weaknesses: [],
      resistances: [],
      immunities: [],
      spell_list: ["Firebolt"],
      status_effects: [],
      inventory: {
        attunedItems: [],
        equipment: [],
        consumables: [],
        miscItems: [],
      },
      favor: {
        laughingCoffin: 0,
      },
    });

    return JSON.parse(JSON.stringify(newPlayer));
  };
