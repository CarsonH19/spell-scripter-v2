import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a single dialogue entry
interface DialogueEntry {
  position: "LEFT" | "RIGHT";
  speaker: string;
  image: string;
  text: string;
}

// Define the initial state structure
interface DialogueState {
  active: DialogueEntry | null;
  before: DialogueEntry[];
  response: DialogueEntry[];
  after: DialogueEntry[];
}

// Define the initial state
const initialState: DialogueState = {
  active: null,
  before: [],
  response: [],
  after: [],
};

// Define the payload type for the updateDialogue action
interface UpdateDialoguePayload {
  change: "before" | "response" | "after";
  dialogue: DialogueEntry[];
}

const dialogueSlice = createSlice({
  name: "dialogue",
  initialState,
  reducers: {
    updateDialogue(state, action: PayloadAction<UpdateDialoguePayload>) {
      const { change, dialogue } = action.payload;
      state[change] = dialogue;
    },
    startDialogue(state, action: PayloadAction<DialogueEntry>) {
      state.active = action.payload;
    },
    finishDialogue(state) {
      state.active = null;
    },
    clearDialogue(
      state,
      action: PayloadAction<"ALL" | "before" | "response" | "after">
    ) {
      state.active = null;

      if (action.payload === "ALL") {
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

export default dialogueSlice.reducer;
