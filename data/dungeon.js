import { GNAWERS } from "./enemies";

import { v4 as uuidv4 } from "uuid";

export let currentRoom = {
  roomName: "Dungeon Entrance",
  image: null,
  music: null,
  contents: {
    enemies: [
      { ...GNAWERS.GNAWER, id: uuidv4() },
      { ...GNAWERS.GNAWER, id: uuidv4() },
      { ...GNAWERS.GNAWER, id: uuidv4() },
      { ...GNAWERS.GNAWER, id: uuidv4() },
      { ...GNAWERS.GNAWER, id: uuidv4() },
    ],
    items: [],
    events: null,
  },
};

let dungeon = [];

// When a player selects a dungeon from the dashboard, the 'dungeon' array will fill with room objects generated randomly for the specified dungeon. After clearing a specific number of rooms the player will reach a checkpoint (Candlelight Shrine). From there, the player can choose to follow the guiding light out of the dungeon. Or the player can continue to the next section, and the dungeon array will be filled again with the required number of rooms.

// Rooms are generated and chosen from the array randomly.

// The number of rooms required to reach the nearest checkpoint will be a range of numbers.

// Rooms with special events will only occur once and once they happen they cannot occur again. These rooms include quest and NPC rooms.

// These special rooms can be held within an array for each dungeon/section and there is a small percentage for one to be rendered when the rooms are loaded into the dungeon array.
