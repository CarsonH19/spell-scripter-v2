"use client";

import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

import { uiActions } from "@/store/ui-slice";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { playerActions } from "@/store/player-slice";

// import CONSUMABLES from "@/data/consumables";
// import EQUIPMENT from "@/data/equipment";

import { backgroundMusic, playMusic } from "@/data/audio/music";
import playSoundEffect from "@/util/audio-util";

import { upsertPlayer } from "@/actions/players-actions";
import { upsertDungeon } from "@/actions/dungeons-actions";
import { dungeonActions } from "@/store/dungeon-slice";

export default function Home() {
  const dispatch = useDispatch();
  const [off, setOff] = useState(false);

  const handleStart = () => {
    startTransition(dispatch);
    setOff(true);

    // // Start Dashboard Music
    playMusic(backgroundMusic.intangibleAscension);
  };

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="flex flex-col items-center gap-y-8">
        <div>
          <h1 className="text-[6rem] font-bold text-orange-300 text-center">
            Spell
          </h1>
          <h1 className="text-[6rem] font-bold text-orange-300 text-center mt-[-2rem]">
            Scripter
          </h1>
        </div>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                signInFallbackRedirectUrl="/dashboard"
                // signUpFallbackRedirectUrl="/dashboard"
              >
                <Button size="lg" variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton
                mode="modal"
                // signInFallbackRedirectUrl="/dashboard"
                signUpFallbackRedirectUrl="/dashboard"
              >
                <Button size="lg" variant={"ghost"} className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                size="lg"
                variant="secondary"
                className="w-full"
                asChild
                onClick={handleStart}
              >
                <Link href="/dashboard">Continue</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

async function startTransition(dispatch) {
  playSoundEffect(false, "ui", "GUIMenuButton", 0.9);

  await dispatch(uiActions.updateFade({ change: "CALL" }));
  await delay(2000);

  // Get Player & Update State
  const player = await upsertPlayer();
  const dungeon = await upsertDungeon();

  dispatch(playerActions.updatePlayer(player));
  dispatch(dungeonActions.updateDungeon(dungeon));

  console.log("PLAYER", player);
  console.log("DUNGEON", dungeon);



  // dispatch(uiActions.changeUi({ element: "startIsVisible", visible: false })); // false

  // dispatch(
  //   uiActions.changeUi({ element: "dashboardIsVisible", visible: true })
  // );

  await dispatch(uiActions.updateFade({ change: "CLEAR" }));

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
