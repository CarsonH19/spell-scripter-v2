"use client";

import { createPortal } from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-actions";

import { CircleX } from "lucide-react";

// import HeroesModal from "./Hero/HeroesModal";
// import InventoryModal from "./Inventory/InventoryModal";
// import SettingsModal from "./Settings/SettingsModal";
// import QuestsModal from "./Quests/QuestsModal";
// import SpellbookModal from "./Spellbook/SpellbookModal";
import TomesModal from "./tomes/TomesModal";
// import RoomSummaryModal from "./RoomSummary/RoomSummaryModal";
// import TradeModal from "./Trade/TradeModal";
// import HelpModal from "./Help/HelpModal";
// import ConfirmationModal from "./Confirmation/ConfirmationModal";
// import QuickTimeEventModal from "./QTE/QuickTimeEventModal";
// import DungeonTomesModal from "./DungeonTomes/DungeonTomesModal";
// import AttributeModal from "./Attribute/AttributeModal";
// import PartyModal from "./Party/PartyModal";
// import DefeatedModal from "./Defeated/DefeatedModal";

import { RootState } from "@/store";
// import playSoundEffect from "../../util/audio-util";

export default function Modal() {
  const dispatch = useDispatch();
  const ui = useSelector((state: RootState) => state.ui);
  console.log(ui);
  const activeModal = selectModal(ui);
  const openModal = findActiveModal(ui);

  const handleClose = () => {
    // Render continue button when RoomSummaryModal is closed
    if (openModal === "roomSummaryModal") {
      dispatch(
        uiActions.changeUi({ element: "continueIsVisible", visible: true })
      );
    } else {
      // playSoundEffect(false, "ui", "softs2", 0.7);
    }

    dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));
  };

  const modalElement = document.getElementById("modal");

  // Ensure that modalElement is not null before calling createPortal
  if (!modalElement) {
    return null; // Return null or handle the case where modalElement is not found
  }

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 text-white flex justify-center items-center">
      {activeModal}
      {/* Don't render close button on certain modals */}
      {openModal !== "quickTimeEventModal" && openModal !== "defeatedModal" && (
        <CircleX
          onClick={handleClose}
          className="absolute top-4 right-4 h-12 text-white cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      )}
    </div>,
    modalElement
  );
}

function selectModal(state) {
  const activeModal = findActiveModal(state);

  if (
    activeModal !== "roomSummaryModal" &&
    activeModal !== "quickTimeEventModal"
  ) {
    // playSoundEffect(false, "ui", "softs", 0.7);
  }

  switch (activeModal) {
    // case "heroesModal":
    //   return <HeroesModal />;

    // case "inventoryModal":
    //   return <InventoryModal />;

    // case "questsModal":
    //   return <QuestsModal />;

    // case "spellbookModal":
    //   return <SpellbookModal />;

    case "tomesModal":
      return <TomesModal tome={state.tome} />;

    // case "dungeonTomesModal":
    //   return <DungeonTomesModal />;

    // case "roomSummaryModal":
    //   playSoundEffect(false, "misc", "hitReverbDark4", 0.8);
    //   return <RoomSummaryModal />;

    // case "tradeModal":
    //   return <TradeModal />;

    // case "settingsModal":
    //   return <SettingsModal />;

    // case "helpModal":
    //   return <HelpModal />;

    // case "confirmationModal":
    //   return <ConfirmationModal />;

    // case "quickTimeEventModal":
    //   playSoundEffect(false, "misc", "qteStart", 1);
    //   return <QuickTimeEventModal />;

    // case "partyModal":
    //   return <PartyModal />;

    // case "attributeModal":
    //   return <AttributeModal />;

    // case "defeatedModal":
    //   return <DefeatedModal />;
  }
}

function findActiveModal(state) {
  const modalKeys = Object.keys(state.modal);
  for (const modalKey of modalKeys) {
    if (state.modal[modalKey]) {
      return modalKey;
    }
  }
  return null;
}
