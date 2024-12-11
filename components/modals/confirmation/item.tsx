"use client";

// import { useDispatch, useSelector } from "react-redux";
// import { playerActions } from "@/store/player-slice";

// import store, { RootState } from "../../../store/index";

// import activateItem from "../../../store/item-actions";
// import { uiActions } from "@/store/ui-slice";

// import { setSelect } from "@/store/combat-actions";


// TODO: move tooltip from inventory-modal here
export default function Item({ item }) {
  // const dispatch = useDispatch();
  // const isDanger = useSelector((state: RootState) => state.dungeon.danger);

  // const handleItemClick = (item) => {
  //   const isItemListOpen = store.getState().ui.itemListIsVisible;
  //   setSelect(item);

  //   // Call activateItem here when not in combat
  //   if (!isDanger) {
  //     activateItem(dispatch, item);
  //   }

  //   if (isItemListOpen) {
  //     dispatch(
  //       uiActions.changeUi({ element: "itemListIsVisible", visible: false })
  //     );
  //   }
  // };

  return (
    <li
      // onClick={() => handleItemClick(item)}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
      className="h-16 w-16 bg-secondary list-none cursor-pointer rounded-md border-2 border-secondary hover:scale-110 hover:border-text hover:shadow-inner transition-transform bg-center bg-no-repeat bg-cover"
    >
      {/* <span className="absolute bottom-1 right-1">{count > 1 ? `x${count}` : ""}</span> */}
    </li>
  );
}
