import EventOptions from "./EventOptions/EventOptions";
import { useDispatch, useSelector } from "react-redux";

import { createNewRoom } from "@/util/dungeon-util";
import { uiActions } from "@/store/ui-slice";

import { ArrowBigRight } from "lucide-react";

import playSoundEffect from "@/util/audio-util";

export default function MiddleContent() {
  const dispatch = useDispatch();

  const eventOptionsAreVisible = useSelector(
    (state) => state.ui.eventOptionsAreVisible
  );

  // Continue Logic
  const continueIsVisible = useSelector((state) => state.ui.continueIsVisible);

  const handleContinue = () => {
    dispatch(
      uiActions.changeUi({ element: "continueIsVisible", visible: false })
    );
    dispatch(
      uiActions.changeUi({ element: "eventOptionsAreVisible", visible: true })
    );
    roomTransition(dispatch);
  };

  return (
    <div className="relative h-[30%] w-full flex items-end justify-center">
      {continueIsVisible && (
        <ArrowBigRight
          className="absolute top-[130%] left-[75%] text-text hover:text-accent transition-transform  transform hover:scale-110 w-48 h-auto p-2 cursor-pointer animate-pulse duration-1000"
          onClick={handleContinue}
        />
      )}
      {eventOptionsAreVisible && <EventOptions />}
    </div>
  );
}

export async function roomTransition(dispatch) {
  await dispatch(uiActions.updateFade({ change: "CALL" }));
  playSoundEffect(false, "misc", "whooshLowAir");
  await delay(3000);
  // Ensure modals are not visible
  dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));
  createNewRoom(dispatch);
  await dispatch(uiActions.updateFade({ change: "CLEAR" }));

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
