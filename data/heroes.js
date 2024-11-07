// import { getImageFromList } from "../util/misc-util";

// // PALADIN
// let siggurd = {
//   name: "Siggurd",
//   id: "Siggurd",
//   unlocked: false,
//   identifier: "HERO",
//   get image() {
//     const imageList = ["src/assets/images/heroes/siggurd"];
//     const index = Math.floor(Math.random() * imageList.length);
//     return imageList[index];
//   },
//   get icon() {
//     return `${this.image}-icon`;
//   },
//   // audio: {},
//   level: 1,
//   currentHealth: 0,
//   stats: {
//     baseStrength: 2,
//     baseAgility: 0,
//     baseArcana: 1,
//   },
//   behavior: "DOMINANT",
//   passive: {
//     name: "Radiant Aura",
//     description: `Undead enemies have their Defense reduced while in the presence of Siggurd.`,
//     when: "START_OF_ROUND",
//     function: "RADIANT_AURA",
//   },
//   abilityA: {
//     name: "Holy Smite",
//     description: `Siggurd smites an enemy dealing Radiant Damage equal to his Attack plus double his Spell Power.`,
//     cooldown: 3,
//     reset: 3,
//     focus: "HIGHEST_HEALTH",
//     function: "HOLY_SMITE",
//   },
//   abilityB: {
//     name: "Divine Guardian",
//     description: `Siggurd becomes a guardian for an ally. While this ability is active all damage dealt to the ally is redirected to Siggurd instead.`,
//     cooldown: 9,
//     reset: 9,
//     focus: "HEROES",
//     function: "DIVINE_GUARDIAN",
//   },
//   weaknesses: [],
//   resistances: [],
//   immunities: [],
//   statusEffects: [],
// };

// // ROGUE
// let riven = {
//   name: "Riven",
//   id: "Riven",
//   unlocked: false,
//   identifier: "HERO",
//   get image() {
//     const imageList = ["src/assets/images/heroes/grave-robber"];
//     const index = Math.floor(Math.random() * imageList.length);
//     return imageList[index];
//   },
//   get icon() {
//     return `${this.image}-icon`;
//   },
//   // audio: {},
//   level: 1,
//   currentHealth: 0,
//   stats: {
//     baseStrength: 1,
//     baseAgility: 2,
//     baseArcana: 0,
//   },
//   behavior: "RUTHLESS",
//   passive: {
//     name: "Loot Sense",
//     description:
//       "While a member of your party, your chance to loot items is increased by 5%.",
//     when: "OUTSIDE_COMBAT",
//     function: "LOOT_SENSE",
//   },
//   abilityA: {
//     name: "Venom Strike",
//     description: `Riven deals damage to an enemy equal to his Attack and inflicts the Poisoned condition.`,
//     cooldown: 3,
//     reset: 3,
//     focus: "LOWEST_HEALTH",
//     function: "VENOM_STRIKE",
//   },
//   abilityB: {
//     name: "Smoke Bomb",
//     description: `Riven throws a smoke bomb which obstructs the vision of all enemies, reducing their Hit Chance by 2.`,
//     cooldown: 9,
//     reset: 9,
//     focus: "ENEMIES",
//     function: "SMOKE_BOMB",
//   },
//   weaknesses: [],
//   resistances: [],
//   immunities: [],
//   statusEffects: [],
// };

// // PRIESTESS
// let liheth = {
//   name: "Liheth",
//   id: "Liheth",
//   unlocked: false,
//   identifier: "HERO",
//   get image() {
//     const imageList = ["src/assets/images/heroes/liheth"];
//     const index = Math.floor(Math.random() * imageList.length);
//     return imageList[index];
//   },
//   get icon() {
//     return `${this.image}-icon`;
//   },
//   level: 7,
//   currentHealth: 0,
//   stats: {
//     baseStrength: 0,
//     baseAgility: 1,
//     baseArcana: 2,
//   },
//   behavior: "SUPPORTIVE",
//   passive: {
//     name: "Burning Devotion",
//     description: `Liheth's Attack deals Fire damage and has a 10% chance to inflict the Burning condition.`,
//     when: "DURING_COMBAT",
//     function: "BURNING_DEVOTION",
//   },
//   abilityA: {
//     name: "Cleansing Flame",
//     description: `Liheth's flames cleanse an ally. Removing a debuff and healing them for an amount equal to her Spell Power.`,
//     cooldown: 0,
//     reset: 4,
//     focus: "HEROES",
//     function: "CLEANSING_FLAME",
//   },
//   abilityB: {
//     name: "Undying Flame",
//     description: `Liheth blesses an ally with the undying flame. While this ability is active, if the ally falls below 0HP, they do not die but instead are revived to half of their max hit points.`,
//     cooldown: 0,
//     reset: 20,
//     focus: "LOWEST_HEALTH",
//     function: "UNDYING_FLAME",
//   },
//   weaknesses: [],
//   resistances: [],
//   immunities: [],
//   statusEffects: [],
// };

// // WARLOCK
// // EVOKER
// // RISEN


