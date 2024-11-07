// import { createSlice } from "@reduxjs/toolkit";
// import SPELLS from "../data/spells";

// const playerSlice = createSlice({
//   name: "player",
//   initialState: {
//     name: "Spell Scripter",
//     id: "Player",
//     identifier: "PLAYER",
//     get image() {
//       const imageList = ["/assets/images/player/player-1"];
//       const index = Math.floor(Math.random() * imageList.length);
//       return imageList[index];
//     },
//     get icon() {
//       return `${this.image}-icon`;
//     },
//     damageDisplay: [],
//     audio: {
//       spawn: "",
//       attack: [true, "punch"],
//       death: [true, "fightGrunt"],
//     },
//     level: 1,
//     masteryPoints: 0,
//     totalMasteryPoints: 1,
//     attributePoints: 0,
//     currentHealth: 0,
//     currentMana: 0,
//     stats: {
//       baseStrength: 1,
//       strength: {
//         totalStrength: 0,
//         attack: 0,
//         maxHealth: 0,
//         healthRegen: 0,
//       },
//       baseAgility: 1,
//       agility: {
//         totalAgility: 0,
//         defense: 0,
//         speed: 0,
//         hitChance: 0,
//       },
//       baseArcana: 1,
//       arcana: {
//         totalArcana: 0,
//         spellPower: 0,
//         maxMana: 0,
//         manaRegen: 0,
//       },
//     },
//     weaknesses: [],
//     resistances: [],
//     immunities: [],
//     spellList: ["Firebolt"],
//     statusEffects: [],
//     inventory: {
//       attunedItems: [],
//       equipment: [],
//       consumables: [],
//       miscItems: [],
//     },
//     favor: {
//       laughingCoffin: 0,
//     },
//   },
//   reducers: {
//     updatePlayer(state, action) {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     },
//     checkForLevelUp(state, action) {
//       // Increases mastery & attribute points
//       const { tome } = action.payload;
//       const totalMasteryPoints = tome.reduce(
//         (total, item) => total + (item.mastered ? 1 : 0),
//         1
//       );

//       if (totalMasteryPoints > state.totalMasteryPoints) {
//         state.masteryPoints += totalMasteryPoints - state.totalMasteryPoints;
//         state.totalMasteryPoints = totalMasteryPoints;
//       }

//       // Levels and required mastery points
//       const levelMapping = [
//         { level: 9, requiredPoints: 48 },
//         { level: 8, requiredPoints: 32 },
//         { level: 7, requiredPoints: 24 },
//         { level: 6, requiredPoints: 17 },
//         { level: 5, requiredPoints: 11 },
//         { level: 4, requiredPoints: 7 },
//         { level: 3, requiredPoints: 4 },
//         { level: 2, requiredPoints: 2 },
//       ];

//       for (const { level, requiredPoints } of levelMapping) {
//         if (totalMasteryPoints >= requiredPoints && state.level !== level) {
//           state.level = level;
//           state.attributePoints =
//             state.level +
//             2 -
//             state.stats.baseStrength -
//             state.stats.baseAgility -
//             state.stats.baseArcana;
//           break;
//         }
//       }
//     },
//     changeMasteryPoints(state, action) {
//       const { change, quantity } = action.payload;

//       switch (change) {
//         case "INCREASE":
//           state.masteryPoints += quantity;
//           break;

//         case "DECREASE":
//           state.masteryPoints -= quantity;
//           break;
//       }
//     },
//     changeAttributes(state, action) {
//       const { change, attribute } = action.payload;
//       const attributeMap = {
//         STRENGTH: "baseStrength",
//         AGILITY: "baseAgility",
//         ARCANA: "baseArcana",
//       };

//       const statAttribute = attributeMap[attribute];

//       if (statAttribute) {
//         switch (change) {
//           case "INCREASE":
//             if (state.attributePoints > 0 && state.stats[statAttribute] < 9) {
//               state.stats[statAttribute]++;
//               state.attributePoints--;
//             }
//             break;
//           case "DECREASE":
//             if (state.stats[statAttribute] > 0) {
//               state.stats[statAttribute]--;
//               state.attributePoints++;
//             }
//             break;
//         }
//       }
//     },
//     changeSpellList(state, action) {
//       const { change, spellName, school } = action.payload;

//       switch (change) {
//         case "ADD":
//           state.spellList.push(spellName);
//           break;
//         case "RESET":
//           {
//             const schoolSpells = SPELLS[school].map((spell) => spell.name);
//             state.spellList = state.spellList.filter(
//               (name) => !schoolSpells.includes(name)
//             );
//           }
//           break;
//       }
//     },
//     changeInventory(state, action) {
//       const item = action.payload.item;
//       const change = action.payload.change;
//       const id = item.id;

//       switch (change) {
//         case "ADD":
//           {
//             if (item.type === "EQUIPMENT") {
//               state.inventory.equipment.push(item);
//             } else if (item.type === "CONSUMABLE") {
//               state.inventory.consumables.push(item);
//             } else if (item.type === "MISC") {
//               state.inventory.miscItems.push(item);
//             }
//           }
//           break;

//         case "REMOVE":
//           {
//             let itemGroup;
//             if (item.type === "EQUIPMENT") {
//               itemGroup = state.inventory.equipment;
//             } else if (item.type === "CONSUMABLE") {
//               itemGroup = state.inventory.consumables;
//             } else if (item.type === "MISC") {
//               itemGroup = state.inventory.miscItems;
//             }

//             const itemIndex = itemGroup.findIndex((i) => i.id === id);
//             if (itemIndex !== -1) {
//               itemGroup.splice(itemIndex, 1);
//             }
//           }
//           break;
//       }
//     },
//     changeAttunement(state, action) {
//       const item = action.payload.item;
//       const change = action.payload.change;
//       const id = item.id;

//       switch (change) {
//         case "ADD": // Attune
//           {
//             if (
//               item.type === "EQUIPMENT" &&
//               state.inventory.attunedItems.length < 5
//             ) {
//               // Add to attunedItems
//               state.inventory.attunedItems.push(item);

//               // Remove from attuned items
//               const itemIndex = state.inventory.equipment.findIndex(
//                 (i) => i.id === id
//               );

//               if (itemIndex !== -1) {
//                 state.inventory.equipment.splice(itemIndex, 1);
//               }
//             }
//           }
//           break;

//         case "REMOVE": // Remove Attunement
//           {
//             // Remove from attuned items
//             const itemIndex = state.inventory.attunedItems.findIndex(
//               (i) => i.id === id
//             );

//             if (itemIndex !== -1) {
//               state.inventory.attunedItems.splice(itemIndex, 1);
//             }

//             // Add to equipment
//             state.inventory.equipment.push(item);
//           }
//           break;
//       }
//     },
//     updateStatusEffects(state, action) {
//       const change = action.payload.change;
//       const statusEffect = action.payload.statusEffect;

//       switch (change) {
//         case "ADD":
//           state.statusEffects.push(statusEffect);
//           break;
//         case "REMOVE":
//           {
//             const statusIndex = state.statusEffects.findIndex(
//               (effect) => effect.name === statusEffect.name
//             );

//             if (statusIndex !== -1) {
//               state.statusEffects.splice(statusIndex, 1);
//             }
//           }
//           break;
//       }
//     },
//     updateStats(state, action) {
//       // Strength
//       state.stats.strength.totalStrength = action.payload.totalStrength;
//       state.stats.strength.maxHealth = action.payload.maxHealth;
//       state.stats.strength.attack = action.payload.attack;
//       state.stats.strength.healthRegen = action.payload.healthRegen;

//       // Check if current HP is greater than max HP
//       if (state.currentHealth > state.stats.strength.maxHealth) {
//         state.currentHealth = state.stats.strength.maxHealth;
//       }

//       // Agility
//       state.stats.agility.totalAgility = action.payload.totalAgility;
//       state.stats.agility.defense = action.payload.defense;
//       state.stats.agility.speed = action.payload.speed;
//       state.stats.agility.hitChance = action.payload.hitChance;

//       // Arcana
//       state.stats.arcana.totalArcana = action.payload.totalArcana;
//       state.stats.arcana.spellPower = action.payload.spellPower;
//       state.stats.arcana.maxMana = action.payload.maxMana;
//       state.stats.arcana.manaRegen = action.payload.manaRegen;
//     },
//   },
// });

// export const playerActions = playerSlice.actions;

// export default playerSlice;
