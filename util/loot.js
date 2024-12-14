import store from "../store/index";

import { v4 as uuidv4 } from "uuid";

import { dungeonActions } from "../store/dungeon-slice";

import CONSUMABLES from "../data/consumables";
import EQUIPMENT from "../data/equipment";
import MISC_ITEMS from "../data/misc-items";

export default function loot(dispatch, enemy) {
  const lootTable = enemy.lootTable;

  // Exit function if defeated character isn't an enemy
  if (enemy.identifier !== "ENEMY") {
    return;
  }

  // Determines the enemies loot
  const enemyloot = calculateLoot(lootTable);

  if (enemyloot) {
    // Add loot to dungeon-slice items array
    dispatch(dungeonActions.addItem(enemyloot));
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getRandomLoot(dispatch) {
  const dungeon = store.getState().dungeon;
  let lootTable = [];

  // Check Threat
  if (dungeon.threat > 60) {
    // Add items
  } else if (dungeon.threat > 40) {
    // Add items
  } else if (dungeon.threat > 20) {
    // Add items
  }

  // Check Path
  // switch (dungeon.path.name) {
  //   case "Wailing Warrens":
  //     break;

  //   default:
  //     break;
  // }

  // Check Event
  switch (dungeon.contents.event.name) {
    case "Bonevault":
      // NOTE - Check threat to determine more difficult bonevaults w/ different loot
      lootTable = [
        { item: EQUIPMENT.RATTLEBONE_CHESTPLATE, probability: 0.1 },
        { item: EQUIPMENT.RATTLEBONE_GAUNTLETS, probability: 0.1 },
        { item: EQUIPMENT.RATTLEBONE_HELMET, probability: 0.1 },
        { item: EQUIPMENT.RATTLEBONE_WHISTLE, probability: 0.05 },
        { item: EQUIPMENT.SOULREAVER, probability: 0.05 },
        { item: EQUIPMENT.REVENANTS_RAGE, probability: 0.05 },
        { item: EQUIPMENT.SKULLBREAKER_HELM, probability: 0.05 },
        { item: EQUIPMENT.SPINE_OF_THE_NECROMANCER, probability: 0.025 },
        { item: EQUIPMENT.TOMBSTONE_DEFENDER, probability: 0.025 },
        { item: null, probability: 0.45 },
      ];
      break;

    case "Coffin":
      lootTable = [
        { item: CONSUMABLES.CRYPTBREAD, probability: 0.1 },
        { item: CONSUMABLES.MARROWSTONE_CHEESE, probability: 0.1 },
        { item: CONSUMABLES.HEALTH_POTION, probability: 0.1 },
        { item: CONSUMABLES.MANA_POTION, probability: 0.1 },
        { item: CONSUMABLES.SKELETON_KEY, probability: 0.02 },
        { item: EQUIPMENT.EVERTORCH, probability: 0.05 },
        { item: EQUIPMENT.SUNSTONE, probability: 0.05 },
        { item: EQUIPMENT.CURSED_MIRROR, probability: 0.02 },
        { item: EQUIPMENT.PLAUGEWARD_PENDANT, probability: 0.02 },
        { item: EQUIPMENT.GHOSTSHROUD_TALISMAN, probability: 0.02 },
        { item: EQUIPMENT.CHILLBREAKER_BAND, probability: 0.02 },
        { item: null, probability: 0.4 },
      ];
      break;

    case "Unlocking Liheth":
    case "Candlelight Shrine":
      lootTable = [
        { item: CONSUMABLES.WARDING_CANDLE, probability: 0.167 },
        { item: CONSUMABLES.SOOTHING_CANDLE, probability: 0.167 },
        { item: CONSUMABLES.CALMING_CANDLE, probability: 0.167 },
        { item: CONSUMABLES.INVOKING_CANDLE, probability: 0.167 },
        { item: CONSUMABLES.FLICKERING_CANDLE, probability: 0.167 },
        { item: CONSUMABLES.BLAZING_CANDLE, probability: 0.167 },
      ];
      break;

    case "Ambush": {
      lootTable = [
        { item: MISC_ITEMS.THIEVES_RUIN_MAP, probability: 0.99 },
        { item: null, probability: 0.01 },
      ];
    }
    // add map

    default:
      break;
  }

  // Determines the events loot
  const loot = calculateLoot(lootTable);
  if (loot) {
    // Add loot to dungeon-slice items array
    dispatch(dungeonActions.addItem(loot));
  }
}

function calculateLoot(lootTable) {
  const order = store.getState().combat.order;
  const randomNumber = Math.random();
  let totalProbability = 0;

  // PASSIVE - Riven
  const isRivenFound = order.some((hero) => hero.name === "Riven");
  if (isRivenFound) {
    totalProbability += 0.05;
  }

  // Shuffle the loot table to ensure equal chances
  const shuffledLootTable = shuffle([...lootTable]);

  for (const lootEntry of shuffledLootTable) {
    totalProbability += lootEntry.probability;
    // console.log("NUMBER", randomNumber);
    // console.log("PROBABILITY", totalProbability);
    if (randomNumber < totalProbability) {
      if (lootEntry.item) {
        // console.log("LOOT TABLE", shuffledLootTable);
        // console.log("LOOT", lootEntry.item);

        return { ...lootEntry.item, id: uuidv4() };
      }
      return; // Exit function when an item is found or nothing is dropped
    }
  }
}
