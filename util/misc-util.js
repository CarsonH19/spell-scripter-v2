import store from "../store/index";

import { constructStats } from "./dungeon-util";
import { v4 as uuidv4 } from "uuid";
import { combatActions } from "@/store/combat-slice";
import updateStatTotals from "@/store/stats-actions";

// Used to randomly select an image for a character when it is added to the combat order
export function getImageFromList(url, numberOfImages) {
  // example url -> src/assets/images/enemies/wandering-wisp
  let imageList = [];
  for (let i = 1; i <= numberOfImages; i++) {
    imageList.push(`${url}-${i}`);
  }
  const index = Math.floor(Math.random() * imageList.length);
  return imageList[index];
}

// Adds a character/s to the order on events
export function addCharacterToOrder(
  dispatch,
  characterObj,
  numberOfCharacters = 1
) {
  for (let i = 0; i < numberOfCharacters; i++) {
    let character;

    if (characterObj.identifier === "HERO") {
      const hero = getHeroObject(characterObj.name);
      const baseStats = constructStats(hero.stats);
      character = {
        ...hero,
        stats: baseStats,
        damageDisplay: [],
      };
    }

    if (characterObj.identifier === "ENEMY") {
      const baseStats = constructStats(characterObj.stats);
      character = {
        ...characterObj,
        id: uuidv4(),
        stats: baseStats,
        damageDisplay: [],
      };
    }

    // Ability cooldowns
    if (characterObj.abilityA) {
      character.abilityA = {
        ...characterObj.abilityA,
        cooldown: getRandomCooldown(characterObj.abilityA.reset),
      };
    }

    if (characterObj.abilityB) {
      character.abilityB = {
        ...characterObj.abilityB,
        cooldown: getRandomCooldown(characterObj.abilityB.reset),
      };
    }

    dispatch(combatActions.addCharacter({ character }));
    updateStatTotals(dispatch, character.id);
    dispatch(
      combatActions.updateHealth({
        id: character.id,
        change: "HEAL",
        value: 999,
      })
    );
  }

  function getHeroObject(name) {
    const heroes = store.getState().hero.heroes;
    for (let i = 0; i < heroes.length; i++) {
      if (heroes[i].name === name) {
        return heroes[i];
      }
    }
  }
}

export function getRandomCooldown(max) {
  return Math.floor(Math.random() * (max + 1));
}

// PRELOADING IMAGES
// export function preloadImage(url) {
//   const image = new Image();
//   image.src = url;
// }

// export const loadImage = (url) => {
//   return new URL(`${url}`, import.meta.url).href;
// };
