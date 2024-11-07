// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import classes from "./Dashboard.module.css";

// import store from "../../store/index";

import DungeonColumn from "./dungeon-column";
import PlayerColumn from "./player-column";
import TomeColumn from "./tome-column";
// import TomeColumn from "./TomeColumn/TomeColumn";
// import { playerActions } from "../../store/player-slice";
// import { openModal } from "../../store/ui-actions";

const DashboardPage = () => {
  // const dispatch = useDispatch();
  // const tome = useSelector((state) => state.tome);
  // const level = useSelector((state) => state.player.level);

  // useEffect(() => {
  //   dispatch(playerActions.checkForLevelUp({ tome }));
  // }, [dispatch, tome]);

  // useEffect(() => {
  //   const currentLevel = store.getState().player.level;
  //   if (level !== currentLevel && !store.getState().ui.modalIsVisible) {
  //     openModal(dispatch, "attributeModal");
  //   }
  // }, [dispatch, level]);

  return <div className="flex justify-center p-4 h-full  gap-4">
    <TomeColumn />
    <PlayerColumn />
    <DungeonColumn />
  </div>;
};

export default DashboardPage;
