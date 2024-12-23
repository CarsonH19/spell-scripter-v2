import { pgTable, text, integer, boolean, json } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Players table
export const players = pgTable("players", {
  clerk_user_id: text("clerk_user_id").notNull().unique(),
  name: text("name").notNull(), // Player's display name
  identifier: text("identifier").notNull(), // Identifier like "PLAYER"
  image: text("image").notNull(), // Player's avatar image
  icon: text("icon").notNull(), // Player's icon
  level: integer("level").notNull(), // Player's level
  mastery_points: integer("mastery_points").notNull(), // Mastery points
  total_mastery_points: integer("total_mastery_points").notNull(),
  current_health: integer("current_health").notNull(), // Current health
  current_mana: integer("current_mana").notNull(), // Current mana
  stats: json("stats").notNull(), // Player stats (JSON)
  weaknesses: json("weaknesses").notNull(), // Weaknesses
  resistances: json("resistances").notNull(), // Resistances
  immunities: json("immunities").notNull(), // Immunities
  spell_list: json("spell_list").notNull(), // List of spells
  status_effects: json("status_effects").notNull(), // Active status effects
  inventory: json("inventory").notNull(), // Player inventory
  favor: json("favor").notNull(), // Favor system for factions or NPCs
});

// Dungeons table
export const dungeons = pgTable("dungeons", {
  clerk_user_id: text("clerk_user_id").notNull().unique(),
  name: text("name").notNull(), // Dungeon name
  following: json("following").notNull(), // Dungeon following state
  follow_counter: integer("follow_counter").notNull(),
  path: json("path").notNull(), // Current path the player is on
  path_counter: integer("path_counter").notNull(),
  room_counter: integer("room_counter").notNull(), // Current room count
  threat: integer("threat").notNull(), // Threat level
  danger: boolean("danger").notNull(), // Danger flag
  image: text("image").notNull(), // Dungeon background image
  music: text("music").notNull(), // Dungeon music
  contents: json("contents").notNull(), // Enemies, items, events in the dungeon
});

export const playersRelations = relations(players, ({ one }) => ({
  dungeon: one(dungeons, {
    fields: [players.clerk_user_id], // Using clerk_user_id instead of players.id
    references: [dungeons.clerk_user_id], // Linking to the correct field
  }),
}));

export const dungeonsRelations = relations(dungeons, ({ one }) => ({
  player: one(players, {
    fields: [dungeons.clerk_user_id], // Linking to the correct clerk_user_id
    references: [players.clerk_user_id], // Using clerk_user_id for relationship
  }),
}));
