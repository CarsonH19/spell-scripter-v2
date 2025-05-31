"use client";

import store from "@/store";

import BottomContent from "./_components/bottom-content/BottomContent";
import Buttons from "../dungeon/_components/buttons/Buttons";

import MiddleContent from "./_components/middle-content/MiddleContent";
import TopContent from "./_components/top-content/TopContent";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { startCombat } from "@/store/combat-actions";
import checkForDialogue from "@/util/dialogue-util";
import { logActions } from "@/store/log-slice";
import { addCharacterToOrder } from "@/util/misc-util";
import { dungeonActions } from "@/store/dungeon-slice";
import eventFunctions from "@/util/event-functions";
// import playSoundEffect from "@/util/audio-util";
import { locationNarration } from "@/util/narration-util";


const DungeonPage = () => {
  const [showBottom, setShowBottom] = useState(true);
  const dispatch = useDispatch();
  const { roomCounter, image } = useSelector((state) => state.dungeon);

  console.log(`url(${image})`);
  
  useEffect(() => {
    handleGameFlow(dispatch, setShowBottom);
  }, [roomCounter]);

  return (
    <div
      className="relative flex flex-col justify-between h-full w-full bg-center bg-no-repeat bg-cover p-4 pb-0 border-4 border-[var(--primary)]"
      style={{
        backgroundImage: `url(${image}.jpg)`,
      }}
    >
      <TopContent />
      <MiddleContent />
      {showBottom && <BottomContent />}
      {showBottom && <Buttons />}
    </div>
  );
};

export default DungeonPage;

async function handleGameFlow(dispatch, setShowBottom) {
  const dungeon = store.getState().dungeon;
  const event = store.getState().dungeon.contents.event;

  // Narrate dungeon name on entrance
  if (dungeon.roomCounter === 0) {
    setShowBottom(false);
    await locationNarration(dispatch, dungeon.name);
  }

  setShowBottom(true);

  // Handle Combat
  if (!event) {
    // Sets initiative & adds enemies to combat order then begins the combatLoop
    // Dialogue
    await checkForDialogue(dispatch, "before");
    startCombat(dispatch, dungeon.contents.enemies);
  }

  // Handle Event
  if (event) {
    // Renders characters if the event BEGINS with characters
    if (event.characters) {
      // Add to combat-slice order
      for (let i = 0; i < event.characters.length; i++) {
        addCharacterToOrder(dispatch, event.characters[i]);
      }
    }

    // Dialogue
    await checkForDialogue(dispatch, "before");

    // AUTO Events
    if (event.type === "AUTO") {
      // Call auto event function after dialogue
      const eventFunction = eventFunctions[event.function];
      eventFunction(dispatch);

      dispatch(dungeonActions.eventOutcome({ outcome: event.outcome }));
    }

    // Narration
    dispatch(logActions.updateLogs({ change: "PAUSE" }));
    for (let i = 0; i < event.description.length; i++) {
      dispatch(
        logActions.updateLogs({
          change: "ADD",
          text: event.description[i],
        })
      );
    }
  }
}

// export async function locationNarration(dispatch, location) {
//   console.log("locationNArration Called");
//   dispatch(logActions.updateLogs({ change: "CLEAR" }));
//   dispatch(logActions.updateLogs({ change: "PAUSE" }));
//   await delay(2000);
//   playSoundEffect(false, "misc", "enterDungeon");
//   dispatch(
//     logActions.updateLogs({
//       change: "ADD",
//       text: `${location}`,
//     })
//   );
//   await delay(4000);
//   // Clear Narrative
//   dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
//   dispatch(logActions.updateLogs({ change: "CLEAR" }));
// }

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
