import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";
import dungeonReducer from "./dungeon-slice";
import heroReducer from "./hero-slice";
import playerReducer from "./player-slice";
import combatReducer from "./combat-slice";
import logReducer from "./log-slice";
import tomeReducer from "./tome-slice";
import questionReducer from "./question-slice";
import spellbookReducer from "./spellbook-slice";
import dialogueReducer from "./dialogue-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    dungeon: dungeonReducer,
    hero: heroReducer,
    player: playerReducer,
    combat: combatReducer,
    log: logReducer,
    tome: tomeReducer,
    question: questionReducer,
    spellbook: spellbookReducer,
    dialogue: dialogueReducer,
  },
});

// Extract the RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
