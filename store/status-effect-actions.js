// import { combatActions } from "../store/combat-slice";

// import store from "../store";

// import updateStatTotals from "../store/stats-actions";
// import { playerActions } from "../store/player-slice";
// import statusEffectFunctions from "../util/status-effect-functions";

// export default function changeStatusEffect(
//   dispatch,
//   target,
//   change,
//   statusEffect
// ) {
//   // CHECK IF target is valid
//   if (!target || !statusEffect) {
//     return;
//   }

//   const dashboard = store.getState().ui.dashboardIsVisible;

//   if (target.identifier === "PLAYER") {
//     let player;
//     if (!dashboard) {
//       const order = store.getState().combat.order;
//       player = order.find((char) => char.id === "Player");
//     } else if (dashboard) {
//       player = store.getState().player;
//     }

//     target = player;
//   } else {
//     const order = store.getState().combat.order;
//     const index = order.findIndex((char) => char.id === target.id);
//     target = order[index];
//   }

//   // Check if status effect already exists
//   if (
//     !checkCurrentStatusEffects(target, statusEffect.name) &&
//     change === "ADD"
//   ) {
//     if (dashboard && target.identifier === "PLAYER") {
//       // If the player is on the dashboard the player-slice object is updated
//       dispatch(
//         playerActions.updateStatusEffects({
//           change,
//           statusEffect,
//         })
//       );
//     } else {
//       // If the player is in a dungeon the combat-slice object is updated
//       dispatch(
//         combatActions.updateStatusEffects({
//           id: target.id,
//           change,
//           statusEffect,
//         })
//       );
//     }
//   } else if (
//     checkCurrentStatusEffects(target, statusEffect.name) &&
//     change === "ADD"
//   ) {
//     // if condition exists & has the stack property, increment the stack
//     if ("stack" in statusEffect) {
//       // Find status effect stack in current combat order
//       const order = store.getState().combat.order;
//       const character = order.find((char) => char.id === target.id);
//       const currentEffect = character.statusEffects.find(
//         (effect) => effect.name === statusEffect.name
//       );

//       // Remove status effect
//       dispatch(
//         combatActions.updateStatusEffects({
//           id: target.id,
//           change: "REMOVE",
//           statusEffect,
//         })
//       );

//       // Update stack manually in status effect
//       let updatedStatusEffect;
//       switch (statusEffect.name) {
//         case "Chilled": {
//           updatedStatusEffect = {
//             ...statusEffect,
//             stack: currentEffect.stack + 1,
//             duration: statusEffect.reset,
//             get effect() {
//               return [`Agility -${this.stack}`];
//             },
//             get stats() {
//               return {
//                 agility: {
//                   agilityChange: -1 * this.stack,
//                 },
//               };
//             },
//           };
//           break;
//         }

//         case "Poisoned": {
//           updatedStatusEffect = {
//             ...statusEffect,
//             stack: currentEffect.stack + 1,
//             duration: statusEffect.reset,
//             get effect() {
//               return [
//                 `The target takes ${this.stack} damage at the end of each of its turns.`,
//                 "HP Regeneration is reduced to 0",
//               ];
//             },
//           };
//           break;
//         }

//         case "Diseased": {
//           updatedStatusEffect = {
//             ...statusEffect,
//             stack: currentEffect.stack + 1,
//             duration: statusEffect.reset,
//             get effect() {
//               return [`Max Health reduced by ${this.stack * 20}%`];
//             },
//           };
//           break;
//         }
//       }

//       // Add updated status effect
//       dispatch(
//         combatActions.updateStatusEffects({
//           id: target.id,
//           change: "ADD",
//           statusEffect: updatedStatusEffect,
//         })
//       );

//       // If condition already exists and has a reset property, reset its duration
//     } else if ("reset" in statusEffect) {
//       dispatch(
//         combatActions.updateStatusEffectDuration({
//           id: target.id,
//           name: statusEffect.name,
//           change: "RESET",
//           reset: statusEffect.reset,
//         })
//       );
//     }
//   } else if (change === "REMOVE") {
//     // ADD player-slice reducer here
//     if (dashboard) {
//       dispatch(playerActions.updateStatusEffects({ change, statusEffect }));
//     } else {
//       dispatch(
//         combatActions.updateStatusEffects({
//           id: target.id,
//           change,
//           statusEffect,
//         })
//       );
//     }
//   }

//   // NOTE: Check for immunity first then call function to check if displayed
//   checkForDamageDisplayDispatches(dispatch, target, statusEffect);
//   updateStatTotals(dispatch, target.id);
//   return false;
// }

// // Checks to see if the target already has the status effect
// export function checkCurrentStatusEffects(target, effectName) {
//   if (target.statusEffects.length > 0) {
//     const statusIndex = target.statusEffects.findIndex(
//       (effect) => effect.name === effectName
//     );
//     if (statusIndex !== -1) {
//       return true;
//     }
//   }

//   return false;
// }

// // Used to call status effect functions if when
// // START TURN / END TURN
// export function callStatusEffect(dispatch, target, when) {
//   const order = store.getState().combat.order;
//   const character = order.find((char) => char.id === target.id);

//   const statusEffects = character.statusEffects;
//   for (let i = 0; i < statusEffects.length; i++) {
//     if (statusEffects[i].function) {
//       const statusEffectFunction =
//         statusEffectFunctions[statusEffects[i].function];
//       if (statusEffectFunction && statusEffects[i].when === when) {
//         // Add status effect function specific arguments if needed
//         statusEffectFunction(dispatch, character);
//         // console.log("Status Effect Function Called", statusEffects[i]);
//       }

//       // if (statusEffectFunction && !when) {
//       //   statusEffectFunction(dispatch, character);
//       // }
//     }
//   }
// }

// // Called within combatLoop & RoomSummaryModal to handle status effect changes
// export function checkStatusEffect(dispatch, id, check, type) {
//   const order = store.getState().combat.order;
//   const index = order.findIndex((char) => char.id === id);
//   if (index === undefined) return;
//   const statusEffects = order[index].statusEffects;

//   if (!statusEffects) {
//     console.log("Undefined variable");
//     return;
//   }

//   switch (check) {
//     case "REMOVE": // Check for removal
//       for (let i = 0; i < statusEffects.length; i++) {
//         if (statusEffects[i].duration <= 0) {
//           dispatch(
//             combatActions.updateStatusEffects({
//               id,
//               statusEffect: statusEffects[i],
//               change: "REMOVE",
//             })
//           );
//         }
//       }

//       updateStatTotals(dispatch, id);
//       break;

//     case "END": // End effects with round/action durations after combat
//       for (let i = 0; i < statusEffects.length; i++) {
//         if (
//           (statusEffects[i].durationType &&
//             statusEffects[i].durationType === "ROUND") ||
//           statusEffects[i].durationType === "ACTION"
//         ) {
//           dispatch(
//             combatActions.updateStatusEffects({
//               id,
//               statusEffect: statusEffects[i],
//               change: "REMOVE",
//             })
//           );
//         }
//       }

//       updateStatTotals(dispatch, id);
//       break;

//     case "DECREMENT": // Check for duration decrement
//       for (let i = 0; i < statusEffects.length; i++) {
//         if (statusEffects[i].durationType === type) {
//           dispatch(
//             combatActions.updateStatusEffectDuration({
//               id,
//               name: statusEffects[i].name,
//               change: "DECREMENT",
//             })
//           );
//         }
//       }
//       break;
//   }
// }

// // Check which status effects should be displayed when they are added to a character
// function checkForDamageDisplayDispatches(dispatch, target, statusEffect) {
//   let updateDispatch;
//   let styledItem;

//   if (
//     statusEffect.name === "Burning" ||
//     statusEffect.name === "Chilled" ||
//     statusEffect.name === "Stunned" ||
//     statusEffect.name === "Poisoned" ||
//     statusEffect.name === "Diseased" ||
//     statusEffect.name === "Haunted" ||
//     statusEffect.name === "Cursed" ||
//     statusEffect.name === "Withered" ||
//     statusEffect.name === "Restrained"
//   ) {
//     updateDispatch = true;
//   }

//   if (updateDispatch) {
//     styledItem = statusEffect.name.toLowerCase();
//     dispatch(
//       combatActions.updateDamageDisplay({
//         id: target.id,
//         content: { item: statusEffect.name, style: styledItem },
//       })
//     );
//   }
// }
