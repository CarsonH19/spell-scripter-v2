import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SPELLS from "@/data/spells";

interface AudioState {
  spawn: string;
  attack: [boolean, string];
  death: [boolean, string];
}

interface StrengthStats {
  totalStrength: number;
  attack: number;
  maxHealth: number;
  healthRegen: number;
}

interface AgilityStats {
  totalAgility: number;
  defense: number;
  speed: number;
  hitChance: number;
}

interface ArcanaStats {
  totalArcana: number;
  spellPower: number;
  maxMana: number;
  manaRegen: number;
}

interface PlayerStats {
  baseStrength: number;
  strength: StrengthStats;
  baseAgility: number;
  agility: AgilityStats;
  baseArcana: number;
  arcana: ArcanaStats;
}

interface InventoryItem {
  id: string;
  type: "EQUIPMENT" | "CONSUMABLE" | "MISC";
}

interface Inventory {
  attunedItems: InventoryItem[];
  equipment: InventoryItem[];
  consumables: InventoryItem[];
  miscItems: InventoryItem[];
}

interface PlayerState {
  name: string;
  id: string;
  identifier: string;
  image: string;
  icon: string;
  damageDisplay: any[];
  audio: AudioState;
  level: number;
  masteryPoints: number;
  totalMasteryPoints: number;
  attributePoints: number;
  currentHealth: number;
  currentMana: number;
  stats: PlayerStats;
  weaknesses: string[];
  resistances: string[];
  immunities: string[];
  spellList: string[];
  statusEffects: any[];
  inventory: Inventory;
  favor: Record<string, number>;
}

const initialState: PlayerState = {
  name: "Spell Scripter",
  id: "Player",
  identifier: "PLAYER",
  get image() {
    const imageList = ["/assets/images/player/player-1"];
    const index = Math.floor(Math.random() * imageList.length);
    return imageList[index];
  },
  get icon() {
    return `${this.image}-icon`;
  },
  damageDisplay: [],
  audio: {
    spawn: "",
    attack: [true, "punch"],
    death: [true, "fightGrunt"],
  },
  level: 9,
  masteryPoints: 0,
  totalMasteryPoints: 1,
  attributePoints: 0,
  currentHealth: 0,
  currentMana: 0,
  stats: {
    baseStrength: 1,
    strength: {
      totalStrength: 0,
      attack: 0,
      maxHealth: 0,
      healthRegen: 0,
    },
    baseAgility: 1,
    agility: {
      totalAgility: 0,
      defense: 0,
      speed: 0,
      hitChance: 0,
    },
    baseArcana: 9,
    arcana: {
      totalArcana: 0,
      spellPower: 0,
      maxMana: 0,
      manaRegen: 0,
    },
  },
  weaknesses: [],
  resistances: [],
  immunities: [],
  spellList: ["Firebolt"],
  statusEffects: [],
  inventory: {
    attunedItems: [],
    equipment: [],
    consumables: [],
    miscItems: [],
  },
  favor: {
    laughingCoffin: 0,
  },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    updatePlayer(state, action: PayloadAction<Partial<PlayerState>>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    checkForLevelUp(
      state,
      action: PayloadAction<{ tome: { mastered: boolean }[] }>
    ) {
      const { tome } = action.payload;
      const totalMasteryPoints = tome.reduce(
        (total, item) => total + (item.mastered ? 1 : 0),
        1
      );

      if (totalMasteryPoints > state.totalMasteryPoints) {
        state.masteryPoints += totalMasteryPoints - state.totalMasteryPoints;
        state.totalMasteryPoints = totalMasteryPoints;
      }

      const levelMapping = [
        { level: 9, requiredPoints: 48 },
        { level: 8, requiredPoints: 32 },
        { level: 7, requiredPoints: 24 },
        { level: 6, requiredPoints: 17 },
        { level: 5, requiredPoints: 11 },
        { level: 4, requiredPoints: 7 },
        { level: 3, requiredPoints: 4 },
        { level: 2, requiredPoints: 2 },
      ];

      for (const { level, requiredPoints } of levelMapping) {
        if (totalMasteryPoints >= requiredPoints && state.level !== level) {
          state.level = level;
          state.attributePoints =
            state.level +
            2 -
            state.stats.baseStrength -
            state.stats.baseAgility -
            state.stats.baseArcana;
          break;
        }
      }
    },
    changeMasteryPoints(
      state,
      action: PayloadAction<{
        change: "INCREASE" | "DECREASE";
        quantity: number;
      }>
    ) {
      const { change, quantity } = action.payload;

      switch (change) {
        case "INCREASE":
          state.masteryPoints += quantity;
          break;
        case "DECREASE":
          state.masteryPoints -= quantity;
          break;
      }
    },
    changeAttributes(
      state,
      action: PayloadAction<{
        change: "INCREASE" | "DECREASE";
        attribute: "STRENGTH" | "AGILITY" | "ARCANA";
      }>
    ) {
      const { change, attribute } = action.payload;
      const attributeMap: Record<string, keyof PlayerStats> = {
        STRENGTH: "baseStrength",
        AGILITY: "baseAgility",
        ARCANA: "baseArcana",
      };

      const statAttribute = attributeMap[attribute];

      if (statAttribute) {
        switch (change) {
          case "INCREASE":
            if (state.attributePoints > 0 && state.stats[statAttribute] < 9) {
              state.stats[statAttribute]++;
              state.attributePoints--;
            }
            break;
          case "DECREASE":
            if (state.stats[statAttribute] > 0) {
              state.stats[statAttribute]--;
              state.attributePoints++;
            }
            break;
        }
      }
    },
    changeSpellList(
      state,
      action: PayloadAction<{
        change: "ADD" | "RESET";
        spellName?: string;
        school?: string;
      }>
    ) {
      const { change, spellName, school } = action.payload;

      switch (change) {
        case "ADD":
          if (spellName) {
            state.spellList.push(spellName);
          }
          break;
        case "RESET":
          if (school) {
            const schoolSpells = SPELLS[school].map((spell: any) => spell.name);
            state.spellList = state.spellList.filter(
              (name) => !schoolSpells.includes(name)
            );
          }
          break;
      }
    },
    changeInventory(
      state,
      action: PayloadAction<{ item: InventoryItem; change: "ADD" | "REMOVE" }>
    ) {
      const { item, change } = action.payload;
      const id = item.id;

      switch (change) {
        case "ADD":
          if (item.type === "EQUIPMENT") {
            state.inventory.equipment.push(item);
          } else if (item.type === "CONSUMABLE") {
            state.inventory.consumables.push(item);
          } else if (item.type === "MISC") {
            state.inventory.miscItems.push(item);
          }
          break;

        case "REMOVE":
          let itemGroup;
          if (item.type === "EQUIPMENT") {
            itemGroup = state.inventory.equipment;
          } else if (item.type === "CONSUMABLE") {
            itemGroup = state.inventory.consumables;
          } else if (item.type === "MISC") {
            itemGroup = state.inventory.miscItems;
          }

          const itemIndex = itemGroup?.findIndex((i) => i.id === id);
          if (itemIndex !== undefined && itemIndex !== -1) {
            itemGroup.splice(itemIndex, 1);
          }
          break;
      }
    },
    changeAttunement(
      state,
      action: PayloadAction<{ item: InventoryItem; change: "ADD" | "REMOVE" }>
    ) {
      const { item, change } = action.payload;
      const id = item.id;

      switch (change) {
        case "ADD":
          if (
            item.type === "EQUIPMENT" &&
            state.inventory.attunedItems.length < 5
          ) {
            state.inventory.attunedItems.push(item);
            const itemIndex = state.inventory.equipment.findIndex(
              (i) => i.id === id
            );
            if (itemIndex !== -1) {
              state.inventory.equipment.splice(itemIndex, 1);
            }
          }
          break;

        case "REMOVE":
          const itemIndex = state.inventory.attunedItems.findIndex(
            (i) => i.id === id
          );
          if (itemIndex !== -1) {
            state.inventory.attunedItems.splice(itemIndex, 1);
          }
          state.inventory.equipment.push(item);
          break;
      }
    },
    updateStatusEffects(
      state,
      action: PayloadAction<{ change: "ADD" | "REMOVE"; statusEffect: any }>
    ) {
      const { change, statusEffect } = action.payload;

      switch (change) {
        case "ADD":
          state.statusEffects.push(statusEffect);
          break;
        case "REMOVE":
          const statusIndex = state.statusEffects.findIndex(
            (effect) => effect.name === statusEffect.name
          );
          if (statusIndex !== -1) {
            state.statusEffects.splice(statusIndex, 1);
          }
          break;
      }
    },
    updateStats(
      state,
      action: PayloadAction<{
        totalStrength: number;
        maxHealth: number;
        attack: number;
        healthRegen: number;
        totalAgility: number;
        defense: number;
        speed: number;
        hitChance: number;
        totalArcana: number;
        spellPower: number;
        maxMana: number;
        manaRegen: number;
      }>
    ) {
      state.stats.strength.totalStrength = action.payload.totalStrength;
      state.stats.strength.maxHealth = action.payload.maxHealth;
      state.stats.strength.attack = action.payload.attack;
      state.stats.strength.healthRegen = action.payload.healthRegen;

      if (state.currentHealth > state.stats.strength.maxHealth) {
        state.currentHealth = state.stats.strength.maxHealth;
      }

      state.stats.agility.totalAgility = action.payload.totalAgility;
      state.stats.agility.defense = action.payload.defense;
      state.stats.agility.speed = action.payload.speed;
      state.stats.agility.hitChance = action.payload.hitChance;

      state.stats.arcana.totalArcana = action.payload.totalArcana;
      state.stats.arcana.spellPower = action.payload.spellPower;
      state.stats.arcana.maxMana = action.payload.maxMana;
      state.stats.arcana.manaRegen = action.payload.manaRegen;

      if (state.currentMana > state.stats.arcana.maxMana) {
        state.currentMana = state.stats.arcana.maxMana;
      }
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice.reducer;
