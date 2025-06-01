// import classes from "./Buttons.module.css";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { openModal } from "@/store/ui-actions";

import { Button } from "@/components/ui/button";

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
        {/* INVENTORY */}
        <Button
          size="sm"
          variant="secondary"
          className="w-12 h-12"
          onClick={() => handleOpenModal("inventoryModal")}
        >
          <Backpack
            className={
              "transition-transform duration-300 hover:scale-125"
            }
            style={isDanger ? { pointerEvents: "none", opacity: 0.6 } : {}}
          />
        </Button>

        {/* <Users
          className="h-8 w-8 p-2 rounded-lg text-primary border border-primary bg-secondary transition-transform hover:text-secondary hover:bg-primary"
          onClick={() => handleOpenModal("partyModal")}
        /> */}

        {/* QUESTS */}
        <Button
          size="sm"
          variant="secondary"
          className="w-12 h-12"
          onClick={() => handleOpenModal("questsModal")}
        >
          <ShieldAlert
            className={
              "transition-transform duration-300 hover:scale-125"
            }
          />
        </Button>

        {/* TOMES */}
        <Button
          size="sm"
          variant="secondary"
          className="w-12 h-12"
          onClick={() => handleOpenModal("dungeonTomesModal")}
        >
          <BookText
            className={
              "transition-transform duration-300 hover:scale-125"
            }
          />
        </Button>
        
        {/* SETTINGS */}
        <Button
          size="sm"
          variant="secondary"
          className="w-12 h-12"
          onClick={() => handleOpenModal("settingsModal")}
        >
          <Settings
            className={
              "transition-transform duration-300 hover:scale-125"
            }
          />
        </Button>
      </div>
    )
  );
}
