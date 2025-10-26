import { dialogueActions } from "../store/dialogue-slice";
import { uiActions } from "../store/ui-slice";

import store from "../store/index";
import { GRAVESTONE } from "../data/events";
import {
  UNLOCKING_LIHETH_DIALOGUE,
  UNLOCKING_SIGGURD_DIALOGUE,
  DUNGEON_ENTRANCE_DIALOGUE,
  GRAVESTONE_DIALOGUE,
  AMBUSH_DIALOGUE,
  COFFIN_DIALOGUE,
  CANDLELIGHT_SHRINE_DIALOGUE,
  BONEVAULT_DIALOGUE,
} from "../data/dialogues/catacomb-event-dialogue";
import {
  LAUGHING_COFFIN_DIALOGUE,
  THIEVES_RUIN_ENTRANCE_DIALOGUE,
} from "../data/dialogues/thieves-ruin-dialogue";
import { WAILING_WARRENS_ENTRANCE_DIALOGUE } from "../data/dialogues/wailing-warrens-dialogue";

let dialogueResolver;

export default async function checkForDialogue(dispatch, type, choice = null) {
  const dungeon = store.getState().dungeon;
  await delay(2000);

  // if a dialogue is available it
  await getDialogue(dispatch, type, choice);

  const dialogue = store.getState().dialogue;

  // Check if dialogue has been set in dialogue-slice
  if (dialogue[type] && dialogue[type].length > 0) {
    dispatch(dialogueActions.startDialogue(type));
    await awaitDialogue();
    await dispatch(dialogueActions.clearDialogue(type));
  }

  // Render event options after dialogue
  if (
    type === "before" &&
    dungeon.contents.event &&
    dungeon.contents.event.options
  ) {
    dispatch(
      uiActions.changeUi({ element: "eventOptionsAreVisible", visible: true })
    );
  }
}

// =============================================================
//       Awaiting dialogue before starting combat or event
// =============================================================

// // Used to await the end of a dialogue
export async function awaitDialogue() {
  return new Promise((resolve) => {
    dialogueResolver = resolve;
  });
}

// // Function to end the dialogue
export function endDialogue(dispatch) {
  if (dialogueResolver) {
    dispatch(dialogueActions.finishDialogue());
    dialogueResolver("CONTINUE");
    dialogueResolver = null;
  }
}

// ===============================================================
//                    GET DIALOGUE
// ===============================================================

// getDialogue() is
export async function getDialogue(dispatch, type, choice = null) {
  const dungeon = store.getState().dungeon;
  const order = store.getState().combat.order;
  const siggurd = order.find((char) => char.id === "Siggurd");
  const liheth = order.find((char) => char.id === "Liheth");
  const riven = order.find((char) => char.id === "Riven");
  let dialogueOptions = [];

  // ===============================================================
  //                      DUNGEON ENTRANCES
  // ===============================================================
  // Check for before dialogues when entering a dungeon

  if (
    type === "before" &&
    dungeon.contents.event &&
    dungeon.contents.event.name === "Dungeon Entrance"
  ) {
    switch (dungeon.name) {
      case "The Great Catacomb": {
        if (siggurd) {
          for (let i = 0; i < DUNGEON_ENTRANCE_DIALOGUE.SIGGURD.length; i++) {
            dialogueOptions.push(DUNGEON_ENTRANCE_DIALOGUE.SIGGURD[i]);
          }
        }
        if (liheth) {
          for (let i = 0; i < DUNGEON_ENTRANCE_DIALOGUE.LIHETH.length; i++) {
            dialogueOptions.push(DUNGEON_ENTRANCE_DIALOGUE.LIHETH[i]);
          }
        }
        for (let i = 0; i < DUNGEON_ENTRANCE_DIALOGUE.PLAYER.length; i++) {
          dialogueOptions.push(DUNGEON_ENTRANCE_DIALOGUE.PLAYER[i]);
        }

        break;
      }

      // NOTE: Add new dungeons here
      default:
        break;
    }
  }

  // ===============================================================
  //                        PATH ENTRANCES
  // ===============================================================
  // Check before dialogues when a path entrance is found

  // ===============================================================
  //                        PATH EXITS
  // ===============================================================
  // Check before dialogues when a path exit is found

  // ===============================================================
  //                        EVENTS
  // ===============================================================
  // Check before, response, and after for all events

  // The Great Catacomb
  if (
    dungeon.contents.event &&
    dungeon.contents.event.name !== "Dungeon Entrance"
  ) {
    switch (dungeon.contents.event.name) {
      case "Candlelight Shrine":
        switch (type) {
          case "before":
            if (siggurd) {
              for (
                let i = 0;
                i < CANDLELIGHT_SHRINE_DIALOGUE.SIGGURD.before.length;
                i++
              ) {
                dialogueOptions.push(
                  CANDLELIGHT_SHRINE_DIALOGUE.SIGGURD.before[i]
                );
              }
            }

            if (liheth) {
              for (
                let i = 0;
                i < CANDLELIGHT_SHRINE_DIALOGUE.LIHETH.before.length;
                i++
              ) {
                dialogueOptions.push(
                  CANDLELIGHT_SHRINE_DIALOGUE.LIHETH.before[i]
                );
              }
            }

            for (
              let i = 0;
              i < CANDLELIGHT_SHRINE_DIALOGUE.PLAYER.before.length;
              i++
            ) {
              dialogueOptions.push(
                CANDLELIGHT_SHRINE_DIALOGUE.PLAYER.before[i]
              );
            }

            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Coffin":
        switch (type) {
          case "before":
            if (siggurd) dialogueOptions.push(COFFIN_DIALOGUE.SIGGURD.before);
            if (liheth) dialogueOptions.push(COFFIN_DIALOGUE.LIHETH.before);
            dialogueOptions.push(COFFIN_DIALOGUE.PLAYER.before);
            break;
          case "response":
            if (choice === "Open") {
              if (siggurd)
                dialogueOptions.push(COFFIN_DIALOGUE.SIGGURD.responseEnemy);
              if (liheth)
                dialogueOptions.push(COFFIN_DIALOGUE.LIHETH.responseEnemy);
              dialogueOptions.push(COFFIN_DIALOGUE.PLAYER.responseEnemy);
            }
            break;
          case "after":
            // If enemy is spawned from coffin
            if (choice === "Open") {
              if (siggurd)
                dialogueOptions.push(COFFIN_DIALOGUE.SIGGURD.afterEnemy);
              if (liheth)
                dialogueOptions.push(COFFIN_DIALOGUE.LIHETH.afterEnemy);
              dialogueOptions.push(COFFIN_DIALOGUE.PLAYER.afterEnemy);
            }

            if (choice === "Leave") {
              if (siggurd)
                dialogueOptions.push(COFFIN_DIALOGUE.SIGGURD.afterLeave);
              if (liheth)
                dialogueOptions.push(COFFIN_DIALOGUE.LIHETH.afterLeave);
              dialogueOptions.push(COFFIN_DIALOGUE.PLAYER.afterLeave);
            }
            break;
        }
        break;

      case "Gravestone":
        switch (type) {
          case "before":
            if (siggurd) {
              dialogueOptions.push(GRAVESTONE_DIALOGUE.SIGGURD.before);
            }
            if (liheth) {
              dialogueOptions.push(GRAVESTONE_DIALOGUE.LIHETH.before);
            }
            dialogueOptions.push(GRAVESTONE_DIALOGUE.PLAYER.before);

            break;
          case "response":
            //
            break;
          case "after":
            if (choice === "Place a flower") {
              if (siggurd) {
                dialogueOptions.push(
                  GRAVESTONE_DIALOGUE.SIGGURD.afterPlaceAFlower
                );
              }
              if (liheth) {
                dialogueOptions.push(
                  GRAVESTONE_DIALOGUE.LIHETH.afterPlaceAFlower
                );
              }
              dialogueOptions.push(
                GRAVESTONE_DIALOGUE.PLAYER.afterPlaceAFlower
              );
            }

            if (choice === "Leave") {
              if (siggurd) {
                dialogueOptions.push(GRAVESTONE_DIALOGUE.SIGGURD.afterLeave);
              }
              if (liheth) {
                dialogueOptions.push(GRAVESTONE_DIALOGUE.LIHETH.afterLeave);
              }
              dialogueOptions.push(GRAVESTONE_DIALOGUE.PLAYER.afterLeave);
            }
            break;
        }

        break;

      case "Bonevault":
        switch (type) {
          case "before":
            if (siggurd)
              dialogueOptions.push(BONEVAULT_DIALOGUE.SIGGURD.before);
            if (liheth) dialogueOptions.push(BONEVAULT_DIALOGUE.LIHETH.before);
            dialogueOptions.push(BONEVAULT_DIALOGUE.PLAYER.before);
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Ambush":
        switch (type) {
          case "before":
            if (siggurd) dialogueOptions.push(AMBUSH_DIALOGUE.SIGGURD.before);
            if (liheth) dialogueOptions.push(AMBUSH_DIALOGUE.LIHETH.before);
            dialogueOptions.push(AMBUSH_DIALOGUE.PLAYER.before);
            break;
          case "response":
            if (choice === "Refuse") {
              if (siggurd)
                dialogueOptions.push(AMBUSH_DIALOGUE.SIGGURD.responseRefuse);
              if (liheth)
                dialogueOptions.push(AMBUSH_DIALOGUE.LIHETH.responseRefuse);
              dialogueOptions.push(AMBUSH_DIALOGUE.PLAYER.responseRefuse);
            }
            break;
          case "after":
            if (choice === "Refuse") {
              if (siggurd)
                dialogueOptions.push(AMBUSH_DIALOGUE.SIGGURD.afterRefuse);
              if (liheth)
                dialogueOptions.push(AMBUSH_DIALOGUE.LIHETH.afterRefuse);
              dialogueOptions.push(AMBUSH_DIALOGUE.PLAYER.afterRefuse);
            }
            if (choice === "Surrender") {
              if (siggurd)
                dialogueOptions.push(AMBUSH_DIALOGUE.SIGGURD.afterSurrender);
              if (liheth)
                dialogueOptions.push(AMBUSH_DIALOGUE.LIHETH.afterSurrender);
              dialogueOptions.push(AMBUSH_DIALOGUE.PLAYER.afterSurrender);
            }
            break;
        }
        break;

      case "Spike Walls":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Collapsing Ceiling":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Rotating Blades":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Magic Rune":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Unlocking Siggurd":
        switch (type) {
          case "before":
            dialogueOptions.push(UNLOCKING_SIGGURD_DIALOGUE.before);
            break;
          case "after":
            dialogueOptions.push(UNLOCKING_SIGGURD_DIALOGUE.after);
            break;
        }
        break;

      case "Unlocking Liheth":
        switch (type) {
          case "before":
            dialogueOptions.push(UNLOCKING_LIHETH_DIALOGUE.before);
            break;
          case "after":
            dialogueOptions.push(UNLOCKING_LIHETH_DIALOGUE.after);
            break;
        }
        break;

      // Wailing Warrens - Entrance
      case "Wailing Warrens":
        switch (type) {
          case "before":
            // Siguurd
            // Liheth
            dialogueOptions.push(
              WAILING_WARRENS_ENTRANCE_DIALOGUE.PLAYER.before
            );
            break;
          case "response":
            dialogueOptions.push(
              WAILING_WARRENS_ENTRANCE_DIALOGUE.PLAYER.responseEnter
            );
            break;
        }
        break;

      // Thieves' Ruin - Entrance
      case "Thieves' Ruin":
        switch (type) {
          case "before":
            // Siguurd
            // Liheth
            dialogueOptions.push(THIEVES_RUIN_ENTRANCE_DIALOGUE.PLAYER.before);
            break;
          case "response":
            dialogueOptions.push(
              THIEVES_RUIN_ENTRANCE_DIALOGUE.PLAYER.responseEnter
            );
            break;
        }

        break;

      default:
        break;
    }
  }

  // Wailing Warrens - Path Events
  // NOTE: Add event dialogues

  // Thieves' Ruin - Path Events
  if (dungeon.path === "Thieves' Ruin" && dungeon.contents.event) {
    switch (dungeon.contents.event.name) {
      case "Laughing Coffin":
        switch (type) {
          case "before":
            if (siggurd)
              dialogueOptions.push(LAUGHING_COFFIN_DIALOGUE.SIGGURD.before);

            if (liheth)
              dialogueOptions.push(LAUGHING_COFFIN_DIALOGUE.LIHETH.before);

            dialogueOptions.push(LAUGHING_COFFIN_DIALOGUE.PLAYER.before);
            break;

          case "response":
            // 4 player responses
            for (let i = 0; i < 4; i++) {
              dialogueOptions.push(LAUGHING_COFFIN_DIALOGUE.PLAYER.response[i]);
            }
            break;

          case "after":
            // 4 player responses
            for (let i = 0; i < 4; i++) {
              dialogueOptions.push(LAUGHING_COFFIN_DIALOGUE.PLAYER.after[i]);
            }
            break;
        }
        break;
    }
  }

  if (dialogueOptions.length > 0) {
    // Traps
    // Laughing Coffin

    // ===============================================================
    //                        MISC. COMBAT
    // ===============================================================
    // Calculate chance to have a short dialogue before combat begins

    // ===============================================================
    //                        INVENTORY
    // ===============================================================
    // Called when equipping or using certain items
    // Called when no more attunement slots are open

    // If options exist get a random option and update the dialogue-slice
    const index = Math.floor(Math.random() * dialogueOptions.length);
    dispatch(
      dialogueActions.updateDialogue({
        change: type,
        dialogue: dialogueOptions[index],
      })
    );
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// export async function handleDialogue(dispatch, type, choice = null) {
//   const event = store.getState().dungeon.contents.event;
//   // await getDialogue(dispatch, type, choice);
//   // await checkForDialogue(dispatch, type);

//   // Render event options after dialogue
//   if (type === "before" && event.options) {
//     dispatch(
//       uiActions.changeUi({ element: "eventOptionsAreVisible", visible: true })
//     );
//   }
// }
