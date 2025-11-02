"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import store from "@/store/index";

import DungeonColumn from "./dungeon-column";
import PlayerColumn from "./player-column";
import TomeColumn from "./tome-column";

import { playerActions } from "@/store/player-slice";
import { openModal } from "@/store/ui-actions";

// For item testing
import { v4 as uuidv4 } from "uuid";
import CONSUMABLES from "@/data/consumables";
import EQUIPMENT from "@/data/equipment";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const tome = useSelector((state) => state.tome);
  const level = useSelector((state) => state.player.level);

  useEffect(() => {
    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.HEALTH_POTION, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.MANA_POTION, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SPINE_OF_THE_NECROMANCER, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SPINE_OF_THE_NECROMANCER, id: uuidv4() },
        change: "ADD",
      })
    );
  }, []);

  useEffect(() => {
    dispatch(playerActions.checkForLevelUp({ tome }));
  }, [dispatch, tome]);

  // useEffect(() => {
  //   const currentLevel = store.getState().player.level;
  //   if (level !== currentLevel && !store.getState().ui.modalIsVisible) {
  //     openModal(dispatch, "attributeModal");
  //   }
  // }, [dispatch, level]);

  return (
    <div className="flex justify-center p-4 h-full  gap-4">
      <TomeColumn />
      <PlayerColumn />
      <DungeonColumn />
    </div>
  );
};

export default DashboardPage;
