import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the modal state
interface ModalState {
  heroesModal: boolean;
  inventoryModal: boolean;
  questsModal: boolean;
  spellbookModal: boolean;
  tomesModal: boolean;
  dungeonTomesModal: boolean;
  roomSummaryModal: boolean;
  tradeModal: boolean;
  settingsModal: boolean;
  helpModal: boolean;
  confirmationModal: boolean;
  quickTimeEventModal: boolean;
  partyModal: boolean;
  attributeModal: boolean;
  defeatedModal: boolean;
}

// Define the initial state structure
export interface UiState {
  startIsVisible: boolean;
  dashboardIsVisible: boolean;
  gameWindowIsVisible: boolean;
  spellListIsVisible: boolean;
  itemListIsVisible: boolean;
  continueIsVisible: boolean;
  modalIsVisible: boolean;
  eventOptionsAreVisible: boolean;
  modal: ModalState;
  tome: any | null;
  fade: boolean;
}

// Define initial state
const initialState: UiState = {
  startIsVisible: true,
  dashboardIsVisible: true,
  gameWindowIsVisible: false,
  spellListIsVisible: false,
  itemListIsVisible: false,
  continueIsVisible: false,
  modalIsVisible: false,
  eventOptionsAreVisible: false,
  modal: {
    heroesModal: false,
    inventoryModal: false,
    questsModal: false,
    spellbookModal: false,
    tomesModal: false,
    dungeonTomesModal: false,
    roomSummaryModal: false,
    tradeModal: false,
    settingsModal: false,
    helpModal: false,
    confirmationModal: false,
    quickTimeEventModal: false,
    partyModal: false,
    attributeModal: false,
    defeatedModal: false,
  },
  tome: null,
  fade: false,
};

// Create the slice
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateActiveTome(state, action: PayloadAction<string | null>) {
      state.tome = action.payload;
    },
    changeUi(
      state,
      action: PayloadAction<{ element: keyof UiState; visible: boolean }>
    ) {
      const { element, visible } = action.payload;
      if (element in state) {
        state[element] = visible;
        console.log("CLOSED")
      }
    },
    openModal(
      state,
      action: PayloadAction<{ modal: keyof ModalState; open: boolean }>
    ) {
      const modal = action.payload.modal;
      // Set all modals to false
      Object.keys(state.modal).forEach((key) => {
        state.modal[key as keyof ModalState] = false;
      });

      if (action.payload.open) {
        // Set the target modal to true
        state.modal[modal] = true;
      }
    },
    updateFade(state, action: PayloadAction<{ change: "CALL" | "CLEAR" }>) {
      const { change } = action.payload;
      switch (change) {
        case "CALL":
          state.fade = true;
          break;
        case "CLEAR":
          state.fade = false;
          break;
      }
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
