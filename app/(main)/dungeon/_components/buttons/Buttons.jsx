// import classes from "./Buttons.module.css";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { openModal } from "@/store/ui-actions";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faToolbox,
//   faScroll,
//   faUsersLine,
//   faPersonCircleExclamation,
//   faGear,
// } from "@fortawesome/free-solid-svg-icons";

import { Backpack, BookText, Users, ShieldAlert, Settings } from "lucide-react";

export default function Buttons() {
  const dispatch = useDispatch();
  const isDialogue = useSelector((state) => state.dialogue.active);
  const isDanger = useSelector((state) => state.dungeon.danger);

  const handleOpenModal = (modal) => {
    openModal(dispatch, modal);
  };

  return (
    !isDialogue && (
      <div className="absolute top-[96%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 flex justify-center items-end gap-2">
        <Backpack
          className={
            "w-12 h-12 p-2 cursor-pointer text-accent border-2 border-accent rounded-md transition-0.5s hover:bg-accent hover:text-black"
          }
          onClick={() => handleOpenModal("inventoryModal")}
          style={isDanger ? { pointerEvents: "none", opacity: 0.6 } : {}}
        />
        {/* <Users
          className="h-8 w-8 p-2 rounded-lg text-primary border border-primary bg-secondary transition-transform hover:text-secondary hover:bg-primary"
          onClick={() => handleOpenModal("partyModal")}
        /> */}
        <ShieldAlert
          className="h-8 w-8 p-2 rounded-lg text-primary border border-primary bg-secondary transition-transform hover:text-secondary hover:bg-primary"
          onClick={() => handleOpenModal("questsModal")}
        />
        <BookText
          className="h-8 w-8 p-2 rounded-lg text-primary border border-primary bg-secondary transition-transform hover:text-secondary hover:bg-primary"
          onClick={() => handleOpenModal("dungeonTomesModal")}
        />
        <Settings
          className="h-8 w-8 p-2 rounded-lg text-primary border border-primary bg-secondary transition-transform hover:text-secondary hover:bg-primary"
          onClick={() => handleOpenModal("settingsModal")}
        />
      </div>
    )
  );
}
