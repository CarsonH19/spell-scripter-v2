import {
  COFFIN,
  GRAVESTONE,
  // DUNGEON_ENTRANCE,
  PATH_ENTRANCE,
  // PATH_EXIT,
  // TRAPS,
  BONEVAULT,
  CANDLELIGHT_SHRINE,
  UNLOCK_HERO,
  AMBUSH,
  THIEVES_RUIN,
} from "../../data/events";



export function getRoomEvent() {
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