import SPELLS from "../data/spells";

// Used in ConfirmationModal.jsx & Actions.jsx to translate a spell's name from the player-slice spellList array into the SPELLS object
export function getSpell(spellName) {
  for (let school in SPELLS) {
    const spell = SPELLS[school].find((spell) => spell.name === spellName);
    if (spell) {
      return { ...spell };
    }
  }

  console.error(`Spell "${spellName}" does not exist in any school.`);
  return null;
}
