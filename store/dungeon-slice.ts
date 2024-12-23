import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enemy {
  id: string;
  [key: string]: any; // Adjust to match your enemy properties
}

interface Item {
  id: string;
  [key: string]: any; // Adjust to match your item properties
}

interface Event {
  complete?: boolean;
  outcome?: string;
  items?: Item[];
}

interface DungeonState {
  name: string;
  following: string | null;
  followCounter: number | null;
  path: string | null;
  pathCounter: number | null;
  roomCounter: number;
  threat: number;
  danger: boolean;
  image: string;
  music: string | null;
  contents: {
    enemies: Enemy[],
    items: Item[],
    event: Event | null,
  };
}

const initialState: DungeonState = {
  name: "The Great Catacomb",
  following: null,
  followCounter: null,
  path: null,
  pathCounter: null,
  roomCounter: 0,
  threat: -1,
  danger: false,
  image:
    "/assets/images/backgrounds/the-great-catacomb/catacomb-entrance",
  music: null,
  contents: {
    enemies: [],
    items: [],
    event: null,
  },
};

const dungeonSlice = createSlice({
  name: "dungeon",
  initialState,
  reducers: {
    updateDungeon(state, action: PayloadAction<Partial<DungeonState>>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    dangerToggle(state, action: PayloadAction<{ danger: boolean }>) {
      state.danger = action.payload.danger;
    },
    beginFollowing(
      state,
      action: PayloadAction<{ following: string, rooms: number }>
    ) {
      if (state.following === null) {
        const { following, rooms } = action.payload;
        state.following = following;
        state.followCounter = rooms;
      }
    },
    endFollowing(state) {
      state.followCounter = null;
      state.following = null;
    },
    beginPath(state, action: PayloadAction<string>) {
      if (state.path === null) {
        state.path = action.payload;
        state.pathCounter = 10; // Paths are hard set to 10 rooms
      }
    },
    endPath(state) {
      state.path = null;
      state.pathCounter = null;
    },
    changeBackground(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    addEnemy(
      state,
      action: PayloadAction<{ enemy: Enemy, change: "ADD" | "REMOVE" }>
    ) {
      const { enemy, change } = action.payload;
      if (change === "ADD") {
        state.contents.enemies.push(enemy);
      }
      if (change === "REMOVE") {
        const enemyIndex = state.contents.enemies.findIndex(
          (char) => char.id === enemy.id
        );
        if (enemyIndex !== -1) {
          state.contents.enemies.splice(enemyIndex, 1);
        }
      }
    },
    completeEvent(state) {
      if (state.contents.event) {
        state.contents.event.complete = true;
      }
    },
    addItem(state, action: PayloadAction<Item>) {
      state.contents.items.push(action.payload);
    },
    addThreat(state, action: PayloadAction<number>) {
      state.threat += action.payload;
    },
    removeThreat(state, action: PayloadAction<number>) {
      state.threat -= action.payload;
      if (state.threat <= 0) {
        state.threat = 0;
      }
    },
    incrementRoomCounter(state) {
      state.roomCounter++;
    },
    eventOutcome(state, action: PayloadAction<{ outcome: string }>) {
      if (state.contents.event) {
        state.contents.event.outcome = action.payload.outcome;
      }
    },
    changeTradeItems(state, action: PayloadAction<{ id: string }>) {
      if (state.contents.event?.items) {
        const id = action.payload.id;
        const itemIndex = state.contents.event.items.findIndex(
          (i) => i.id === id
        );
        if (itemIndex !== -1) {
          state.contents.event.items.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const dungeonActions = dungeonSlice.actions;
export default dungeonSlice.reducer;
