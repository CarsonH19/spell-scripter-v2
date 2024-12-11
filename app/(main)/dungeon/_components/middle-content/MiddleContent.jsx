import classes from "./MiddleContent.module.css";

import EventOptions from "./EventOptions/EventOptions";
import { useDispatch, useSelector } from "react-redux";

import { createNewRoom } from "../../../util/dungeon-util";
import { uiActions } from "../../../store/ui-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import playSoundEffect from "../../../util/audio-util";

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
    roomTransition(dispatch);
  };

  return (
    <div className={classes.middle}>
      {continueIsVisible && (
        <FontAwesomeIcon
          className={classes.continue}
          icon={faArrowRightLong}
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
