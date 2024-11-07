let hound = {
  name: "Hound",
  id: "Hound",
  unlocked: true,
  identifier: "HERO",
  summon: true,
  get image() {
    const imageList = ["/assets/images/heroes/hound"];
    const index = Math.floor(Math.random() * imageList.length);
    return imageList[index];  },
  get icon() {
    return `${this.image}-icon`;
  },
  // audio: {},
  level: 1,
  currentHealth: 0,
  stats: {
    baseStrength: 1,
    baseAgility: 1,
    baseArcana: 0,
  },
  behavior: "ERRATIC",
  weaknesses: [],
  resistances: [],
  immunities: [],
  statusEffects: [],
};

let knight = {
  name: "Knight",
  id: "Knight",
  unlocked: true,
  identifier: "HERO",
  summon: true,
  get image() {
    const imageList = ["/assets/images/heroes/knight"];
    const index = Math.floor(Math.random() * imageList.length);
    return imageList[index];  },
  get icon() {
    return `${this.image}-icon`;
  },
  // audio: {},
  level: 3,
  currentHealth: 0,
  stats: {
    baseStrength: 2,
    baseAgility: 1,
    baseArcana: 1,
  },
  behavior: "ERRATIC",
  // passive: {
  //   name: "Radiant Aura",
  //   description: `Undead enemies have their Defense reduced while in the presence of Siggurd.`,
  //   when: "START_OF_ROUND",
  //   function: "RADIANT_AURA",
  // },
  // abilityA: {
  //   name: "Holy Smite",
  //   description: `Siggurd smites an enemy dealing Radiant Damage equal to his Attack plus double his Spell Power.`,
  //   cooldown: 3,
  //   reset: 3,
  //   focus: "HIGHEST_HEALTH",
  //   function: "HOLY_SMITE",
  // },
  // abilityB: {
  //   name: "Divine Guardian",
  //   description: `Siggurd becomes a guardian for an ally. While this ability is active all damage dealt to the ally is redirected to Siggurd instead.`,
  //   cooldown: 9,
  //   reset: 9,
  //   focus: "HEROES",
  //   function: "DIVINE_GUARDIAN",
  // },
  weaknesses: [],
  resistances: [],
  immunities: [],
  statusEffects: [],
};

let drake = {
  name: "Drake",
  id: "Drake",
  unlocked: true,
  identifier: "HERO",
  summon: true,
  get image() {
    const imageList = ["/assets/images/heroes/drake"];
    const index = Math.floor(Math.random() * imageList.length);
    return imageList[index];  },
  get icon() {
    return `${this.image}-icon`;
  },
  // audio: {},
  level: 5,
  currentHealth: 0,
  stats: {
    baseStrength: 2,
    baseAgility: 3,
    baseArcana: 1,
  },
  behavior: "ERRATIC",
  // passive: {
  //   name: "Radiant Aura",
  //   description: `Undead enemies have their Defense reduced while in the presence of Siggurd.`,
  //   when: "START_OF_ROUND",
  //   function: "RADIANT_AURA",
  // },
  // abilityA: {
  //   name: "Holy Smite",
  //   description: `Siggurd smites an enemy dealing Radiant Damage equal to his Attack plus double his Spell Power.`,
  //   cooldown: 3,
  //   reset: 3,
  //   focus: "HIGHEST_HEALTH",
  //   function: "HOLY_SMITE",
  // },
  // abilityB: {
  //   name: "Divine Guardian",
  //   description: `Siggurd becomes a guardian for an ally. While this ability is active all damage dealt to the ally is redirected to Siggurd instead.`,
  //   cooldown: 9,
  //   reset: 9,
  //   focus: "HEROES",
  //   function: "DIVINE_GUARDIAN",
  // },
  weaknesses: [],
  resistances: [],
  immunities: [],
  statusEffects: [],
};

let golem = {
  name: "Golem",
  id: "Golem",
  unlocked: true,
  identifier: "HERO",
  summon: true,
  get image() {
    const imageList = ["/assets/images/heroes/golem"];
    const index = Math.floor(Math.random() * imageList.length);
    return imageList[index];  },
  get icon() {
    return `${this.image}-icon`;
  },
  // audio: {},
  level: 5,
  currentHealth: 0,
  stats: {
    baseStrength: 5,
    baseAgility: 0,
    baseArcana: 1,
  },
  behavior: "ERRATIC",
  // passive: {
  //   name: "Radiant Aura",
  //   description: `Undead enemies have their Defense reduced while in the presence of Siggurd.`,
  //   when: "START_OF_ROUND",
  //   function: "RADIANT_AURA",
  // },
  // abilityA: {
  //   name: "Holy Smite",
  //   description: `Siggurd smites an enemy dealing Radiant Damage equal to his Attack plus double his Spell Power.`,
  //   cooldown: 3,
  //   reset: 3,
  //   focus: "HIGHEST_HEALTH",
  //   function: "HOLY_SMITE",
  // },
  // abilityB: {
  //   name: "Divine Guardian",
  //   description: `Siggurd becomes a guardian for an ally. While this ability is active all damage dealt to the ally is redirected to Siggurd instead.`,
  //   cooldown: 9,
  //   reset: 9,
  //   focus: "HEROES",
  //   function: "DIVINE_GUARDIAN",
  // },
  weaknesses: [],
  resistances: [],
  immunities: [],
  statusEffects: [],
};

export { hound, knight, drake, golem };
