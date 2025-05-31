import { logActions } from "@/store/log-slice";
import playSoundEffect from "@/util/audio-util";

export async function locationNarration(dispatch, location) {
  console.log("locationNarration Called");
  dispatch(logActions.updateLogs({ change: "CLEAR" }));
  dispatch(logActions.updateLogs({ change: "PAUSE" }));
  await delay(2000);
  playSoundEffect(false, "misc", "enterDungeon");
  dispatch(
    logActions.updateLogs({
      change: "ADD",
      text: `${location}`,
    })
  );
  await delay(4000);
  dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
  dispatch(logActions.updateLogs({ change: "CLEAR" }));
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
