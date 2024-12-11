import { useSelector } from "react-redux";
import classes from "./DungeonInfo.module.css";
// import Tooltip from "../../../UI/Tooltip";
// import Icon from "../../../UI/Icon";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function DungeonInfo() {
  const dungeon = useSelector((state) => state.dungeon);

  return (
    <div className={classes.info}>
      <h2>{dungeon.name}</h2>
      <h4>Rooms Cleared: {dungeon.roomCounter}</h4>
    </div>
  );
}
