import classes from "./Threat.module.css";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faPersonWalkingArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Tooltip from "../../../UI/Tooltip";
import Icon from "../../../UI/Icon";

export default function Threat() {
  const dungeon = useSelector((state) => state.dungeon);
  const threat = useSelector((state) => state.dungeon.threat);

  return (
    <div className={classes.container}>
      {/* FOLLOWING ICON */}
      {dungeon.followCounter > 0 && (
        <div className={classes.icon}>
          <Tooltip
            position={"bottom-left"}
            title={"Following"}
            text={dungeon.following}
            detailOne={`${
              dungeon.followCounter > 1
                ? `${dungeon.followCounter} rooms`
                : `${dungeon.followCounter} room`
            } away.`}
          >
            <FontAwesomeIcon
              icon={faPersonWalkingArrowRight}
              className={classes.following}
            />
          </Tooltip>
          {/* <p className={classes["number"]}>{dungeon.followCounter}</p> */}
        </div>
      )}

      {/* THREAT ICON */}
      <div className={classes.icon}>
        <Tooltip
          position={"bottom-left"}
          title={"Threat"}
          text={threat}
          detailOne={
            "Threat determines the difficulty of the encounters you will face. Threat is raised after each cleared room, when you fail to cast a spell, and in other specific instances."
          }
        >
          <FontAwesomeIcon icon={faSkull} className={classes.skull} />
        </Tooltip>
        {/* <p className={classes["number"]}>{threat}</p> */}
      </div>
    </div>
  );
}
