// import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

// const combatSlice = createSlice({
//   name: "combat",
//   initialState: {
//     order: [],
//     highlightedCharacter: null,
//     isCharacterTurn: null,
//   },
//   reducers: {
//     setInitiative(state, action) {
//       const characters = action.payload.characters;

//       const charactersWithInitiative = characters.map((character) => ({
//         character,
//         initiative:
//           Math.floor(Math.random() * 11) + character.stats.agility.speed,
//       }));

//       charactersWithInitiative.sort((a, b) => b.initiative - a.initiative);

//       const initiativeOrder = charactersWithInitiative.map(
//         (character) => character.character
//       );

//       state.order = initiativeOrder;
//     },
//     initiativeTracker(state, action) {
//       const change = action.payload.change;

//       switch (change) {
//         case "ADD":
//           state.isCharacterTurn = action.payload.id;
//           break;

//         case "REMOVE":
//           state.isCharacterTurn = null;
//           break;
//       }
//     },
//     highlightCharacter(state, action) {
//       state.highlightedCharacter = action.payload;
//     },
//     clearHighlight(state) {
//       state.highlightedCharacter = null;
//     },
//     removeCharacter(state, action) {
//       const character = action.payload.character;

//       const characterIndex = state.order.findIndex(
//         (char) => char.id === character.id
//       );

//       if (characterIndex !== -1) {
//         // Remove the enemy if it exists
//         state.order.splice(characterIndex, 1);
//       }
//     },
//     addCharacter(state, action) {
//       const character = action.payload.character;
//       const alreadyExists = state.order.some(
//         (char) => char.id === character.id
//       );

//       if (!alreadyExists) {
//         state.order.push(character);
//       }
//     },
//     updateStats(state, action) {
//       // Locate character
//       const id = action.payload.id;

//       const findCharacterById = (id) => {
//         const characters = state.order;
//         return characters.find((char) => char.id === id);
//       };

//       const character = findCharacterById(id);

//       // Strength
//       character.stats.strength.totalStrength = action.payload.totalStrength;
//       character.stats.strength.maxHealth = action.payload.maxHealth;
//       character.stats.strength.attack = action.payload.attack;
//       character.stats.strength.healthRegen = action.payload.healthRegen;

//       // Check if current HP is greater than max HP
//       if (character.currentHealth > character.stats.strength.maxHealth) {
//         character.currentHealth = character.stats.strength.maxHealth;
//       }

//       // Agility
//       character.stats.agility.totalAgility = action.payload.totalAgility;
//       character.stats.agility.defense = action.payload.defense;
//       character.stats.agility.speed = action.payload.speed;
//       character.stats.agility.hitChance = action.payload.hitChance;

//       // Arcana
//       character.stats.arcana.totalArcana = action.payload.totalArcana;
//       character.stats.arcana.spellPower = action.payload.spellPower;
//       character.stats.arcana.maxMana = action.payload.maxMana;
//     },
//     updateHealth(state, action) {
//       const change = action.payload.change;
//       let value = action.payload.value;
//       value = Math.round(value);

//       // Locate character
//       const id = action.payload.id;

//       const findCharacterById = (id) => {
//         const characters = state.order;
//         return characters.find((char) => char.id === id);
//       };

//       const character = findCharacterById(id);

//       if (change === "DAMAGE") {
//         character.currentHealth -= value;

//         // Prevents Falling Below 0
//         if (character.currentHealth < 0) {
//           character.currentHealth = 0;
//         }
//       }

//       if (change === "HEAL") {
//         character.currentHealth += value;

//         // Prevents Healing Above Max
//         if (character.currentHealth > character.stats.strength.maxHealth) {
//           character.currentHealth = character.stats.strength.maxHealth;
//         }
//       }

//       if (change == "REPLACE") {
//         character.currentHealth = value;
//       }
//     },
//     updateMana(state, action) {
//       const change = action.payload.change;
//       const value = action.payload.value;

//       const findCharacterById = (id) => {
//         const characters = state.order;
//         return characters.find((char) => char.id === id);
//       };

//       // Find Player in combat order
//       const character = findCharacterById("Player");

//       if (change === "REMOVE") {
//         character.currentMana -= value;

//         // Prevents Falling Below 0
//         if (character.currentMana < 0) {
//           character.currentMana = 0;
//         }
//       }

//       if (change === "ADD") {
//         character.currentMana += value;

//         // Prevents mana above max
//         if (character.currentMana > character.stats.arcana.maxMana) {
//           character.currentMana = character.stats.arcana.maxMana;
//         }
//       }
//     },
//     updateDamageDisplay(state, action) {
//       const { id, content } = action.payload;

//       const findCharacterById = (id) => {
//         const characters = state.order;
//         return characters.find((char) => char.id === id);
//       };

//       const character = findCharacterById(id);

//       const updatedContent = { ...content, id: uuidv4() };
//       character.damageDisplay.push(updatedContent);
//     },
//     removeDamageDisplayItem(state, action) {
//       const { id } = action.payload;

//       const findCharacterById = (id) => {
//         const characters = state.order;
//         return characters.find((char) => char.id === id);
//       };

//       const character = findCharacterById(id);
//       character.damageDisplay.shift();
//     },
//     updateStatusEffects(state, action) {
//       const change = action.payload.change;
//       const statusEffect = action.payload.statusEffect;

//       // Locate character
//       const id = action.payload.id;

//       const findCharacterById = (id) => {
//         const characters = state.order;
//         return characters.find((char) => char.id === id);
//       };

//       const character = findCharacterById(id);

//       switch (change) {
//         case "ADD":
//           character.statusEffects.push(statusEffect);
//           break;
//         case "REMOVE":
//           {
//             const statusIndex = character.statusEffects.findIndex(
//               (effect) => effect.name === statusEffect.name
//             );

//             if (statusIndex !== -1) {
//               character.statusEffects.splice(statusIndex, 1);
//             }
//           }
//           break;
//       }
//     },
//     updateStatusEffectDuration(state, action) {
//       // Locate character
//       const id = action.payload.id;
//       const findCharacterById = (id) => {
//         const characters = state.order;
//         return characters.find((char) => char.id === id);
//       };
//       const character = findCharacterById(id);

//       // Locate Status Effect
//       const name = action.payload.name;
//       const findStatusEffectById = (name) => {
//         return character.statusEffects.find((effect) => effect.name === name);
//       };
//       const statusEffect = findStatusEffectById(name);

//       const change = action.payload.change;
//       switch (change) {
//         case "DECREMENT":
//           statusEffect.duration--;
//           break;

//         case "RESET":
//           const reset = action.payload.reset;
//           statusEffect.duration = reset;
//           break;

//         case "STACK":
//           {
//             // Increment stack
//             statusEffect.stack = statusEffect.stack + 1;
//             //Remove status effect
//             const statusIndex = character.statusEffects.findIndex(
//               (effect) => effect.name === statusEffect.name
//             );
//             if (statusIndex !== -1) {
//               character.statusEffects.splice(statusIndex, 1);
//             }
//             // Add the updated status effect
//             character.statusEffects.push(statusEffect);
//           }
//           break;
//       }
//     },
//     updateCooldown(state, action) {
//       // Locate character
//       const { id, ability, change, reset } = action.payload;
//       const findCharacterById = (id) => {
//         const characters = state.order;
//         return characters.find((char) => char.id === id);
//       };
//       const character = findCharacterById(id);

//       // Access ability
//       switch (change) {
//         case "RESET":
//           character[ability].cooldown = character[ability].reset;
//           break;
//         case "DECREMENT":
//           character[ability].cooldown--;
//           break;
//       }
//     },
//     levelUpHero(state, action) {
//       const { name, map } = action.payload;

//       // Level up the hero object in hero-slice
//       for (let i = 0; i < state.heroes.length; i++) {
//         if (state.heroes[i].name === name) {
//           state.heroes[i].level = map.level;
//           state.heroes[i].stats.baseStrength = map.strength;
//           state.heroes[i].stats.baseAgility = map.agility;
//           state.heroes[i].stats.baseArcana = map.arcana;
//         }
//       }
//     },
//     changePlayerInventory(state, action) {
//       const item = action.payload.item;
//       const change = action.payload.change;
//       const id = item.id;

//       const player = state.order.find((char) => char.id === "Player");

//       switch (change) {
//         case "ADD":
//           {
//             if (item.type === "EQUIPMENT") {
//               player.inventory.equipment.push(item);
//             } else if (item.type === "CONSUMABLE") {
//               player.inventory.consumables.push(item);
//             } else if (item.type === "MISC") {
//               player.inventory.miscItems.push(item);
//             }
//           }
//           break;

//         case "REMOVE":
//           {
//             let itemGroup;
//             if (item.type === "EQUIPMENT") {
//               itemGroup = player.inventory.equipment;
//             } else if (item.type === "CONSUMABLE") {
//               itemGroup = player.inventory.consumables;
//             } else if (item.type === "MISC") {
//               itemGroup = player.inventory.miscItems;
//             }

//             const itemIndex = itemGroup.findIndex((i) => i.id === id);
//             if (itemIndex !== -1) {
//               itemGroup.splice(itemIndex, 1);
//             }
//           }
//           break;
//       }
//     },
//     changePlayerAttunement(state, action) {
//       const item = action.payload.item;
//       const change = action.payload.change;
//       const id = item.id;

//       const player = state.order.find((char) => char.id === "Player");

//       switch (change) {
//         case "ADD": // Attune
//           {
//             if (
//               item.type === "EQUIPMENT" &&
//               player.inventory.attunedItems.length < 5
//             ) {
//               // Add to attunedItems
//               player.inventory.attunedItems.push(item);

//               // Remove from attuned items
//               const itemIndex = player.inventory.equipment.findIndex(
//                 (i) => i.id === id
//               );

//               if (itemIndex !== -1) {
//                 player.inventory.equipment.splice(itemIndex, 1);
//               }
//             }
//           }
//           break;

//         case "REMOVE": // Remove Attunement
//           {
//             // Remove from attuned items
//             const itemIndex = player.inventory.attunedItems.findIndex(
//               (i) => i.id === id
//             );

//             if (itemIndex !== -1) {
//               player.inventory.attunedItems.splice(itemIndex, 1);
//             }

//             // Add to equipment
//             player.inventory.equipment.push(item);
//           }
//           break;
//       }
//     },
//     changeFavor(state, action) {
//       const { change, trader, favor } = action.payload;
//       const player = state.order.find((char) => char.id === "Player");
//       switch (trader) {
//         case "Laughing Coffin":
//           change === "INCREASE"
//             ? (player.favor.laughingCoffin += favor)
//             : (player.favor.laughingCoffin -= favor);
//           break;

//         case "REMOVE":
//           break;
//       }
//     },
//   },
// });

// export const combatActions = combatSlice.actions;

// export default combatSlice;
