
"use client"

import { useDispatch, useSelector } from "react-redux";

import store from "@/store/index";

import eventFunctions from "@/util/event-functions";

// import { useEffect } from "react";
import { logActions } from "@/store/log-slice";
import { uiActions } from "@/store/ui-slice";
import { dungeonActions } from "@/store/dungeon-slice";

import { getDialogue } from "@/util/dialogue-util";

export default function EventOptions() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);
  const isTrap = dungeon.contents.event.type === "TRAP";
  const isAuto = dungeon.contents.event.type === "AUTO";
  let eventOptions = [];

  if (dungeon.contents.event) {
    eventOptions = getEventOptions(dungeon.contents.event);
    for (let i = 0; i < dungeon.contents.event.options.length; i++) {
      eventOptions.push(dungeon.contents.event.options[i]);
    }
  }

  const handleClickEventOption = (dispatch, eventFunction, choice, option) => {
    if (dungeon.contents.event.type !== "TRADE") {
      dispatch(
        uiActions.changeUi({
          element: "eventOptionsAreVisible",
          visible: false,
        })
      );
    }

    // Event Outcome
    dispatch(dungeonActions.eventOutcome({ outcome: option.outcome }));
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));
    dispatch(logActions.updateLogs({ change: "ADD", text: option.narration }));
    eventFunction(dispatch, choice);
    getDialogue(dispatch, "after", choice);
  };

  let content;

  if (!isAuto) {
    content = (
      <>
        {eventOptions.map((option) => {
          const eventFunction = eventFunctions[option.function];
          let choice;
          if (isTrap) {
            choice = option.text[1];
          } else {
            choice = option.text[0];
          }

          return (
            <button
              key={option.text}
              className="min-w-[12rem] p-2 border border-text animate-fadeIn hover:bg-primary hover:text-white"
              onClick={() =>
                handleClickEventOption(dispatch, eventFunction, choice, option)
              }
            >
              {Array.isArray(option.text) ? (
                option.text.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))
              ) : (
                <span>{option.text}</span>
              )}
            </button>
          );
        })}
      </>
    );
  }

  return (
    <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] flex justify-center gap-8 z-10">
      {content}
    </div>
  );
}

function getEventOptions(event) {
  const player = store
    .getState()
    .combat.order.find((char) => char.id === "Player");
  let eventOptions = [];
  switch (event.name) {
    case "Gravestone":
      {
        const specialItems = [
          "Gravebloom",
          "Gravelight Lily",
          "Witchfire Orchid",
          "Sunshade Blossom",
        ];
        const hasFlower = player.inventory.consumables.some((item) =>
          specialItems.includes(item.name)
        );

        if (hasFlower) {
          eventOptions.push({
            text: ["Place a flower"],
            function: "GRAVESTONE",
            narration: "You place a flower on the gravestone.",
            outcome:
              "You placed a flower on the gravestone and a wisp emerged from its rest to guide you.",
          });
        }
      }
      break;
  }

  return eventOptions;
}
