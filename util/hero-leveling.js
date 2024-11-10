import { heroActions } from "../store/hero-slice";
import { combatActions } from "../store/combat-slice";
export function handleLevelUpHero(dispatch, name, map) {
  // Level up the hero in the combat & hero slice
  dispatch(combatActions.levelUpHero({ name, map }));
  dispatch(heroActions.levelUpHero({ name, map }));
}

export const HERO_LEVELING_MAP = {
  siggurd: {
    // Level 1 - Strength 2 - Agility 0 - Arcana 1
    2: { level: 2, strength: 3, agility: 0, arcana: 1 },
    3: { level: 3, strength: 3, agility: 1, arcana: 1 },
    4: { level: 4, strength: 4, agility: 1, arcana: 1 },
    5: { level: 5, strength: 4, agility: 1, arcana: 2 },
    6: { level: 6, strength: 5, agility: 1, arcana: 2 },
    7: { level: 7, strength: 5, agility: 1, arcana: 3 },
    8: { level: 8, strength: 6, agility: 1, arcana: 3 },
    9: { level: 9, strength: 6, agility: 2, arcana: 3 },
  },
  riven: {
    // Level 1 - Strength 1 - Agility 2 - Arcana 0
    TWO: { level: 2, strength: 1, agility: 3, arcana: 0 },
    THREE: { level: 3, strength: 1, agility: 4, arcana: 0 },
    FOUR: { level: 4, strength: 2, agility: 4, arcana: 0 },
    FIVE: { level: 5, strength: 2, agility: 5, arcana: 0 },
    SIX: { level: 6, strength: 2, agility: 6, arcana: 0 },
    SEVEN: { level: 7, strength: 2, agility: 7, arcana: 0 },
    EIGHT: { level: 8, strength: 2, agility: 8, arcana: 0 },
    NINE: { level: 9, strength: 3, agility: 8, arcana: 0 },
  },
  liheth: {
    // Level 1 - Strength 0 - Agility 1 - Arcana 2
    TWO: { level: 2, strength: 0, agility: 1, arcana: 3 },
    THREE: { level: 3, strength: 1, agility: 1, arcana: 3 },
    FOUR: { level: 4, strength: 1, agility: 1, arcana: 4 },
    FIVE: { level: 5, strength: 1, agility: 2, arcana: 4 },
    SIX: { level: 6, strength: 1, agility: 2, arcana: 5 },
    SEVEN: { level: 7, strength: 1, agility: 3, arcana: 5 },
    EIGHT: { level: 8, strength: 1, agility: 3, arcana: 6 },
    NINE: { level: 9, strength: 2, agility: 3, arcana: 6 },
  },
};
