import store from "@/store/index";

import { v4 as uuidv4 } from "uuid";
import { shuffle } from "../misc-util";
import { constructStats } from "@/util/misc-util";

import { THIEVES, UNDEAD } from "../../data/enemies";

// =====================================================================
//                                ENEMIES
// =====================================================================

export function getRoomEnemies() {
  // const dungeon = store.getState().dungeon;
  const threat = store.getState().dungeon.threat;
  let enemiesArray = [];
  let enemyTypes;
  let numberOfEnemies;

  enemyTypes = [
    { enemy: UNDEAD.DECREPIT_SKELETON, probability: 0.7 },
    { enemy: UNDEAD.SKELETAL_WARRIOR, probability: 0.1 },
    { enemy: UNDEAD.SKELETAL_ARCHER, probability: 0.1 },
    { enemy: UNDEAD.SKELETAL_MAGE, probability: 0.1 },
  ];

  // Adjust enemy types based on threat level
  if (threat > 60) {
    // extremely high tier enemies
    enemyTypes = [
      { enemy: UNDEAD.GRAVE_WITCH, probability: 0.2 },
      { enemy: UNDEAD.BONE_TITAN, probability: 0.3 },
      { enemy: UNDEAD.REAPER, probability: 0.3 },
      { enemy: UNDEAD.DEATH_KNIGHT, probability: 0.1 },
      { enemy: UNDEAD.FLOOD_OF_BONES, probability: 0.1 },
    ];
  } else if (threat > 40) {
    // high tier enemies
    enemyTypes = [
      { enemy: UNDEAD.GRAVE_WITCH, probability: 0.1 },
      { enemy: UNDEAD.BONE_TITAN, probability: 0.3 },
      { enemy: UNDEAD.REAPER, probability: 0.3 },
      { enemy: UNDEAD.CORPSE_ORACLE, probability: 0.2 },
    ];
  } else if (threat > 20) {
    // mid tier enemies
    enemyTypes = [
      { enemy: UNDEAD.BONE_TITAN, probability: 0.1 },
      { enemy: UNDEAD.REAPER, probability: 0.1 },
      { enemy: UNDEAD.CORPSE_ORACLE, probability: 0.2 },
      { enemy: UNDEAD.SKELETAL_WARRIOR, probability: 0.2 },
      { enemy: UNDEAD.SKELETAL_ARCHER, probability: 0.2 },
      { enemy: UNDEAD.SKELETAL_MAGE, probability: 0.2 },
    ];
  }

  // Calculate the number of enemies based on the threat level
  numberOfEnemies = 0;
  if (threat >= 80) {
    numberOfEnemies = 5;
  } else if (threat >= 60) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 4; // Between 4 to 5 enemies
  } else if (threat >= 40) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 3; // Between 3 to 4 enemies
  } else if (threat >= 20) {
    numberOfEnemies = Math.floor(Math.random() * 2) + 2; // Between 2 to 3 enemies
  } else {
    numberOfEnemies = Math.floor(Math.random() * 2) + 1; // Between 1 to 2 enemies
  }

  // FIX: Old path logic
  // switch (dungeon.path) {
  //   case "Wailing Warrens":
  //     {
  //       // QUEST - Siggurd - 2
  //       if (
  //         checkForActiveQuest("Siggurd", "Wails of the Banshee") &&
  //         dungeon.pathCounter === 1
  //       ) {
  //         enemyTypes = [{ enemy: UNDEAD.BANSHEE, probability: 1 }];
  //         numberOfEnemies = 1;
  //       } else {
  //         enemyTypes = [
  //           { enemy: UNDEAD.WANDERING_WISP, probability: 0.1 },
  //           { enemy: UNDEAD.SHADOW, probability: 0.9 },
  //         ];
  //         numberOfEnemies = 2;
  //       }
  //     }
  //     break;

  //   case "Thieves' Ruin":
  //     {
  //       enemyTypes = [{ enemy: THIEVES.THIEF, probability: 1 }];
  //       numberOfEnemies = Math.ceil(Math.random() * 3);
  //     }
  //     break;

  //   default:
  //     {
  //       enemyTypes = [
  //         { enemy: UNDEAD.DECREPIT_SKELETON, probability: 0.7 },
  //         { enemy: UNDEAD.SKELETAL_WARRIOR, probability: 0.1 },
  //         { enemy: UNDEAD.SKELETAL_ARCHER, probability: 0.1 },
  //         { enemy: UNDEAD.SKELETAL_MAGE, probability: 0.1 },
  //       ];

  //       // Adjust enemy types based on threat level
  //       if (threat > 60) {
  //         // extremely high tier enemies
  //         enemyTypes = [
  //           { enemy: UNDEAD.GRAVE_WITCH, probability: 0.2 },
  //           { enemy: UNDEAD.BONE_TITAN, probability: 0.3 },
  //           { enemy: UNDEAD.REAPER, probability: 0.3 },
  //           { enemy: UNDEAD.DEATH_KNIGHT, probability: 0.1 },
  //           { enemy: UNDEAD.FLOOD_OF_BONES, probability: 0.1 },
  //         ];
  //       } else if (threat > 40) {
  //         // high tier enemies
  //         enemyTypes = [
  //           { enemy: UNDEAD.GRAVE_WITCH, probability: 0.1 },
  //           { enemy: UNDEAD.BONE_TITAN, probability: 0.3 },
  //           { enemy: UNDEAD.REAPER, probability: 0.3 },
  //           { enemy: UNDEAD.CORPSE_ORACLE, probability: 0.2 },
  //         ];
  //       } else if (threat > 20) {
  //         // mid tier enemies
  //         enemyTypes = [
  //           { enemy: UNDEAD.BONE_TITAN, probability: 0.1 },
  //           { enemy: UNDEAD.REAPER, probability: 0.1 },
  //           { enemy: UNDEAD.CORPSE_ORACLE, probability: 0.2 },
  //           { enemy: UNDEAD.SKELETAL_WARRIOR, probability: 0.2 },
  //           { enemy: UNDEAD.SKELETAL_ARCHER, probability: 0.2 },
  //           { enemy: UNDEAD.SKELETAL_MAGE, probability: 0.2 },
  //         ];
  //       }

  //       // Calculate the number of enemies based on the threat level
  //       numberOfEnemies = 0;
  //       if (threat >= 80) {
  //         numberOfEnemies = 5;
  //       } else if (threat >= 60) {
  //         numberOfEnemies = Math.floor(Math.random() * 2) + 4; // Between 4 to 5 enemies
  //       } else if (threat >= 40) {
  //         numberOfEnemies = Math.floor(Math.random() * 2) + 3; // Between 3 to 4 enemies
  //       } else if (threat >= 20) {
  //         numberOfEnemies = Math.floor(Math.random() * 2) + 2; // Between 2 to 3 enemies
  //       } else {
  //         numberOfEnemies = Math.floor(Math.random() * 2) + 1; // Between 1 to 2 enemies
  //       }
  //     }
  //     break;
  // }

  // Generate random enemies based on their probabilities
  for (let i = 0; i < numberOfEnemies; i++) {
    let rand = Math.random();
    let cumulativeProbability = 0;

    // Shuffle the enemy types before each selection
    const shuffledEnemyTypes = shuffle([...enemyTypes]);

    for (const { enemy, probability } of shuffledEnemyTypes) {
      cumulativeProbability += probability;
      if (rand <= cumulativeProbability) {
        enemiesArray.push(buildEnemy(enemy));
        break;
      }
    }

    console.log(enemiesArray);
    return enemiesArray;
  }
}

// Creates enemy objects from their template objects BEFORE the combat order is initiated. This cannot be used during combat to add enemies to the combat order
export function buildEnemy(enemy) {
  const baseStats = constructStats(enemy.stats);
  const image = enemy.image;

  const builtEnemy = {
    ...enemy,
    image: image,
    icon: `${image}-icon`,
    stats: baseStats,
    id: uuidv4(),
    damageDisplay: [],
  };

  if (enemy.abilityA) {
    builtEnemy.abilityA = {
      ...enemy.abilityA,
      cooldown: getRandomCooldown(enemy.abilityA.reset),
    };
  }

  if (enemy.abilityB) {
    builtEnemy.abilityB = {
      ...enemy.abilityB,
      cooldown: getRandomCooldown(enemy.abilityB.reset),
    };
  }

  return builtEnemy;
}

export function getRandomCooldown(max) {
  return Math.floor(Math.random() * (max + 1));
}