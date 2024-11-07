// import classes from "./PlayerColumn.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { openModal } from "../../../store/ui-actions";
import Image from "next/image";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faToolbox,
//   faBookOpen,
//   faUsers,
//   faCircleExclamation,
//   faGear,
//   faUser,
//   faCubes,
// } from "@fortawesome/free-solid-svg-icons";

// import Tooltip from "../../UI/Tooltip";
// import updateStatTotals from "../../../store/stats-actions";
// import { useEffect } from "react";

export default function PlayerColumn() {
  // const dispatch = useDispatch();
  // const player = useSelector((state) => state.player);
  // const { prevLevel, nextLevel } = setNextLevel(player.totalMasteryPoints);

  // useEffect(() => {
  //   // Update player stats on render
  //   updateStatTotals(dispatch, "Player");
  // }, []);

  // const handleOpenModal = (modal) => {
  //   openModal(dispatch, modal);
  // };

  return (
    <div className="relative w-1/3 h-full p-4 border-3 border-secondary rounded-lg flex flex-col transition duration-300 hover:bg-[#33395b]">
      <div className="relative w-full flex flex-col items-center justify-between gap-4 p-4 flex-grow">
        {/* Player Header */}
        <div className="z-10 w-4/5 flex flex-col items-center gap-2">
          <h1 className="text-center">player.name</h1>
          <div className="relative w-full flex justify-between text-sm">
            <p>Level: player.level</p>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* {Math.round(((player.totalMasteryPoints - prevLevel) / (nextLevel - prevLevel)) * 100)} */}
            </p>
            <p>{/* {player.totalMasteryPoints}/{nextLevel} */}</p>
          </div>
          {/* <progress
            value={player.totalMasteryPoints - prevLevel}
            max={nextLevel - prevLevel}
            className="w-full h-2 rounded bg-gray-400"
          ></progress>
          <p>Mastery Points: {player.totalMasteryPoints}</p> */}
        </div>

        {/* Player Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-[70vh] pointer-events-none z-0">
          <Image
            src={`assets/images/player/player-1.png`}
            alt="Player Image"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Player Menu */}
        <div className="flex items-center justify-evenly flex-wrap w-full gap-4">
          <div
            // onClick={() => handleOpenModal("spellbookModal")}
            className="text-center text-sm cursor-pointer"
          >
            <p>Spellbook</p>
          </div>
          <div
            // onClick={() => handleOpenModal("inventoryModal")}
            className="text-center text-sm cursor-pointer"
          >
            <p>Inventory</p>
          </div>
          <div
            // onClick={() => handleOpenModal("heroesModal")}
            className="text-center text-sm cursor-pointer"
          >
            <p>Heroes</p>
          </div>
          <div
            // onClick={() => handleOpenModal("questsModal")}
            className="text-center text-sm cursor-pointer"
          >
            <p>Quests</p>
          </div>
          <div
            // onClick={() => handleOpenModal("attributeModal")}
            className="text-center text-sm cursor-pointer"
          >
            <p>Attributes</p>
          </div>
        </div>
      </div>

      {/* Settings Icon */}
      <div
        // onClick={() => handleOpenModal("settingsModal")}
        className="absolute top-2 right-2 cursor-pointer transition transform hover:scale-110 text-accent"
      >
        {/* <FontAwesomeIcon icon={faGear} /> */}
      </div>
    </div>
  );
}

// function setNextLevel(totalMasteryPoints) {
//   if (totalMasteryPoints >= 48) {
//     return { prevLevel: 48, nextLevel: 48 };
//   } else if (totalMasteryPoints >= 32) {
//     return { prevLevel: 32, nextLevel: 48 };
//   } else if (totalMasteryPoints >= 24) {
//     return { prevLevel: 24, nextLevel: 32 };
//   } else if (totalMasteryPoints >= 17) {
//     return { prevLevel: 17, nextLevel: 24 };
//   } else if (totalMasteryPoints >= 11) {
//     return { prevLevel: 11, nextLevel: 17 };
//   } else if (totalMasteryPoints >= 7) {
//     return { prevLevel: 7, nextLevel: 11 };
//   } else if (totalMasteryPoints >= 4) {
//     return { prevLevel: 4, nextLevel: 7 };
//   } else if (totalMasteryPoints >= 2) {
//     return { prevLevel: 2, nextLevel: 4 };
//   } else if (totalMasteryPoints === 1) {
//     return { prevLevel: 1, nextLevel: 2 };
//   }
// }
