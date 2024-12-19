import { useDispatch, useSelector } from "react-redux";
import classes from "./Defeated.module.css";
import { backgroundMusic, playMusic } from "../../../data/audio/music";
import { exitDungeonTransition } from "../Settings/SettingsModal";
import { logActions } from "../../../store/log-slice";
import { dungeonActions } from "../../../store/dungeon-slice";

export default function DefeatedModal() {
  const dispatch = useDispatch();
  const dungeonName = useSelector((state) => state.dungeon.name);

  playMusic(backgroundMusic.theEndOfTheWorld);

  const handleExitDungeon = () => {
    exitDungeonTransition(dispatch);

    // Clear any lingering narrations
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));

    // Toggle off danger
    dispatch(dungeonActions.dangerToggle({ danger: false }));
  };

  return (
    <div className={classes.defeated}>
      <h1>Defeated</h1>
      <p>You were defeated in the {dungeonName}.</p>
      <button onClick={handleExitDungeon}>Return to Dashboard</button>
    </div>
  );
}
