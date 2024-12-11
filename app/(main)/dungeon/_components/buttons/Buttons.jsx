import classes from "./Buttons.module.css";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { openModal } from "../../../store/ui-actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToolbox,
  faScroll,
  faUsersLine,
  faPersonCircleExclamation,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Buttons() {
  const dispatch = useDispatch();
  const isDialogue = useSelector((state) => state.dialogue.active);
  // Unable to access inventory while in danger
  const isDanger = useSelector((state) => state.dungeon.danger);

  const handleOpenModal = (modal) => {
    openModal(dispatch, modal);
  };

  return (
    !isDialogue && (
      <div className={classes.buttons}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faToolbox}
          onClick={() => handleOpenModal("inventoryModal")}
          style={isDanger ? { pointerEvents: "none", opacity: 0.6 } : {}}
        />
        {/* <FontAwesomeIcon
          className={classes.icon}
          icon={faUsersLine}
          onClick={() => handleOpenModal("partyModal")}
        /> */}
        <FontAwesomeIcon
          className={classes.icon}
          icon={faPersonCircleExclamation}
          onClick={() => handleOpenModal("questsModal")}
        />{" "}
        <FontAwesomeIcon
          className={classes.icon}
          icon={faScroll}
          onClick={() => handleOpenModal("dungeonTomesModal")}
        />
        <FontAwesomeIcon
          className={classes.icon}
          icon={faGear}
          onClick={() => handleOpenModal("settingsModal")}
        />
      </div>
    )
  );
}
