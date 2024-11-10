import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the structure of a log entry
interface LogEntry {
  id: string;
  text: string;
}

// Define the initial state structure
interface LogState {
  narration: LogEntry[];
  paused: boolean;
}

// Define the initial state
const initialState: LogState = {
  narration: [],
  paused: false,
};

// Define the payload type for the updateLogs action
interface UpdateLogsPayload {
  change: "ADD" | "REMOVE" | "PAUSE" | "UNPAUSE" | "CLEAR";
  text?: string;
}

const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    updateLogs(state, action: PayloadAction<UpdateLogsPayload>) {
      const { change, text } = action.payload;

      switch (change) {
        case "ADD":
          if (text) {
            state.narration.push({ id: uuidv4(), text });
          }
          break;

        case "REMOVE":
          if (!state.paused) {
            state.narration.shift();
          }
          break;

        case "PAUSE":
          state.paused = true;
          break;

        case "UNPAUSE":
          state.paused = false;
          break;

        case "CLEAR":
          state.narration = [];
          break;

        default:
          break;
      }
    },
  },
});

export const logActions = logSlice.actions;

export default logSlice.reducer;
