"use client";

// import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useMemo } from "react";
import { logActions } from "@/store/log-slice";
import store from "@/store/index";

export default function Narration() {
  const isPaused = useSelector((state) => state.log.paused);
  const narration = useSelector((state) => state.log.narration);
  const dispatch = useDispatch();
  const timeoutIdRef = useRef(null);

  const style = useMemo(
    () => getNarrationStyle(narration[0]?.text),
    [narration]
  );

  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    // NOTE: Dynamically update time if needed for different narrations
    timeoutIdRef.current = setTimeout(() => {
      dispatch(logActions.updateLogs({ change: "REMOVE" }));
    }, 5000);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [narration, dispatch]);

  return (
    <div className="fixed z-10 top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center pointer-events-none">
      <ul className="flex flex-col list-none w-full">
        {narration.map((item) => {
          const isCentered = style.includes("animate-fadeInAndOut5");

          return (
            <div
              key={item.id}
              className={`w-full ${
                isCentered
                  ? "flex justify-center items-center min-h-[35rem]"
                  : ""
              }`}
            >
              <li className={style}>{item.text}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

// Helper function
function getNarrationStyle(narration) {
  const dungeon = store.getState().dungeon;

  if (
    narration === "Encounter!" ||
    narration === dungeon.name ||
    narration === dungeon.path
  ) {
    return "text-[5rem] font-cinzel text-[var(--text)] animate-fadeInAndOut5 text-center";
  } else {
    return "text-4xl text-[var(--text)] text-center transition animate-fadeInAndOut3";
  }
}
