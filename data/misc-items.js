const MISC_ITEMS = {
  // ====================================================================
  //                                MAPS
  // ====================================================================
  THIEVES_RUIN_MAP: {
    name: "Thieves' Ruin Map",
    description: "",
    image: "/assets/images/items/misc-items/map-1.jpg",
    type: "MISC",
    rarity: "Rare",
    useInCombat: false,
    effect: [
      "A map that leads to Thieves' Ruin.",
      "Can only be used in The Great Catacomb.",
    ],
    destination: 10,
    audio: [false, "item", "map", 0.7],
  },
  LAUGHING_COFFIN_COIN: {
    name: "Laughing Coffin Coin",
    description: "",
    image: "/assets/images/items/consumables/laughing-coffin-coin.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: [""],
    audio: [false, "item", "coinFlipLand"],
  },
};

export default MISC_ITEMS;
