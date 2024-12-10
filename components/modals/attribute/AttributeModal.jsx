"use client"

import Attributes from "./Attributes";
import classes from "./AttributeModal.module.css";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandFist,
  faPersonRunning,
  faHatWizard,
  // faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

// import Tooltip from "../../UI/Tooltip";

export default function AttributeModal({ levelUp }) {
  const player = useSelector((state) => state.player);
  let content;

  if (levelUp) {
    content = (
      <>
        <h1>Level Up!</h1>
        <h2>You Gained An Attribute Point!</h2>
        <div>
          <Attributes />
        </div>
      </>
    );
  } else {
    content = (
      <>
        <h1>Attributes</h1>
        <div>
          <img
            className={classes["player-image"]}
            src={`${player.image}.png`}
            alt="Player Image"
          />
          <div className={classes["outer-container"]}>
            <Attributes />
          </div>
          <div className={classes.icons}>
            <FontAwesomeIcon
              icon={faHandFist}
              className={classes["attribute-icon"]}
            />
            <FontAwesomeIcon
              icon={faPersonRunning}
              className={classes["attribute-icon"]}
            />
            <FontAwesomeIcon
              icon={faHatWizard}
              className={classes["attribute-icon"]}
            />
          </div>
        </div>
      </>
    );
  }

  return <div className={classes["attribute-modal"]}>{content}</div>;
}
