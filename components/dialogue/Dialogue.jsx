"use client"

import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { endDialogue } from "@/util/dialogue-util";
import { ArrowLeft, ArrowRight } from "lucide-react";

import playSoundEffect from "@/util/audio-util";

export default function Dialogue() {
  const [index, setIndex] = useState(0);
  const dialogue = useSelector((state) => state.dialogue);
  const activeDialogue = dialogue[dialogue.active];
  const dispatch = useDispatch();

  const position =
    activeDialogue[index].position === "LEFT" ? "left-0" : "right-0";

  useEffect(() => {
    playSoundEffect(false, "ui", "softs", 0.7);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleNextPage();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [index]);

  const handleNextPage = () => {
    if (index < activeDialogue.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      // playSoundEffect(false, "ui", "medievalGUI1");
    } else {
      handleEndDialogue();
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      // playSoundEffect(false, "ui", "medievalGUI2");
    }
  };

  const handleEndDialogue = () => {
    endDialogue(dispatch);
    // playSoundEffect(false, "ui", "softs2", 0.7);
  };

  return createPortal(
    <div className="fixed inset-0 z-10 flex justify-center items-center bg-black/50">
      <div className={`absolute bottom-0 ${position}`}>
        <img
          className="h-[90%] w-auto object-cover"
          src={activeDialogue[index].image}
          alt=""
        />
      </div>

      <div className="fixed top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 min-h-[10rem] w-[30rem] p-2 pt-4 flex flex-col justify-between text-center bg-[var(--background)] border border-[var(--secondary)] rounded-lg">
        <div>
          {activeDialogue[index].speaker && (
            <h3 className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg bg-[var(--background)] border border-[var(--text)] px-8 py-2 rounded-md">
              {activeDialogue[index].speaker}
            </h3>
          )}
          <p
            className={`text-lg ${
              activeDialogue[index].speaker === null ? "italic" : ""
            }`}
          >
            {activeDialogue[index].text}
          </p>
        </div>
        <div className="flex justify-between">
          <ArrowLeft
            onClick={handlePrevPage}
            className={`h-5 text-[var(--text)] cursor-pointer hover:scale-110 hover:text-[var(--accent)] transition ${
              index === 0 ? "pointer-events-none opacity-60" : ""
            }`}
          />

          <ArrowRight
            onClick={
              index === activeDialogue.length - 1
                ? handleEndDialogue
                : handleNextPage
            }
            className="h-5 text-[var(--text)] cursor-pointer hover:scale-110 hover:text-[var(--accent)] transition"
          />
        </div>
      </div>
    </div>,
    document.getElementById("dialogue")
  );
}
