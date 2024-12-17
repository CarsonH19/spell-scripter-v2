import { createPortal } from "react-dom";
// import classes from "./Narration.module.css";
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

    timeoutIdRef.current = setTimeout(() => {
      dispatch(logActions.updateLogs({ change: "REMOVE" }));
    }, 2000);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [narration, dispatch]);

  return createPortal(
    <div className="fixed z-10 top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center pointer-events-none">
      <ul className={`flex flex-col min-h-[35rem] list-none ${style}`}>
        {narration.map((item) => (
          <li
            key={item.id}
            className={`text-4xl text-[var(--text)] text-center transition duration-300 ${
              style ? "" : isPaused ? "" : "animate-fadeInAndOut"
            }`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>,
    document.getElementById("narration")
  );
}

// Helper function
function getNarrationStyle(narration) {
  const dungeon = store.getState().dungeon;
  let style;

  if (
    narration === "Encounter!" ||
    narration === dungeon.name ||
    narration === dungeon.path
  ) {
    style =
      "flex flex-col justify-center items-center text-[7rem] font-cinzel text-[var(--text)] animate-fadeInAndOut";
  } else {
    style = "";
  }

  return style;
}
