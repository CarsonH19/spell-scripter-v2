import store from "../store/index";
import { changeHealth } from "../store/health-actions";
import { combatActions } from "../store/combat-slice";
import changeStatusEffect from "../store/status-effect-actions";
import CONDITIONS from "../data/conditions";
// import EQUIPMENT from "../data/equipment";
import { dungeonActions } from "../store/dungeon-slice";

export const itemFunctions = {
  CRYPTBREAD: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 15);
  },
  HEALTH_POTION: (dispatch, target) => {
    const value = Math.round(target.stats.strength.maxHealth * 0.3);
    changeHealth(dispatch, target, "HEAL", value);
  },
  MANA_POTION: (dispatch, target) => {
    const value = Math.round(target.stats.arcana.maxMana * 0.3);
    dispatch(combatActions.updateMana({ change: "ADD", value }));
    dispatch(
      combatActions.updateDamageDisplay({
        id: target.id,
        content: { item: value, style: "gain-mana" },
      })
    );
  },
  MARROWSTONE_CHEESE: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 15);
  },
  ROTBANE_FERN: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 3);
    const chance = Math.random() * 100;
    if (chance > 50) {
      changeStatusEffect(dispatch, target, "REMOVE", CONDITIONS.DISEASED);
    }
  },
  GRAVEBLOOM: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 3);
  },
  GHOSTLIGHT_LILY: (dispatch, target) => {
    const chance = Math.random() * 100;
    if (chance > 50) {
      changeStatusEffect(dispatch, target, "ADD", CONDITIONS.HAUNTED);
    }
  },
  SUNSHADE_BLOSSOM: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 1);
  },
  WITCHFIRE_ORCHID: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 3);
  },
  LICHROOT: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 5);
  },
  TOMBSTONE_TRUFFLE: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 3);
  },
  SPIDER_EGG_YOLK: (dispatch, target) => {
    changeStatusEffect(dispatch, target, "ADD", CONDITIONS.POISONED);
  },
  BLACKHEART_BREW: (dispatch, target) => {
    const statusEffect = {
      name: "Blackheart Brew",
      display: true,
      image: "/assets/images/items/consumables/blackheart-brew.jpg",
      description: "",
      effect: ["+5 Attack", "-5 Spell Power"],
      durationType: "ROOM",
      duration: 5,
      stats: {
        strength: { attack: +5 },
        arcana: { spellPower: -5 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  HEXBANE_BREW: (dispatch, target) => {
    const statusEffect = {
      name: "Hexbane Brew",
      display: true,
      image: "",
      description:
        "Immune to the Poisoned, Diseased, Haunted, and Cursed conditions.",
      effect: ["+5 Attack", "-5 Spell Power"],
      durationType: "ROOM",
      duration: 10,
      stats: {},
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  NECROTIC_NECTAR: (dispatch, target) => {
    const statusEffect = {
      name: "Necrotic Nectar",
      display: true,
      image: "",
      description:
        "Immune to the Poisoned, Diseased, Haunted, and Cursed conditions.",
      effect: ["+5 Attack", "-5 Spell Power"],
      durationType: "ROOM",
      duration: 10,
      stats: {
        arcana: {
          arcanaChange: target.stats.arcana.totalArcana,
        },
      },
    };

    changeHealth(dispatch, target, "HEAL", target.stats.strength.maxHealth);
    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  WARDING_CANDLE: (dispatch, target) => {
    let statusEffect = {
      name: "Warding Candle",
      display: true,
      image: "",
      description: "",
      effect: ["Undead enemies may flee from you."],
      durationType: "ROOM",
      duration: 10,
      stats: {},
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  SOOTHING_CANDLE: (dispatch, target) => {
    let statusEffect = {
      name: "Soothing Candle",
      display: true,
      image: "/assets/images/items/consumables/soothing-candle.jpg",
      description: "",
      effect: ["+6 HP Regeneration."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        strength: { healthRegen: +6 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  CALMING_CANDLE: (dispatch, target) => {
    const statusEffect = {
      name: "Calming Candle",
      display: true,
      image: "/assets/images/items/consumables/calming-candle.jpg",
      description: "",
      effect: ["+6 MP Regeneration."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        arcana: { manaRegen: +6 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  FLICKERING_CANDLE: (dispatch, target) => {
    const statusEffect = {
      name: "Flickering Candle",
      display: true,
      image: "/assets/images/items/consumables/flickering-candle.jpg",
      description: "",
      effect: ["+1 Agility."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        agility: { agilityChange: +1 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  BLAZING_CANDLE: (dispatch, target) => {
    const statusEffect = {
      name: "Blazing Candle",
      display: true,
      image: "/assets/images/items/consumables/blazing-candle.jpg",
      description: "",
      effect: ["+6 Attack."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        strength: { attack: +6 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  INVOKING_CANDLE: (dispatch, target) => {
    const statusEffect = {
      name: "Invoking Candle",
      display: true,
      image: "/assets/images/items/consumables/invoking-candle.jpg",
      description: "",
      effect: ["+6 Spell Power."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        arcana: { spellPower: +6 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  // ==================================================================
  //                            EQUIPMENT
  // ==================================================================

  // Equipment functions are called using checkIfAttuned(dispatch, itemName)

  EVERTORCH: () => {
    return 3;
  },
  SUNSTONE: (dispatch) => {
    const order = store.getState().combat.order;
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "ENEMY" && order[i].type === "UNDEAD") {
        changeHealth(dispatch, order[i], "DAMAGE", 1, "RADIANT");
      }
    }
  },
  RITUAL_BLADE: (dispatch, target) => {
    if (target.type === "BEAST" || target.type === "HUMANOID") {
      return 3;
    }
  },
  SPIRIT_VEIL_CLOAK: () => {
    const chance = Math.floor(Math.random() * 100) + 1;
    return chance > 95 ? 999 : 0;
  },
  BLOODSTONE: (dispatch, enemy) => {
    const order = store.getState().combat.order;
    const player = order.find((char) => char.id === "Player");
    const health = enemy.level * 3;
    changeHealth(dispatch, player, "HEAL", health);
  },
  WRAITHBANE: () => {
    return true;
  },
  CURSED_MIRROR: (dispatch, character, damage) => {
    const range = Math.floor(damage / 3);
    const reflectedDamage = Math.floor(Math.random() * range);
    changeHealth(dispatch, character, "DAMAGE", reflectedDamage);
  },
  REVENANTS_RAGE: () => {
    const order = store.getState().combat.order;
    const player = order.find((char) => char.id === "Player");
    if (player.currentHealth < 30) {
      return 5;
    }
  },
  SPINE_OF_THE_NECROMANCER: (dispatch, target) => {
    // Casts "Death Ray" deals 30 damage.
    console.log("Item Function Called")
    changeHealth(dispatch, target, "DAMAGE", 30, "NECROTIC");
  },
  // ==================================================================
  //                            MISC. ITEMS
  // ==================================================================
  THIEVES_RUIN_MAP: (dispatch, item) => {
    const dungeon = store.getState().dungeon;
    if ((dungeon.following === null) & (dungeon.followCounter === 0)) {
      const map = { ...item, rooms: calculateRooms(item) };
      dispatch(
        dungeonActions.beginFollowing({ following: map.name, rooms: map.rooms })
      );
    }
    // NOTE: Narrate - Can't follow that now
  },
};

// Returns true/false to determine if an item is attuned or not
// Used for items that require additional logic throughout the code
export function checkIfAttuned(dispatch, itemName, target, arg) {
  const snakeCaseItem = toSnakeCase(itemName);
  const itemFunction = itemFunctions[snakeCaseItem];

  const order = store.getState().combat.order;
  const player = order.find((char) => char.id === "Player");
  if (!player) return false;
  const attunedItems = player.inventory.attunedItems;

  for (let i = 0; i < attunedItems.length; i++) {
    if (attunedItems[i].name === itemName) {
      return itemFunction(dispatch, target, arg);
    }
  }

  return false;
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}

// Calculate the number of rooms that must be cleared while following
export function calculateRooms(following) {
  const dungeon = store.getState().dungeon;
  let rooms;

  // Find the difference it where the player is to the distance number on the item object
  if (following.destination) {
    rooms = Math.abs(dungeon.roomCounter - following.destination);
  }

  if (following === "Wandering Wisp") {
    rooms = Math.round(Math.random() * 9) + 1;
  }

  if (rooms < 5) {
    rooms = 5;
  }

  return rooms;
}
