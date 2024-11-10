"use client";

import { useDispatch, useSelector } from "react-redux";
// import { playerActions } from "@/store/player-slice";

import store, { RootState } from "../../../store/index";

import activateItem from "../../../store/item-actions";
import { uiActions } from "@/store/ui-slice";

import { setSelect } from "@/store/combat-actions";

export default function Item({ item, count = 1 }) {
  const dispatch = useDispatch();
  const isDanger = useSelector((state: RootState) => state.dungeon.danger);

  const handleItemClick = (item) => {
    const isItemListOpen = store.getState().ui.itemListIsVisible;
    setSelect(item);

    // Call activateItem here when not in combat
    if (!isDanger) {
      activateItem(dispatch, item);
    }

    if (isItemListOpen) {
      dispatch(
        uiActions.changeUi({ element: "itemListIsVisible", visible: false })
      );
    }
  };

  return (
    <li
      onClick={() => handleItemClick(item)}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <span>{count > 1 ? `x${count}` : ""}</span>
    </li>
  );
}
