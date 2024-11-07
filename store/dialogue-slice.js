import { createSlice } from "@reduxjs/toolkit";

// This slice will be used to show dialogue between the player and an NPC, Hero, or Boss.

// checkForDialogue() will check the current dungeons event, path, heroes, and enemies to determine what dialogue, if any should occur.

// the dialogue object will have indexes structured as follows.

// {
//   position: "LEFT" / "RIGHT",
//   speaker: "Name",
//   image: "",
//   text: "",
// }

const dialogueSlice = createSlice({
  name: "dialogue",
  initialState: {
    active: null,
    before: [],
    response: [],
    after: [],
  },
  reducers: {
    updateDialogue(state, action) {
      const { change, dialogue } = action.payload;

      state[change] = dialogue;
    },
    startDialogue(state, action) {
      state.active = action.payload;
    },
    finishDialogue(state) {
      state.active = null;
    },
    clearDialogue(state, action) {
      state.active = null;

      if ((action.payload === "ALL")) {
        state.before = [];
        state.response = [];
        state.after = [];
      } else {
        state[action.payload] = [];
      }
    },
  },
});

export const dialogueActions = dialogueSlice.actions;

export default dialogueSlice;
