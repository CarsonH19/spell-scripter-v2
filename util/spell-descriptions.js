const spellDescriptions = {
  // =======================================
  //                EVOCATION
  // =======================================
  FIREBOLT: (spellPower) => {
    return `Shoot a bolt of flame at an enemy, dealing ${spellPower} - ${
      spellPower + 6
    } Fire damage.`;
  },
  FROSTBITE: (spellPower) => {
    return `Envelope an enemy in frost, dealing ${spellPower} - ${
      spellPower + 8
    } Ice damage.`;
  },
  SHOCK: (spellPower) => {
    return `Shock an enemy with electricity, dealing ${spellPower} - ${
      spellPower + 10
    } Lightning damage.`;
  },
  FIREBALL: (spellPower) => {
    return `Shoot a ball of fire that explodes, dealing ${spellPower} to ${
      spellPower + 4
    } Fire damage to all enemies.`;
  },
  CHAIN_LIGHTNING: (spellPower) => {
    return `Shoot a bolt of lighting which has a chance to leap to additional targets, dealing ${spellPower} to ${
      spellPower + 14
    } Lightning damage to each target it hits.`;
  },
  BLIZZARD: () => {
    return `Evoke a frigid snowstorm, inflicting the Chilled condition on all enemies.`;
  },
  STORM_SPHERE: (spellPower) => {
    return `Surround yourself in a sphere of lightning, dealing ${Math.round(
      spellPower / 2
    )} Lightning damage to all enemies who Attack you for 1 room.`;
  },
  METEOR: (spellPower) => {
    return `Rain down cataclysmic fire, inflicting the Burning condition and dealing ${spellPower} to ${
      spellPower + 18
    } Fire damage to all enemies.`;
  },
  // =======================================
  //               ABJURATION
  // =======================================
  BARK_SKIN: () => {
    return `Give a target the durability of bark, increasing the target's Defense +1 for 3 rounds.`;
  },
  BARRIER: () => {
    return `Place a magical barrier around an ally. The next instance of damage received by the target is halved and the spell ends.`;
  },
  BOUNDLESS: () => {
    return `Protect an ally from being Restrained. The target gains immunity to the Restrained condition for 3 rounds.`;
  },
  DEATH_WARD: () => {
    return `Place a ward on an ally protecting it from death. If the target falls below 0HP, it instead retains 1HP and the spell ends.`;
  },
  DISPEL_MAGIC: () => {
    return `Dispel a random magical effect on an enemy that is making it more powerful.`;
  },
  PROTECT_FROM_EVIL: () => {
    return `Place a ward the party that protects against evil. Your current threat is reduced by 10 for 3 rooms.`;
  },
  STONE_SKIN: () => {
    return `Give an ally the durability of stone, increasing the target's Defense +2 for 3 rounds.`;
  },
  STEEL_SKIN: () => {
    return `Give an ally the durability of steel, increasing the ally's Defense +3 for 3 rounds.`;
  },
  SHELL: () => {
    return `Place a magical shell around an ally. All instances of damage received by the target are halved for 3 rounds.`;
  },
  INVULNERABILITY: () => {
    return `Grant an ally invulnerability. The target cannot be damaged for 3 rounds.`;
  },
  // =======================================
  //              CONJURATION
  // =======================================
  CONJURE_WEAPON: () => {
    return `Grant an ally a magical weapon, increasing the ally's Attack +2 for 3 rooms.`;
  },
  CONJURE_FEAST: () => {
    return `Conjure a feast for all allies to consume, increasing their Health Regeneration +2 for 3 rooms.`;
  },
  SUMMON_HOUND: () => {
    return `Summon a hound to join your party and fight alongside you. You can only have one summon active at a time.`;
  },
  SUMMON_KNIGHT: () => {
    return `Summon a knight to join your party and fight alongside you. You can only have one summon active at a time.`;
  },
  CONJURE_KEY: () => {
    return `Conjure a key to open locked doors.`;
  },
  SUMMON_DRAKE: () => {
    return `Summon a drake to join your party and fight alongside you. You can only have one summon active at a time.`;
  },
  SUMMON_GOLEM: () => {
    return `Summon a golem to join your party and fight alongside you. You can only have one summon active at a time.`;
  },
  CONJURE_PORTAL: () => {
    return `Conjure a portal, allowing you to enter into an area of your choice that you've previously discovered within your current dungeon.`;
  },
  SUMMON_HERO: () => {
    return `Summon a hero that is currently not in your party. You can have a maximum of 3 heroes in your party at a time.`;
  },
};

export default spellDescriptions;
