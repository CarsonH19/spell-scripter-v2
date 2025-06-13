import store from "./index";

import { combatActions } from "./combat-slice";
import { playerActions } from "./player-slice";
import { checkSkillPoints } from "../util/spellbook-util";
import { checkCurrentStatusEffects } from "./status-effect-actions";

export default function updateStatTotals(dispatch, id) {
  let character;
  let sliceActions;

  // Check if player is on dashboard or in dungeon
  const dashboard = store.getState().ui.dashboardIsVisible;
  if (dashboard) {
    character = store.getState().player;
    sliceActions = playerActions;
  } else {
    const findCharacterById = (id) => {
      const characters = store.getState().combat.order;
      return characters.find((char) => char.id === id);
    };

    character = findCharacterById(id);
    sliceActions = combatActions;
  }

  let totalStrength = character.stats.baseStrength;
  let maxHealth = 0;
  let healthRegen = 0;
  let attack = 0;

  let totalAgility = character.stats.baseAgility;
  let defense = 0;
  let speed = 0;
  let hitChance = 0;

  let totalArcana = character.stats.baseArcana;
  let maxMana = 0;
  let manaRegen = 0;
  let spellPower = 0;

  // Misc. Variables
  let guard = null;

  // Adding stat changes from Items & Status Effects
  if (character.statusEffects.length > 0) {
    for (let i = 0; i < character.statusEffects.length; i++) {
      const item = character.statusEffects[i];

      // Update Stats
      if ("stats" in item) {
        // Strength
        if (item.stats && item.stats.strength) {
          totalStrength += item.stats.strength.strengthChange || 0;
          maxHealth += item.stats.strength.maxHealth || 0;
          healthRegen += item.stats.strength.healthRegen || 0;
          attack += item.stats.strength.attack || 0;
        }

        // Agility
        if (item.stats && item.stats.agility) {
          totalAgility += item.stats.agility.agilityChange || 0;
          defense += item.stats.agility.defense || 0;
          speed += item.stats.agility.speed || 0;
          hitChance += item.stats.agility.hitChance || 0;
        }

        // Arcana
        if (item.stats && item.stats.arcana) {
          totalArcana += item.stats.arcana.arcanaChange || 0;
          maxMana += item.stats.arcana.maxMana || 0;
          manaRegen += item.stats.arcana.manaRegen || 0;
          spellPower += item.stats.arcana.spellPower || 0;
        }
      }

      // Update Guarding
      if (item.name === "Guarding") {
        guard = "GUARDING";
      }
    }
  }

  // Strength
  if (totalStrength < 0) totalStrength = 0;

  maxHealth += calculateMaxHealth(character, totalStrength);
  healthRegen += calculateHealthRegen(character, totalStrength);
  attack += calculateAttackBonus(character, totalStrength);

  // Agility
  if (totalAgility < 0) totalAgility = 0;

  defense += calculateDefense(guard, character, totalAgility);
  speed += calculateSpeed(character, totalAgility);
  hitChance += calculateHitChance(character, totalAgility);

  // Arcana
  if (totalArcana < 0) totalArcana = 0;
  maxMana += calculateMaxMana(character, totalArcana);
  manaRegen += calculateManaRegen(character, totalArcana);
  spellPower += calculateSpellPower(character, totalArcana);

  if (healthRegen < 0) {
    healthRegen = 0;
  }

  if (manaRegen < 0) {
    manaRegen = 0;
  }

  if (spellPower < 0) {
    spellPower = 0;
  }

  if ("summon" in character) {
    // SKILL - Summoned Dexterity
    const summonedDexterity = checkSkillPoints("Summoned Dexterity");
    if (summonedDexterity) {
      for (let i = 0; i < summonedDexterity; i++) {
        speed++;
        hitChance++;
      }
    }

    // SKILL - Summoned Might
    const summonedMight = checkSkillPoints("Summoned Might");
    if (summonedMight) {
      for (let i = 0; i < summonedMight; i++) {
        attack += 2;
      }
    }

    // SKILL - Summoned Resilience
    const summonedResilience = checkSkillPoints("Summoned Resilience");
    if (summonedResilience) {
      for (let i = 0; i < summonedResilience; i++) {
        maxHealth += 10;
      }
    }
  }

  // Check for diseased condition
  if (checkCurrentStatusEffects(character, "Diseased")) {
    const diseased = character.statusEffects.find(
      (effect) => effect.name === "Diseased"
    );
    const lostMaxHP = ((diseased.stack * 20) / 100) * maxHealth;
    maxHealth = maxHealth - lostMaxHP;
  }

  // Check for set pieces & return value changes
  const {
    maxHealthBonus,
    healthRegenBonus,
    attackBonus,
    defenseBonus,
    speedBonus,
    hitChanceBonus,
    maxManaBonus,
    manaRegenBonus,
    spellPowerBonus,
  } = checkForItemSetBonuses(character, sliceActions);

  dispatch(
    sliceActions.updateStats({
      id: character.id,
      totalStrength,
      maxHealth: maxHealth + maxHealthBonus,
      healthRegen: healthRegen + healthRegenBonus,
      attack: attack + attackBonus,
      totalAgility,
      defense: defense + defenseBonus,
      speed: speed + speedBonus,
      hitChance: hitChance + hitChanceBonus,
      totalArcana,
      maxMana: maxMana + maxManaBonus,
      manaRegen: manaRegen + manaRegenBonus,
      spellPower: spellPower + spellPowerBonus,
    })
  );

  // =============================================================
  //                     HELPER FUNCTIONS
  // =============================================================

  function checkForItemSetBonuses(character) {
    // Return if the stats being updated are not for the player
    if (character.id !== "Player") {
      return {
        maxHealthBonus: 0,
        healthRegenBonus: 0,
        attackBonus: 0,
        defenseBonus: 0,
        speedBonus: 0,
        hitChanceBonus: 0,
        maxManaBonus: 0,
        manaRegenBonus: 0,
        spellPowerBonus: 0,
      };
    }

    const setCounts = {};
    let setBonuses = {
      maxHealthBonus: 0,
      healthRegenBonus: 0,
      attackBonus: 0,
      defenseBonus: 0,
      speedBonus: 0,
      hitChanceBonus: 0,
      maxManaBonus: 0,
      manaRegenBonus: 0,
      spellPowerBonus: 0,
    };

    // Iterate over the attuned items and count the occurrences of each set
    character.inventory.attunedItems.forEach((item) => {
      if (item.set) {
        if (setCounts[item.set]) {
          setCounts[item.set]++;
        } else {
          setCounts[item.set] = 1;
        }
      }
    });

    // Check if any set appears 3 times
    let completeSet;
    for (const set in setCounts) {
      if (setCounts[set] === 3) {
        completeSet = set;
        break;
      }
    }

    switch (completeSet) {
      case "Plagueborn Set":
        setBonuses.maxManaBonus += 500;
        setBonuses.maxHealthBonus += 500;
        break;

      case "Shadowbound Set":
        setBonuses.attackBonus += 1000;
        break;

      case "Ghoulbone Set":
        break;

      case "Arcanist Set":
        break;

      case "Darkmoon Set":
        break;

      case "Fangweave":
        break;

      case "Fiendsworn":
        break;

      case "Rattlebone":
        break;

      case "Dreadmourne":
        break;

      case "Soulshroud":
        break;
    }

    return setBonuses;
  }

  // ===============================
  //           STRENGTH => HP Bonus + 10 / Melee Attack +2
  // ===============================

  function calculateMaxHealth(character, totalStrength) {
    // Units of 10
    let baseHealth;
    let strengthBonusHealth;
    let maxHealth;

    if (character.identifier === "PLAYER") {
      baseHealth = 10 * character.level + 20;
    } else {
      baseHealth = 10 * character.level;
    }

    strengthBonusHealth = totalStrength * 10;
    maxHealth = baseHealth + strengthBonusHealth;
    return maxHealth;
  }

  function calculateHealthRegen(character, totalStrength) {
    // Units of 2
    let baseHealthRegen = character.level * 2;
    let healthRegen = totalStrength * 2;
    healthRegen = healthRegen + baseHealthRegen;

    if (healthRegen < 0) {
      healthRegen = 0;
    }

    return healthRegen;
  }

  function calculateAttackBonus(character, totalStrength) {
    let baseAttack;
    let strengthBonusAttack = totalStrength * 2;
    let totalAttack;

    if (character.identifier === "PLAYER") {
      baseAttack = character.level * 2 + 5;
    } else {
      baseAttack = character.level * 2 + 1;
    }

    totalAttack = baseAttack + strengthBonusAttack;

    return totalAttack;
  }

  // ===============================
  //           Agility => Hit Chance / Speed (Initiative/Flee Chance) / Defense
  // ===============================

  function calculateHitChance(character, totalAgility) {
    // Units of 1
    let baseHitChance = character.level * 1;
    let hitChance = totalAgility * 1;
    hitChance = hitChance + baseHitChance;

    if (hitChance < 0) {
      hitChance = 0;
    }

    return hitChance;
  }

  function calculateDefense(guard, character, totalAgility) {
    // Units of 1
    // Base defense of 6
    let baseDefense = character.level * 1; 
    let defense = totalAgility + baseDefense + 6;

    // Guarding (+50% defense)
    if (guard) {
      defense = Math.round(defense * 1.5);
    }

    return defense;
  }

  function calculateSpeed(character, totalAgility) {
    // Units of 5
    // d20 roll + speed
    let baseSpeed = character.level * 5;
    let speed = totalAgility * 5;
    speed = speed + baseSpeed;

    if (speed < 0) {
      speed = 0;
    }

    return speed;
  }

  // ===============================
  //            ARCANA => Spell Power +2 / Max Mana
  // ===============================

  function calculateMaxMana(character, totalArcana) {
    // Units of 10
    let baseMana;
    let arcanaBonusMana = totalArcana * 10;
    let maxMana;

    if (character.identifier === "PLAYER") {
      baseMana = 10 * character.level + 20;
    } else if (totalArcana > 0) {
      baseMana = 10 * character.level;
    } else {
      baseMana = 0;
    }

    maxMana = baseMana + arcanaBonusMana;

    return maxMana;
  }

  function calculateManaRegen(character, totalArcana) {
    // Units of 3
    let baseManaRegen = character.level * 3;
    let manaRegen = totalArcana * 3;
    manaRegen = manaRegen + baseManaRegen;

    if (manaRegen < 0) {
      manaRegen = 0;
    }

    return manaRegen;
  }

  function calculateSpellPower(character, totalArcana) {
    let basePower;
    let arcanaBonusPower = totalArcana * 2;
    let totalSpellPower;

    if (character.identifier === "PLAYER") {
      basePower = character.level * 2 + 3;
    } else if (totalArcana > 0) {
      basePower = character.level * 2;
    } else {
      basePower = 0;
    }

    totalSpellPower = basePower + arcanaBonusPower;

    return totalSpellPower;
  }
}
