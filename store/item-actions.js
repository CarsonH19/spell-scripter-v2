import store from "./index";

import { playerActions } from "./player-slice";
import { combatActions } from "./combat-slice";
import { logActions } from "./log-slice";
import { uiActions } from "./ui-slice";

import changeStatusEffect from "./status-effect-actions";
import { itemFunctions } from "../util/item-functions";
import updateStatTotals from "./stats-actions";
// import playSoundEffect from "../util/audio-util";
import { getTarget } from "./combat-actions";

export default async function activateItem(dispatch, item) {
  const dashboard = store.getState().ui.dashboardIsVisible;
  console.log("UI", dashboard)
  let player;

  if (!dashboard) {
    const order = store.getState().combat.order;
    player = order.find((char) => char.id === "Player");
    // Set isCharacterTurn to null to remove itemList
    dispatch(combatActions.initiativeTracker({ change: "REMOVE" }));
  } else {
    player = store.getState().player;
  }

  console.log(player)

  switch (item.type) {
    case "EQUIPMENT":
      {
        // In Dungeon -> combat-slice
        if (!dashboard) {
          console.log(player);
          if (player.inventory.attunedItems.includes(item)) {
            // remove item from attunedItems
            dispatch(
              combatActions.changePlayerAttunement({ item, change: "REMOVE" })
            );
            changeStatusEffect(dispatch, player, "REMOVE", item);
            // playSoundEffect(false, "ui", "unattune");
          } else if (player.inventory.attunedItems.length < 5) {
            // equip item to attunedItems
            dispatch(
              combatActions.changePlayerAttunement({ item, change: "ADD" })
            );
            // NOTE - must update player state at the end of the dungeon gameplay
            changeStatusEffect(dispatch, player, "ADD", item);
            // playSoundEffect(false, "ui", "magicStone", 0.2);
          }
        }
        // In Dashboard -> player-slice
        if (dashboard) {
          if (player.inventory.attunedItems.includes(item)) {
            // remove item from attunedItems
            dispatch(
              playerActions.changeAttunement({ item, change: "REMOVE" })
            );
            changeStatusEffect(dispatch, player, "REMOVE", item);
            // playSoundEffect(false, "ui", "unattune");
          } else if (player.inventory.attunedItems.length < 5) {
            // equip item to attunedItems
            dispatch(playerActions.changeAttunement({ item, change: "ADD" }));
            changeStatusEffect(dispatch, player, "ADD", item);
            // playSoundEffect(false, "ui", "magicStone", 0.2);
          }
        }
      }
      break;

    case "CONSUMABLE":
      {
        // Can't use consumables on the dashboard
        if (dashboard) return;
        const snakeCaseItem = toSnakeCase(item.name);
        const itemFunction = itemFunctions[snakeCaseItem];

        // Don't include items that can only be used in specific situations
        if (
          item.name !== "Skeleton Key" &&
          item.name !== "Laughing Coffin Coin" &&
          item.name !== "Magic Rope" &&
          item.name !== "Trap Disarming Kit" &&
          item.name !== "Smoke Bomb"
        ) {
          // Call consumable function
          if (itemFunction) {
            // Consumable only targets the player
            if (item.target && item.target === "PLAYER") {
              itemFunction(dispatch, player);
              dispatch(
                uiActions.changeUi({
                  element: "modalIsVisible",
                  visible: false,
                })
              );
            }

            // Consumable can target any ally
            if (!item.target) {
              dispatch(logActions.updateLogs({ change: "CLEAR" }));
              dispatch(logActions.updateLogs({ change: "PAUSE" }));
              // If consumable is selected in the modal, close the modal to select a target
              dispatch(
                uiActions.changeUi({
                  element: "modalIsVisible",
                  visible: false,
                })
              );
              dispatch(
                logActions.updateLogs({
                  change: "ADD",
                  text: `Choose an ally!`,
                })
              );
              const target = await getTarget("ALLIES");
              dispatch(logActions.updateLogs({ change: "CLEAR" }));
              dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
              itemFunction(dispatch, target);
            }
          } else {
            console.log("NO ITEM FUNCTION FOUND", item);
          }

          // if (item.audio) playSoundEffect(...item.audio);

          dispatch(
            combatActions.changePlayerInventory({ item, change: "REMOVE" })
          );
        }
      }
      break;

    case "MISC":
      {
        if (dashboard) return;
        const snakeCaseItem = toSnakeCase(item.name);
        const itemFunction = itemFunctions[snakeCaseItem];

        if (itemFunction) {
          itemFunction(dispatch, item);
        }

        // if (item.audio) playSoundEffect(...item.audio);
      }
      break;
  }

  // Set pieces are checked for in updateStatTotals()
  updateStatTotals(dispatch, player.id);
}

function toSnakeCase(str) {
  return str.replace(/'/g, "").toUpperCase().replace(/\s+/g, "_");
}
