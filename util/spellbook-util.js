import store from "../store/index";

export function checkSkillPoints(skillName) {
  const spellbook = store.getState().spellbook;
  for (let school in spellbook) {
    if (spellbook.hasOwnProperty(school)) {
      for (let level in spellbook[school]) {
        if (spellbook[school].hasOwnProperty(level)) {
          for (let skill of spellbook[school][level]) {
            if (skill.name === skillName) {
              return skill.points;
            }
          }
        }
      }
    }
  }
  return null; // Return null if skill is not found
}
