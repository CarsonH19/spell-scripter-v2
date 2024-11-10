import store from "../store/index";
import { checkAbilityCooldowns } from "./ability-functions";

//Erratic = random actions / random targets
// Require additional info
//Protective - attacks who target the player/boss
//Vengeful - Attacks who target it
//Obedient - Attacks who the player attacks
//Tenacious - always attacks the same target

export function checkBehaviorAction(character) {
  const { abilityA, abilityB } = checkAbilityCooldowns(character);

  switch (character.behavior) {
    case "ERRATIC": // Random actions & targets
      const actions = ["ATTACK", "GUARD", "ABILITY"];
      let randomIndex;

      if (abilityA || abilityB) {
        randomIndex = Math.floor(Math.random() * 3);
      } else {
        randomIndex = Math.floor(Math.random() * 2);
      }
      return actions[randomIndex];

    case "ASTUTE": // Highest arcana
    case "DOMINANT": // Highest strength
      if (abilityA || abilityB) {
        return "ABILITY";
      } else if (
        character.currentHealth >
        character.stats.strength.maxHealth * 0.3
      ) {
        return "ATTACK";
      } else {
        return "GUARD";
      }

    case "RUTHLESS": // Always attacking lowest HP target
    case "AGGRESSIVE": // Always attacking randomly
      if (abilityA || abilityB) {
        return "ABILITY";
      } else {
        return "ATTACK";
      }

    case "SUPPORTIVE": // Focuses on buffing & healing
      if (abilityA || abilityB) {
        return "ABILITY";
      } else if (
        character.currentHealth >
        character.stats.strength.maxHealth * 0.5
      ) {
        return "ATTACK";
      } else {
        return "GUARD";
      }

    case "DEFENSIVE": // Doesn't attack, only performs abilities or guards
      if (abilityA || abilityB) {
        return "ABILITY";
      } else {
        return "GUARD";
      }
  }
}

export function checkBehaviorAttackTarget(character) {
  let targetGroup = findTargetGroup(character);

  switch (character.behavior) {
    case "ERRATIC":
      const randomIndex = Math.floor(Math.random() * targetGroup.length);
      return targetGroup[randomIndex];

    case "ASTUTE": {
      let target = targetGroup[0];
      for (let i = 0; i < targetGroup.length; i++) {
        if (
          targetGroup[i].stats.arcana.totalArcana >
          target.stats.arcana.totalArcana
        ) {
          target = targetGroup[i];
        }
      }
      return target;
    }
    case "DOMINANT": {
      let target = targetGroup[0];
      for (let i = 0; i < targetGroup.length; i++) {
        if (
          targetGroup[i].stats.strength.totalStrength >
          target.stats.strength.totalStrength
        ) {
          target = targetGroup[i];
        }
      }
      return target;
    }

    case "RUTHLESS": {
      let target = targetGroup[0];
      for (let i = 0; i < targetGroup.length; i++) {
        if (targetGroup[i].currentHealth < target.currentHealth) {
          target = targetGroup[i];
        }
      }
      return target;
    }

    case "AGGRESSIVE": // Always attacks randomly
    case "SUPPORTIVE": {
      // Attacks randomly while above 50% HP
      const randomIndex = Math.floor(Math.random() * targetGroup.length);
      return targetGroup[randomIndex];
    }

    // case "DEFENSIVE": This behavior never attacks
  }
}

export function findTargetGroup(character) {
  const order = store.getState().combat.order;
  let targetGroup = [];

  // Determine targetGroup
  if (character.identifier === "HERO" || character.identifier === "PLAYER") {
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "ENEMY") {
        targetGroup.push(order[i]);
      }
    }
  } else if (character.identifier === "ENEMY") {
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "HERO" || order[i].identifier === "PLAYER") {
        targetGroup.push(order[i]);
      }
    }
  }

  return targetGroup;
}

export const BEHAVIORS = {
  SUPPORTIVE: {
    description: "Focuses on supporting allies through buffing or healing.",
  },
  RUTHLESS: {
    description: "Focuses on attacking the enemy with the lowest health.",
  },
  DOMINANT: {
    description: "Focuses on attacking the enemy with the greatest Strength.",
  },
  ASTUTE: {
    description: "Focuses on attacking the enemy with the greatest Arcana.",
  },
  DEFENSIVE: {
    description: "Focuses on guarding rather than attacking.",
  },
  AGGRESSIVE: {
    description: "Focuses on attacking at all times."
  },
  ERRATIC: {
    description: "Doesn't have a focus and instead performs actions randomly."
  }
};
