import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";
// import dungeonSlice from "./dungeon-slice";
import heroReducer from "./hero-slice"
import playerReducer from "./player-slice";
// import combatSlice from "./combat-slice";
// import logSlice from "./log-slice";
import tomeReducer from "./tome-slice";
// import questionSlice from "./question-slice";
import spellbookReducer from "./spellbook-slice"
// import dialogueSlice from "./dialogue-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    // dungeon: dungeonSlice.reducer,
    hero: heroReducer,
    player: playerReducer,
    // combat: combatSlice.reducer,
    // log: logSlice.reducer,
    tome: tomeReducer,
    // question: questionSlice.reducer,
    spellbook: spellbookReducer,
    // dialogue: dialogueSlice.reducer,
  },
});

// Extract the RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
