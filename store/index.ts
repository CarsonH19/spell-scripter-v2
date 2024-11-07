import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";
// import dungeonSlice from "./dungeon-slice";
// import heroSlice from "./hero-slice";
// import playerSlice from "./player-slice";
// import combatSlice from "./combat-slice";
// import logSlice from "./log-slice";
import tomeReducer from "./tome-slice";
// import questionSlice from "./question-slice";
// import spellbookSlice from "./spellbook-slice";
// import dialogueSlice from "./dialogue-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    // dungeon: dungeonSlice.reducer,
    // hero: heroSlice.reducer,
    // player: playerSlice.reducer,
    // combat: combatSlice.reducer,
    // log: logSlice.reducer,
    tome: tomeReducer,
    // question: questionSlice.reducer,
    // spellbook: spellbookSlice.reducer,
    // dialogue: dialogueSlice.reducer,
  },
});

// Extract the RootState type
export type TomeState = ReturnType<typeof store.getState>;
export type UiState = ReturnType<typeof store.getState>;


export default store;
