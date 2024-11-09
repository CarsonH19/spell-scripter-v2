import { dungeonActions } from "../store/dungeon-slice";

import { THIEVES, UNDEAD } from "../data/enemies";

import {
  COFFIN,
  GRAVESTONE,
  DUNGEON_ENTRANCE,
  PATH_ENTRANCE,
  PATH_EXIT,
  // TRAPS,
  BONEVAULT,
  CANDLELIGHT_SHRINE,
  UNLOCK_HERO,
  AMBUSH,
  THIEVES_RUIN,
} from "../data/events";

import store from "../store/index";

import { v4 as uuidv4 } from "uuid";
// import { checkForActiveQuest } from "./quest-util";

// import { getImageFromList } from "./misc-util";
// import { getTraderItems } from "../components/Modals/Trade/TradeModal";
// import { getRandomCooldown } from "./misc-util";
// import { musicPaths, playMusic } from "../data/audio/music";
// import { backgroundMusic } from "../data/audio/music";
// import { currentMusic } from "../data/audio/music";

export function setDungeon(dispatch, dungeonName) {
  let dungeon = {
    name: "",
    following: null,
    followCounter: 0,
    path: null,
    pathCounter: null,
    roomCounter: 0,
    threat: 0,
    image: null,
    music: null,
    contents: {
      enemies: [],
      items: [],
      event: DUNGEON_ENTRANCE,
    },
  };

  switch (dungeonName) {
    case "The Great Catacomb":
      dungeon.name = "The Great Catacomb";
      dungeon.following = null;
      dungeon.followCounter = 0;
      dungeon.path = null;
      dungeon.pathCounter = null;
      dungeon.threat = 0;
      dungeon.image =
        "/assets/images/backgrounds/the-great-catacomb/catacomb-entrance-3";
      // dungeon.music =
      dungeon.contents; // add Entrance event
      break;
  }

  dispatch(dungeonActions.updateRoom(dungeon));
}

// =====================================================================
//                          CREATE NEW ROOM
// =====================================================================
export function createNewRoom(dispatch) {
  const dungeon = store.getState().dungeon;

  let newRoom = {
    ...dungeon,
    followCounter:
      dungeon.followCounter > 0
        ? dungeon.followCounter - 1
        : dungeon.followCounter,
    pathCounter:
      dungeon.pathCounter > 0 ? dungeon.pathCounter - 1 : dungeon.pathCounter,
    roomCounter: dungeon.roomCounter + 1,
    threat: dungeon.threat + 1,
    danger: true,
    image: null,
    music: null,
    contents: {
      roomName: "",
      enemies: [],
      items: [],
      event: null,
    },
  };

  // Check if following & followCounter end
  if (dungeon.followCounter === 0) {
    dispatch(dungeonActions.endFollowing());
  }

  const roomContent = getRoomContent();
  switch (roomContent) {
    case "EVENT":
      // get event
      newRoom.contents.event = getRoomEvent();
      break;

    case "ENEMIES":
      // get enemies
      newRoom.contents.enemies = getRoomEnemies();
      break;

    case "EXIT PATH":
      newRoom.contents.event = getPathExit();
  }

  if (getRoomMusic(newRoom)._src !== currentMusic._src) {
    playMusic(getRoomMusic(newRoom));
  }

  // Get background after room contents have been determined
  newRoom.image = getRoomImage(newRoom);
  dispatch(dungeonActions.updateRoom(newRoom));
}

// =====================================================================
//                            CONTENTS
// =====================================================================

function getRoomContent() {
  const dungeon = store.getState().dungeon;
  const pathCounter = dungeon.pathCounter;
  let eventChance = Math.floor(Math.random() * 101);
  let content;

  switch (dungeon.name) {
    case "The Great Catacomb":
      // Event chance for general dungeon is 20%
      if (eventChance > 80) {
        content = "EVENT";
      } else {
        content = "ENEMIES";
      }

      // WAILING WARRENS
      if (dungeon.path === "Wailing Warrens") {
        // NOTE - Currently set to always enemies
        content = "ENEMIES";
        // NOTE: add logic to check for path specific event chance here
      }

      // THIEVES' RUIN
      if (dungeon.path === "Thieves' Ruin") {
        // NOTE - Currently set to always enemies
        content = "ENEMIES";
        // Laughing Coffin Event & 40% event chance
        if (dungeon.pathCounter === 4 || eventChance > 999) {
          content = "EVENT";
        }
      }

      // NOTE:
      // FOLLOWING - change event chance when following
      if (dungeon.following) {
        content = "ENEMIES";
      }

      // FOLLOWING - check if following ends and an event must occur
      if (dungeon.followCounter === 1) {
        content = "EVENT";
      }
  }

  if (dungeon.path && pathCounter <= 0 && pathCounter !== null) {
    content = "EXIT PATH";
  }

  return content;
}

// =====================================================================
//                            EVENTS
// =====================================================================

function getRoomEvent() {
  const heroes = store.getState().hero.heroes;
  const siggurd = heroes.find((hero) => hero.id === "Siggurd");
  const liheth = heroes.find((hero) => hero.id === "Liheth");

  const dungeon = store.getState().dungeon;
  let events = [];

  // check dungeon
  switch (dungeon.name) {
    case "The Great Catacomb":
      // DUNGEON EVENTS
      if (!dungeon.path && !dungeon.following) {
        // Traps
        // events.push(TRAPS.COLLAPSING_CEILING);
        // events.push(TRAPS.ROTATING_BLADES);
        // events.push(TRAPS.SPIKE_WALLS);

        if (dungeon.threat < 20) {
          events.push(GRAVESTONE);
        }
        if (dungeon.threat < 20) {
          events.push(AMBUSH);
        }
        events.push(COFFIN);
        events.push(BONEVAULT);

        // // Check if Siggurd is unlocked
        if (!siggurd.unlocked) {
          events.push(UNLOCK_HERO.SIGGURD);
        }

        // // Check if Liheth is unlocked
        if (!liheth.unlocked) {
          events.push(UNLOCK_HERO.LIHETH);
        } else {
          events.push(CANDLELIGHT_SHRINE);
        }
      }

      // FOLLOWING EVENTS
      if (
        dungeon.following === "Thieves' Ruin Map" &&
        dungeon.followCounter === 1
      ) {
        events.push(PATH_ENTRANCE.THIEVES_RUIN_ENTRANCE);
      }

      if (
        dungeon.following === "Wandering Wisp" &&
        dungeon.followCounter === 1
      ) {
        events.push(PATH_ENTRANCE.WAILING_WARRENS_ENTRANCE);
      }

      // PATH EVENTS
      if (dungeon.path === "Wailing Warrens") {
        // Ghostly Choir
        // Whispering Wall
        // Echoing Bells
      } else if (dungeon.path === "Thieves' Ruin") {
        // Only push Laughing Coffin at pathCounter 4
        if (dungeon.pathCounter === 4) {
          events.push({
            ...THIEVES_RUIN.LAUGHING_COFFIN,
            items: getTraderItems("Laughing Coffin"),
          });
        } else {
          // events.push(
          //   THIEVES_RUIN.FLOOR_SPIKES,
          //   THIEVES_RUIN.POISONOUS_MIST,
          //   THIEVES_RUIN.POISON_DARTS
          // );
        }
      }
      break;
  }

  // Randomly choose an event from the new array
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
}

// =====================================================================
//                                ENEMIES
// =====================================================================

export function getRoomEnemies() {
  const dungeon = store.getState().dungeon;
  const threat = store.getState().dungeon.threat;
  let enemiesArray = [];
  let enemyTypes;
  let numberOfEnemies;

  switch (dungeon.path) {
    case "Wailing Warrens":
      {
        // QUEST - Siggurd - 2
        if (
          checkForActiveQuest("Siggurd", "Wails of the Banshee") &&
          dungeon.pathCounter === 1
        ) {
          enemyTypes = [{ enemy: UNDEAD.BANSHEE, probability: 1 }];
          numberOfEnemies = 1;
        } else {
          enemyTypes = [
            { enemy: UNDEAD.WANDERING_WISP, probability: 0.1 },
            { enemy: UNDEAD.SHADOW, probability: 0.9 },
          ];
          numberOfEnemies = 2;
        }
      }
      break;

    case "Thieves' Ruin":
      {
        enemyTypes = [{ enemy: THIEVES.THIEF, probability: 1 }];
        numberOfEnemies = Math.ceil(Math.random() * 3);
      }
      break;

    default:
      {
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
      }
      break;
  }

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
  }

  return enemiesArray;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
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

export function constructStats(stats) {
  return {
    baseStrength: stats.baseStrength,
    strength: {
      totalStrength: 0,
      attack: 0,
      maxHealth: 0,
      healthRegen: 0,
    },
    baseAgility: stats.baseAgility,
    agility: {
      totalAgility: 0,
      defense: 0,
      speed: 0,
      hitChance: 0,
    },
    baseArcana: stats.baseArcana,
    arcana: {
      totalArcana: 0,
      spellPower: 0,
    },
  };
}

// =====================================================================
//                                IMAGE
// =====================================================================

function getRoomImage(dungeon) {
  let backgroundImage;

  // Use general dungeon images
  switch (dungeon.name) {
    case "The Great Catacomb":
      backgroundImage = getImageFromList(
        "/assets/images/backgrounds/the-great-catacomb/catacomb",
        26
      );
      break;
  }

  // Check for path specific backgrounds (replaces dungeon imageList)
  if (dungeon.path) {
    switch (dungeon.path) {
      case "Wailing Warrens":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/wailing-warrens/wailing-warrens",
          12
        );
        break;

      case "Thieves' Ruin":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/thieves-ruin/thieves-ruin",
          9
        );
        break;

      default:
        break;
    }
  }

  // Check for event specific backgrounds (replaces dungeon & path imageList)
  if (dungeon.contents.event) {
    switch (dungeon.contents.event.name) {
      //THE GREAT CATACOMBS
      case "Gravestone":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/events/gravestone",
          5
        );
        break;

      case "Coffin":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/events/coffin",
          7
        );
        break;

      case "Bonevault":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/events/bonevault-door",
          6
        );
        break;

      case "Unlocking Liheth":
      case "Candlelight Shrine":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/events/candlelight-shrine",
          7
        );
        break;

      // WAILING WARRENS
      case "Wailing Warrens":
      case "Wailing Warrens Exit":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/wailing-warrens/wailing-warrens-door",
          1
        );
        break;

      // THIEVES RUIN
      case "Thieves' Ruin":
      case "Thieves' Ruin Exit":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/thieves-ruin/thieves-ruin-door",
          2
        );
        break;

      case "Laughing Coffin":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/thieves-ruin/laughing-coffin-tavern",
          1
        );
        break;

      default:
        break;
    }
  }

  return backgroundImage;
}

// =====================================================================
//                                PATH
// =====================================================================

function getPathExit() {
  const path = store.getState().dungeon.path;

  switch (path) {
    case "Wailing Warrens":
      return PATH_EXIT.WAILING_WARRENS_EXIT;

    case "Thieves' Ruin":
      return PATH_EXIT.THIEVES_RUIN_EXIT;
  }
}

// =====================================================================
//                         BACKGROUND MUSIC
// =====================================================================

export function getRoomMusic(dungeon) {
  let music;

  // Use general dungeon images
  switch (dungeon.name) {
    case "The Great Catacomb":
      {
        music = backgroundMusic.threeThousandYearsOld;
      }
      break;
  }

  // Check for path specific backgrounds (replaces dungeon imageList)
  if (dungeon.path) {
    switch (dungeon.path) {
      case "Wailing Warrens":
        {
          const musicList = [
            backgroundMusic.hauntedOutpost,
            backgroundMusic.fightThrough,
          ];

          const index = Math.floor(Math.random() * musicList.length);
          music = musicList[index];
        }
        break;

      case "Thieves' Ruin":
        music = backgroundMusic.hiddenCapacity;
        break;

      default:
        break;
    }
  }

  // Check for event specific backgrounds (replaces dungeon & path imageList)
  if (dungeon.contents.event) {
    switch (dungeon.contents.event.name) {
      //THE GREAT CATACOMBS
      case "Ambush":
        music = backgroundMusic.unfinishedBusiness;
        break;

      case "Gravestone":
        music = backgroundMusic.pileOfBones;
        break;

      case "Coffin":
        music = backgroundMusic.pileOfBones;
        break;

      case "Bonevault":
        music = backgroundMusic.pileOfBones;
        break;

      case "Unlocking Siggurd":
        music = backgroundMusic.warningSignal;
        break;

      case "Unlocking Liheth":
      case "Candlelight Shrine":
        music = backgroundMusic.mindReading;
        break;

      // WAILING WARRENS
      case "Wailing Warrens":
        music = backgroundMusic.basementNightmare;
        break;

      case "Wailing Warrens Exit":
        music = backgroundMusic.basementNightmare;
        break;

      // THIEVES RUIN
      case "Thieves' Ruin":
        music = backgroundMusic.threeThousandYearsOld;
        break;

      case "Thieves' Ruin Exit":
        music = backgroundMusic.threeThousandYearsOld;
        break;
      case "Laughing Coffin":
        music = backgroundMusic.unfinishedBusiness;
        break;

      default:
        break;
    }
  }

  return music;
}

export function playEncounterMusic() {
  const dungeon = store.getState().dungeon;
  let music;

  // Encounter Music
  switch (dungeon.name) {
    case "The Great Catacomb":
      {
        const musicList = [
          "weCantStopThem",
          "passedDanger",
          "finalBrigade",
          "migrano",
          "warningSignal",
        ];
        const index = Math.floor(Math.random() * musicList.length);
        music = musicList[index];
      }
      break;
  }

  if (dungeon.path) {
    switch (dungeon.path) {
      case "Wailing Warrens":
        {
          const musicList = ["hauntedOutpost", "fightThrough"];
          const index = Math.floor(Math.random() * musicList.length);
          music = musicList[index];
        }
        break;
      case "Thieves' Ruin":
        music = "hiddenCapacity";
        break;
    }
  }

  if (music) {
    const musicURL = `/assets/audio/music/${music}.mp3`;
    if (musicURL !== currentMusic._src) {
      playMusic(backgroundMusic[music]);
      playMusic(backgroundMusic[music]);
    }
  }
}
