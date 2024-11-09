import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interfaces for spell and state structure
interface Spell {
  name: string;
  image: string;
  type: string;
  description?: string | string[];
  points: number;
  max: number;
}

interface ExpertiseLevel {
  novice: Spell[];
  apprentice: Spell[];
  adept: Spell[];
  expert: Spell[];
}

interface SpellbookState {
  evocation: ExpertiseLevel;
  abjuration: ExpertiseLevel;
  conjuration: ExpertiseLevel;
  restoration: ExpertiseLevel;
  enchantment: ExpertiseLevel;
  necromancy: ExpertiseLevel;
}

const initialState: SpellbookState = {
  // =======================================
  //                EVOCATION
  // =======================================
  evocation: {
    novice: [
      {
        name: "Firebolt",
        image: "/assets/images/spellbook/evocation/firebolt.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 1,
        max: 1,
      },
      {
        name: "Frostbite",
        image: "/assets/images/spellbook/evocation/frostbite.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Shock",
        image: "/assets/images/spellbook/evocation/shock.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
    apprentice: [
      {
        name: "Smoldering Heart",
        image: "/assets/images/spellbook/evocation/smoldering-heart.jpg",
        type: "Buff",
        description: [
          "When casting spells that deal Fire damage, you have a 10% chance to inflict the Burning condition.",
          "When casting spells that deal Fire damage, you have a 15% chance to inflict the Burning condition.",
          "When casting spells that deal Fire damage, you have a 20% chance to inflict the Burning condition.",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Fireball",
        image: "/assets/images/spellbook/evocation/fireball.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Frigid Gaze",
        image: "/assets/images/spellbook/evocation/frigid-gaze.jpg",
        type: "Buff",
        description: [
          "When casting spells that deal Ice damage, you have a 8% chance to inflict the Chilled condition.",
          "When casting spells that deal Ice damage, you have a 12% chance to inflict the Chilled condition.",
          "When casting spells that deal Ice damage, you have a 16% chance to inflict the Chilled condition.",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Chain Lightning",
        image: "/assets/images/spellbook/evocation/chain-lightning.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Charged Touch",
        image: "/assets/images/spellbook/evocation/charged-touch.jpg",
        type: "Buff",
        description: [
          "When casting spells that deal Lightning damage, you have a 6% chance to inflict the Stunned condition.",
          "When casting spells that deal Lightning damage, you have a 9% chance to inflict the Stunned condition.",
          "When casting spells that deal Lightning damage, you have a 12% chance to inflict the Stunned condition.",
        ],
        points: 0,
        max: 3,
      },
    ],
    adept: [
      {
        name: "Consuming Flames",
        image: "/assets/images/spellbook/evocation/consuming-flames.jpg",
        type: "Buff",
        description: [
          "Enemies Burning from your spells are dealt 5 Fire damage each round.",
          "Enemies Burning from your spells are dealt 7 Fire damage each round.",
          "Enemies Burning from your spells are dealt 9 Fire damage each round.",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Blizzard",
        image: "/assets/images/spellbook/evocation/blizzard.jpg",
        type: "Spell",
        // description: "",
        points: 0,
        max: 1,
      },
      {
        name: "Evoker",
        image: "/assets/images/spellbook/evocation/evoker.jpg",
        type: "Buff",
        description: [
          "The mana cost of all Evocation spells is reduced by 2MP",
          "The mana cost of all Evocation spells is reduced by 4MP",
          "The mana cost of all Evocation spells is reduced by 6MP",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Frozen Solid",
        image: "/assets/images/spellbook/evocation/frozen-solid.jpg",
        type: "Buff",
        description: [
          "Enemies Chilled by your spells take 3% more damage from Attacks for each stack of Chilled they possess.",
          "Enemies Chilled by your spells take 6% more damage from Attacks for each stack of Chilled they possess.",
          "Enemies Chilled by your spells take 9% more damage from Attacks for each stack of Chilled they possess.",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Storm Sphere",
        image: "/assets/images/spellbook/evocation/storm-sphere.jpg",
        type: "Spell",
        // description: "",
        points: 0,
        max: 1,
      },
    ],
    expert: [
      {
        name: "Meteor",
        image: "/assets/images/spellbook/evocation/meteor.jpg",
        type: "Spell",
        // description: "",
        points: 0,
        max: 1,
      },
      // {
      //   name: "Tempest",
      //   type: "Spell",
      //   // description: "",
      //   points: 0,
      //   max: 1,
      // },
    ],
  },
  // =======================================
  //                ABJURATION
  // =======================================
  abjuration: {
    novice: [
      {
        name: "Bark Skin",
        image: "/assets/images/spellbook/abjuration/bark-skin.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Barrier",
        image: "/assets/images/spellbook/abjuration/barrier.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Boundless",
        image: "/assets/images/spellbook/abjuration/boundless.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
    apprentice: [
      {
        name: "Death Ward",
        image: "/assets/images/spellbook/abjuration/death-ward.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Dispel Magic",
        image: "/assets/images/spellbook/abjuration/dispel-magic.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Arcane Shield",
        image: "/assets/images/spellbook/abjuration/arcane-shield.jpg",
        type: "Ability",
        description: [
          "Gain an Arcane Shield that absorbs damage. The shield gains temporary HP after each Alteration spell is cast up to a max of 18HP.",
          "Your Arcane Shield becomes more powerful and can gain a max of 27HP",
          "Your Arcane Shield becomes more powerful and can gain a max of 36HP",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Protect From Evil",
        image: "/assets/images/spellbook/abjuration/protect-from-evil.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Stone Skin",
        image: "/assets/images/spellbook/abjuration/stone-skin.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
    adept: [
      {
        name: "Shell",
        image: "/assets/images/spellbook/abjuration/shell.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Improved Arcane Shield",
        image: "/assets/images/spellbook/abjuration/improved-arcane-shield.jpg",
        type: "Ability",
        description: [
          "You enter each room with a minimum of 6HP in your Arcane Shield",
          "You enter each room with a minimum of 12HP in your Arcane Shield",
          "You enter each room with a minimum of 18HP in your Arcane Shield",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Abjurer",
        image: "/assets/images/spellbook/abjuration/abjurer.jpg",
        type: "Buff",
        description: [
          "The mana cost of all Abjuration spells is reduced by 2MP",
          "The mana cost of all Abjuration spells is reduced by 4MP",
          "The mana cost of all Abjuration spells is reduced by 6MP",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Dual Casting",
        image: "/assets/images/spellbook/abjuration/dual-casting.jpg",
        type: "Buff",
        description: [
          "When targeting an ally with a Novice or Apprentice Abjuration spell there is a 33% chance to target an additional random ally.",
          "When targeting an ally with a Novice or Apprentice  Abjuration spell there is a 66% chance to target an additional random ally.",
          "When targeting an ally with a Novice or Apprentice  Abjuration spell there is a 100% chance to target an additional random ally.",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Steel Skin",
        image: "/assets/images/spellbook/abjuration/steel-skin.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
    expert: [
      {
        name: "Invulnerability",
        image: "/assets/images/spellbook/abjuration/invulnerability.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
  },
  conjuration: {
    novice: [
      {
        name: "Conjure Weapon",
        image: "/assets/images/spellbook/conjuration/conjure-weapon.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Summon Hound",
        image: "/assets/images/spellbook/conjuration/summon-hound.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Conjure Feast",
        image: "/assets/images/spellbook/conjuration/conjure-feast.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
    apprentice: [
      {
        name: "Conjure Key",
        image: "/assets/images/spellbook/conjuration/conjure-key.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Summoned Resilience",
        image: "/assets/images/spellbook/conjuration/summoned-resilience.jpg",
        type: "Buff",
        description: [
          "Increase the max HP of your summons by +10.",
          "Increase the max HP of your summons by +20.",
          "Increase the max HP of your summons by +30.",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Summoned Dexterity",
        image: "/assets/images/spellbook/conjuration/summoned-dexterity.jpg",
        type: "Buff",
        description: [
          "Increase the Speed & Hit Chance of your summons by +1.",
          "Increase the Speed & Hit Chance of your summons by +2.",
          "Increase the Speed & Hit Chance of your summons by +3.",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Summon Knight",
        image: "/assets/images/spellbook/conjuration/summon-knight.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
    adept: [
      {
        name: "Summon Drake",
        image: "/assets/images/spellbook/conjuration/summon-drake.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Conjure Portal",
        image: "/assets/images/spellbook/conjuration/conjure-portal.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
      {
        name: "Conjurer",
        image: "/assets/images/spellbook/conjuration/conjurer.jpg",
        type: "Buff",
        description: [
          "The mana cost of all Conjuration spells is reduced by 2MP",
          "The mana cost of all Conjuration spells is reduced by 4MP",
          "The mana cost of all Conjuration spells is reduced by 6MP",
        ],
        points: 0,
        max: 3,
      },
      {
        name: "Summoned Might",
        image: "/assets/images/spellbook/conjuration/summoned-might.jpg",
        type: "Buff",
        description: [
          "Increase the Attack of your summons by +2.",
          "Increase the Attack of your summons by +4.",
          "Increase the Attack of your summons by +6.",
          "Increase the Attack of your summons by +8.",
          "Increase the Attack of your summons by +10.",
        ],
        points: 0,
        max: 5,
      },
      {
        name: "Summon Golem",
        image: "/assets/images/spellbook/conjuration/summon-stone-golem.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
    expert: [
      {
        name: "Summon Hero",
        image: "/assets/images/spellbook/conjuration/summon-hero.jpg",
        type: "Spell",
        // description: spells-descriptions.js
        points: 0,
        max: 1,
      },
    ],
  },
  restoration: {
    novice: [],
    apprentice: [],
    adept: [],
    expert: [],
  },
  enchantment: {
    novice: [],
    apprentice: [],
    adept: [],
    expert: [],
  },
  necromancy: {
    novice: [],
    apprentice: [],
    adept: [],
    expert: [],
  },
};

const spellbookSlice = createSlice({
  name: "spellbook",
  initialState,
  reducers: {
    expendPoint(
      state,
      action: PayloadAction<{ school: keyof SpellbookState; name: string }>
    ) {
      const { school, name } = action.payload;
      for (const expertise in state[school]) {
        const skill = (
          state[school][expertise as keyof ExpertiseLevel] as Spell[]
        ).find((skill) => skill.name === name);
        if (skill && skill.points < skill.max) {
          skill.points += 1;
        }
      }
    },
    resetSkillTree(
      state,
      action: PayloadAction<{ school: keyof SpellbookState }>
    ) {
      const { school } = action.payload;
      for (const expertise in state[school]) {
        (state[school][expertise as keyof ExpertiseLevel] as Spell[]).forEach(
          (skill) => {
            skill.points = 0;
          }
        );
      }
    },
  },
});

export const spellbookActions = spellbookSlice.actions;

export default spellbookSlice.reducer;
