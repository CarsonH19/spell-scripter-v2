"use client";

import { useDispatch, useSelector } from "react-redux";

import store from "@/store/index";

// import classes from "./SettingsModal.module.css";

import { uiActions } from "@/store/ui-slice";
import { logActions } from "@/store/log-slice";
import { dungeonActions } from "@/store/dungeon-slice";
import { dialogueActions } from "@/store/dialogue-slice";
import playSoundEffect from "@/util/audio-util";
import { playMusic } from "@/data/audio/music";
import { backgroundMusic } from "@/data/audio/music";
import { combatActions } from "@/store/combat-slice";
import { playerActions } from "@/store/player-slice";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SettingsModal() {
  const dispatch = useDispatch();
  const dashboard = useSelector((state) => state.ui.dashboardIsVisible);

  const handleExitDungeon = () => {
    exitDungeonTransition(dispatch);

    // Clear dialogues
    dispatch(dialogueActions.clearDialogue("ALL"));

    // Clear any lingering narrations
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));

    // Toggle off danger
    dispatch(dungeonActions.dangerToggle({ danger: false }));
  };

  return (
    <div className="h-[90%] w-[30%] min-w-[40rem] bg-background flex flex-col justify-start items-center border-2 border-secondary p-4 gap-4 rounded-lg text-center">
      <h1 className="text-2xl m-0 p-0 border-b-2 border-secondary w-1/2">
        Settings
      </h1>
      {/* {!dashboard && ( */}
      <Link href={"/dashboard"}>
        <Button
          onClick={handleExitDungeon}
          className="w-[10rem] h-[4rem] text-background bg-accent hover:text-text hover:bg-primary transition duration-300"
        >
          Exit Dungeon
        </Button>
      </Link>

      {/* )} */}
    </div>
  );
}

export async function exitDungeonTransition(dispatch) {
  let player = store
    .getState()
    .combat.order.find((char) => char.id === "Player");

  // Clear all status effects with a duration
  for (let i = 0; i < player.statusEffects.length; i++) {
    if (player.statusEffects[i].duration) {
      dispatch(
        combatActions.updateStatusEffects({
          id: "Player",
          statusEffect: player.statusEffects[i],
          change: "REMOVE",
        })
      );
    }
  }

  // Update player-slice with combat-slice player object
  player = store.getState().combat.order.find((char) => char.id === "Player");
  dispatch(playerActions.updatePlayer(player));

  // Clear initiative tracker
  dispatch(combatActions.initiativeTracker({ change: "REMOVE" }));

  await dispatch(uiActions.updateFade({ change: "CALL" }));
  playSoundEffect(false, "ui", "GUIMenuButton");
  dispatch(
    uiActions.changeUi({ element: "continueIsVisible", visible: false })
  );
  // Clear event options
  dispatch(
    uiActions.changeUi({ element: "eventOptionsAreVisible", visible: false })
  );
  console.log("Before")
  await delay(3000);
    console.log("After")

  // const newPlayer = store.getState().player;

  playMusic(backgroundMusic.intangibleAscension);
  // Open dashboard
  dispatch(
    uiActions.changeUi({ element: "dashboardIsVisible", visible: true })
  );
  // Close game window
  dispatch(
    uiActions.changeUi({ element: "gameWindowIsVisible", visible: false })
  );
  // Close modal
  dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));

  await dispatch(uiActions.updateFade({ change: "CLEAR" }));

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
