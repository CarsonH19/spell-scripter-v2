// import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

// // This state slice will organize strings used to alert or notify the user in different arrays. The narration array will be displayed on the middle of the screen through the narration portal, while the others will be shown in the "Log" button in dungeons.

// const logSlice = createSlice({
//   name: "log",
//   initialState: {
//     narration: [],
//     paused: false,
//   },
//   reducers: {
//     updateLogs(state, action) {
//       const change = action.payload.change;

//       switch (change) {
//         case "ADD":
//           {
//             const text = action.payload.text;
//             state.narration.push({ id: uuidv4(), text });
//           }
//           break;

//         case "REMOVE":
//           if (!state.paused) {
//             state.narration.shift();
//           }
//           break;

//         case "PAUSE":
//           state.paused = true;

//           break;

//         case "UNPAUSE":
//           state.paused = false;
//           break;

//         case "CLEAR":
//           state.narration = [];
//       }
//     },
//   },
// });

// export const logActions = logSlice.actions;

// export default logSlice;
