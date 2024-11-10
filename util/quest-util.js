import store from "../store/index";
import quests from "../data/quests";

import { HERO_LEVELING_MAP, handleLevelUpHero } from "./hero-leveling";

// When called this function filters through the quests object, checks to see which quests are active (which heroes are currently in the player's party), and if a quest's progress should be increased.

// The different questTypes will narrow down the search for the specific active quest to update
export default function progressActiveQuests(dispatch, questType) {
  const order = store.getState().combat.order;

  switch (questType) {
    // called in checkForDeath to check which enemies were defeated
    case "SLAY": {
      // Siggurd
      const siggurd = order.find((character) => character.id === "Siggurd");
      if (siggurd) {
        // Find the current active quest
        const activeQuest = quests.siggurd.find(
          (quest) => quest.unlocked && !quest.finished
        );
        siggurdQuests(dispatch, siggurd, activeQuest);
      }
    }

    case "EVENT":
      {
        // Liheth - called in Candlelight Shrine event function
        const liheth = order.find((character) => character.id === "Liheth");
        if (liheth) {
          // Find the current active quest
          const activeQuest = quests.liheth.find(
            (quest) => quest.unlocked && !quest.finished
          );
          lihethQuests(dispatch, liheth, activeQuest);
        }
      }
      break;

    case "USE": {
      // Siggurd
      const siggurd = order.find((character) => character.id === "Siggurd");
      if (siggurd) {
        // Find the current active quest
        const activeQuest = quests.siggurd.find(
          (quest) => quest.unlocked && !quest.finished
        );
        siggurdQuests(dispatch, siggurd, activeQuest);
      }
    }
  }
}

// Call these separate functions for specific heroes so you can use another nested switch statement to check the logic for each quest individually in order.
// ============================================================
//                         LIHETH
// ============================================================

function lihethQuests(dispatch, lihethObject, activeQuest) {
  const event = store.getState().dungeon.contents.event;
  const player = store.getState().player;

  switch (activeQuest.questNumber) {
    // Lvl 1 -> Lvl 2 : Find 5 Candlelight Shrines
    case 0:
      {
        if (event && event.name === "Candlelight Shrine") {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 2 -> Lvl 3 : Use Cleansing Flames 30 times
    case 1:
      {
        if (lihethObject.abilityA.cooldown === 0) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 3 -> Lvl 4 : Help put to rest 12 Wandering Wisps
    case 2:
      // NOTE: Switch from defeating wisps to using an item to disperse them.
      {
        const wisp = order.find(
          (enemy) => enemy.name === "Wandering Wisp" && enemy.currentHealth <= 0
        );
        if (banshee) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 4 -> Lvl 5 : Recover 10 stolen Shrine Candles
    case 3:
      {
        const candles = player.inventory.miscItems.filter(
          (item) => item.name === "Shrine Candle"
        );
        activeQuest.progress = candles.length;
      }
      break;

    // Lvl 5 -> Lvl 6 : Cleanse 3 Desiccated Shrines
    case 4:
      {
        if (event && event.name === "Desiccated Shrine") {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 6 -> Lvl 7 : Cast Undying Flame 30 times
    case 5:
      {
        if (lihethObject.abilityB.cooldown === 0) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 7 -> Lvl 8 : Find the other 2 remaining Candlelight Priestesses
    case 6:
      {
        // NOTE: complete
      }
      break;

    // Lvl 8 -> Lvl 9 : Defend the Candlelight Priestess until they can perform their ritual
    case 7:
      {
        // NOTE: complete
      }
      break;

    default:
      return;
  }

  checkQuestCompletion(dispatch, "liheth", lihethObject, activeQuest);
}

// ============================================================
//                         SIGGURD
// ============================================================
function siggurdQuests(dispatch, siggurdObject, activeQuest) {
  const order = store.getState().combat.order;

  switch (activeQuest.questNumber) {
    // Lvl 1 -> Lvl 2 : Defeat 30 undead enemies
    case 0:
      {
        const undead = order.find(
          (enemy) => enemy.type === "UNDEAD" && enemy.currentHealth <= 0
        );

        if (undead) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 2 -> Lvl 3 : Defeat the banshee
    case 1:
      {
        const banshee = order.find(
          (enemy) => enemy.name === "Banshee" && enemy.currentHealth <= 0
        );
        if (banshee) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 3 -> Lvl 4 : Use Smite 50 times
    case 2:
      {
        if (siggurdObject.abilityA.cooldown === 0) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 4 -> Lvl 5 : Defeat the Ghast
    case 3:
      {
        const ghast = order.find(
          (enemy) => enemy.name === "Ghast" && enemy.currentHealth <= 0
        );
        if (ghast) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 5 -> Lvl 6 : Defeat the Reaver
    case 4:
      {
        const reaver = order.find(
          (enemy) => enemy.name === "Reaver" && enemy.currentHealth <= 0
        );
        if (reaver) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 6 -> Lvl 7 : Use Divine Guardian 50 times
    case 5:
      {
        if (siggurdObject.abilityB.cooldown === 0) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 7 -> Lvl 8 : Defeat 30 death knights
    case 6:
      {
        const deathKnight = order.find(
          (enemy) => enemy.name === "Death Knight" && enemy.currentHealth <= 0
        );
        if (deathKnight) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 8 -> Lvl 9 : Defeat the Baron of Bone
    case 7:
      {
        const baronOfBone = order.find(
          (enemy) => enemy.name === "Baron of Bone" && enemy.currentHealth <= 0
        );
        if (baronOfBone) {
          activeQuest.progress++;
        }
      }
      break;

    default:
      return;
  }

  checkQuestCompletion(dispatch, "siggurd", siggurdObject, activeQuest);
}

function checkQuestCompletion(dispatch, giver, heroObject, activeQuest) {
  const questGiver = quests[giver];

  if (activeQuest.progress >= activeQuest.completion) {
    activeQuest.finished = true;

    // Level up hero if not at max level
    // NOTE: must change if max level is raised
    if (heroObject.level < 9) {
      const heroToLevel = HERO_LEVELING_MAP[giver];
      const map = heroToLevel[heroObject.level + 1];
      handleLevelUpHero(dispatch, heroObject.name, map);
    }

    // Unlock next quest in the series
    if (activeQuest.questNumber !== questGiver.length - 1) {
      const questGiver = quests[giver];
      questGiver[activeQuest.questNumber + 1].unlocked = true;
    }
  }
}

export function checkForActiveQuest(heroName, questName) {
  const order = store.getState().combat.order;
  const isHeroActive = order.find((hero) => hero.name === heroName);

  if (isHeroActive) {
    const questGiver = heroName.toLowerCase();
    const questsList = quests[questGiver];
    const isQuestActive = questsList.some(
      (quest) => quest.name === questName && quest.unlocked && !quest.finished
    );
    return isQuestActive;
  }
}
