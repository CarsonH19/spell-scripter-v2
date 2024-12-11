import classes from "./TopContent.module.css";

import DungeonInfo from "./DungeonInfo/DungeonInfo";
import InitiativeTracker from "./InitiativeTracker/InitiativeTracker";
import Threat from "./Threat/Threat";

export default function TopContent() {
  return (
    <div className={classes.top}>
      <div className={classes.topContent}>
        <DungeonInfo />
        <InitiativeTracker />
        <Threat />
      </div>
    </div>
  );
}
