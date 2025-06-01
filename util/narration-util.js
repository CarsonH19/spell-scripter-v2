import { logActions } from "@/store/log-slice";
import playSoundEffect from "@/util/audio-util";

export async function locationNarration(dispatch, location) {
  // console.log("locationNarration Called");
  dispatch(logActions.updateLogs({ change: "CLEAR" }));
  dispatch(logActions.updateLogs({ change: "PAUSE" }));
  await delay(2000);
  // NOTE: I can dynamically change the sound effect here later if desired
  playSoundEffect(false, "misc", "enterDungeon");
  dispatch(
    logActions.updateLogs({
      change: "ADD",
      text: `${location}`,
    })
  );
   // NOTE: Dynamically update delay if needed for different narrations
  await delay(5000);
  dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
  dispatch(logActions.updateLogs({ change: "CLEAR" }));
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
