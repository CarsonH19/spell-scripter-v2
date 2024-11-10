export let targetType = "";

export default function setTargetType(targets) {
  targetType = targets;
  // console.log(`targetType = ${targetType}`);
}

// This global variable will be used to set which targets can be selected by the player. Set the targetType by passing the type through the getTartion

// types:
// // ENEMIES - all enemies
// // ALLIES - all heroes and the player
// //
