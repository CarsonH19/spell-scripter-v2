import store from "../store/index";
import { changeHealth } from "../store/health-actions";
import { checkSkillPoints } from "./spellbook-util";
import { combatActions } from "../store/combat-slice";
import { checkForDeath } from "../store/health-actions";
import { createArcaneShield } from "./skills";
import { UNDEAD } from "../data/enemies";
import { constructStats } from "./dungeon-util";
import { dungeonActions } from "../store/dungeon-slice";
import { v4 as uuidv4 } from "uuid";
import playSoundEffect from "./audio-util";

// These functions are called when a target has the status effect
const statusEffectFunctions = {
  BURNING: (dispatch, target) => {
    let damage = 3;
    // SKILL - Consuming Flames - Increases Burning damage
    const skillPoints = checkSkillPoints("Consuming Flames");
    for (let i = 0; i < skillPoints; i++) {
      damage += 2;
    }
    playSoundEffect(false, "statusEffects", "burning");
    changeHealth(dispatch, target, "DAMAGE", damage);
  },
  POISONED: (dispatch, target) => {
    const statusEffect = target.statusEffects.find(
      (effect) => effect.name === "Poisoned"
    );
    const damage = statusEffect.stack;
    changeHealth(dispatch, target, "DAMAGE", damage, "POISON");
    playSoundEffect(false, "punch", "punch1");
  },
  HAUNTED: (dispatch) => {
    const dungeon = store.getState().dungeon;
    const chance = Math.random() * 100;
    if (chance > 50) {
      // add enemy
      // Add Siggurd to party
      const baseStats = constructStats(UNDEAD.SHADOW.stats);
      let shadow = {
        ...UNDEAD.SHADOW,
        id: uuidv4(),
        stats: baseStats,
        damageDisplay: [],
      };

      dispatch(dungeonActions.addEnemy({ enemy: shadow, change: "ADD" }));
      // dispatch(combatActions.addCharacter({ character: shadow }));
    }
  },
  STORM_SPHERE: (dispatch, target) => {
    const spellPower = store.getState().player.stats.arcana.spellPower;
    const damage = Math.round(spellPower / 2);
    changeHealth(dispatch, target, "DAMAGE", damage, "LIGHTNING");
    playSoundEffect(false, "magic", "stormSphereDamage");
  },
  ARCANE_SHIELD: (dispatch, spell, player, change, damage) => {
    const statusEffect = player.statusEffects.find(
      (effect) => effect.name === "Arcane Shield"
    );
    let health = statusEffect.currentHealth;
    // Remove status effect
    dispatch(
      combatActions.updateStatusEffects({
        id: "Player",
        change: "REMOVE",
        statusEffect,
      })
    );
    switch (change) {
      case "ADD":
        {
          if (spell.school === "Novice Abjuration") {
            health += 4;
          } else if (spell.school === "Apprentice Abjuration") {
            health += 8;
          } else if (spell.school === "Adept Abjuration") {
            health += 12;
          } else if (spell.school === "Expert Abjuration") {
            health += 16;
          }
        }
        break;
      case "REMOVE":
        {
          health -= damage;
          if (damage > health) {
            const value = Math.round(damage - health);
            dispatch(
              combatActions.updateDamageDisplay({
                id: "Player",
                content: { text: value, style: "" },
              })
            );
            dispatch(
              combatActions.updateHealth({
                id: "Player",
                change: "DAMAGE",
                value,
              })
            );
            // NOTE: Is this needed? Do I need to await checkForDeath()?
            checkForDeath(dispatch, "Player");
          }
        }
        break;

      case "RESET":
        {
          const improvedArcaneShield = checkSkillPoints(
            "Improved Arcane Shield"
          );
          if (improvedArcaneShield * 6 > statusEffect.currentHealth) {
            // Reset the shield to starting HP & return
            dispatch(
              combatActions.updateStatusEffects({
                id: "Player",
                change: "ADD",
                statusEffect: createArcaneShield(),
              })
            );
          }
        }
        return;
    }
    // Prevent exceeding max HP
    if (health > statusEffect.maxHealth) {
      health = statusEffect.maxHealth;
    }
    // Prevent falling below 0HP
    if (health < 0 && damage) {
      health = 0;
    }
    // Update object manually
    const updatedArcaneShield = {
      ...statusEffect,
      currentHealth: Math.round(health),
      get effect() {
        return [`${this.currentHealth}/${this.maxHealth}HP`];
      },
    };
    // Add updated status effect
    dispatch(
      combatActions.updateStatusEffects({
        id: "Player",
        change: "ADD",
        statusEffect: updatedArcaneShield,
      })
    );
  },
};

export default statusEffectFunctions;
