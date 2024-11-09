// import { Howl } from "howler";

// export const soundPaths = {
//   // ===============================
//   //           MISS
//   // ===============================
//   guard: {
//     severMetalHit2: "/assets/audio/sound/guard/Sever Metal Hit 2.mp3",
//     swordImpactRock1: "/assets/audio/sound/guard/Sword Impact Rock 1.mp3",
//     swordHit4: "/assets/audio/sound/guard/Sword Hit 4.mp3",
//     swordHit7: "/assets/audio/sound/guard/Sword Hit 7.mp3",
//     eventShield: "/assets/audio/sound/guard/Event, Shield.mp3",
//   },
//   miss: {
//     miss1: "/assets/audio/sound/guard/miss-1.mp3",
//     miss2: "/assets/audio/sound/guard/miss-2.mp3",
//     miss3: "/assets/audio/sound/guard/miss-3.mp3",
//   },
//   // ===============================
//   //         ATTACKS
//   // ===============================
//   attack: {
//     lihethAttack: "/assets/audio/sound/magic/Magic Spell Whoosh 14.mp3",
//   },
//   fleshHit: {
//     fleshHit1: "/assets/audio/sound/attacks/flesh-hit/Flesh Hit 1.mp3",
//     fleshHit3: "/assets/audio/sound/attacks/flesh-hit/Flesh Hit 3.mp3",
//     fleshHit4: "/assets/audio/sound/attacks/flesh-hit/Flesh Hit 4.mp3",
//     fleshHit5: "/assets/audio/sound/attacks/flesh-hit/Flesh Hit 5.mp3",
//     fleshHit11: "/assets/audio/sound/attacks/flesh-hit/Flesh Hit 11.mp3",
//   },
//   punch: {
//     impactPunchFace8:
//       "/assets/audio/sound/attacks/punch/Impact Punch Face 8.mp3",
//     impactPunchHard:
//       "/assets/audio/sound/attacks/punch/Impact Punch Hard.mp3",
//     punch1: "/assets/audio/sound/attacks/punch/Punch 1.mp3",
//     punchFaceMeatyFlesh:
//       "/assets/audio/sound/attacks/punch/Punch Face Meaty Flesh 3.mp3",
//     impactPunchBody2:
//       "/assets/audio/sound/attacks/punch/Impact Punch Body 2.mp3",
//   },
//   // Decrepit Skeleton / Thief / Riven
//   lightWeapon: {
//     knifeSliceFace: "/assets/audio/sound/attacks/light/Knife Slice Face.mp3",
//     knifeStab1: "/assets/audio/sound/attacks/light/Knife Stab 1.mp3",
//     knifeStab: "/assets/audio/sound/attacks/light/Knife Stab.mp3",
//     knifeStabFleshWet:
//       "/assets/audio/sound/attacks/light/Knife Stab Flesh Wet.mp3",
//     knifeThrowFlesh:
//       "/assets/audio/sound/attacks/light/Knife Throw Flesh.mp3",
//     swordSlice: "/assets/audio/sound/attacks/light/Sword Slice.mp3",
//     swordDraw2: "/assets/audio/sound/attacks/light/Sword Draw 2.mp3",
//     swordThrow: "/assets/audio/sound/attacks/light/Sword Throw.mp3",
//   },
//   // Siggurd / Skeletal Warrior / Death Knight
//   heavyWeapon: {
//     axeChopFlesh1: "/assets/audio/sound/attacks/heavy/Axe Chop Flesh 1.mp3",
//     axeChopFlesh2: "/assets/audio/sound/attacks/heavy/Axe Chop Flesh 2.mp3",
//     axeChopFlesh8: "/assets/audio/sound/attacks/heavy/Axe Chop Flesh 8.mp3",
//     axeChopFlesh10:
//       "/assets/audio/sound/attacks/heavy/Axe Chop Flesh 10.mp3",
//     battleAxeStrike2:
//       "/assets/audio/sound/attacks/heavy/Battle Axe Strike 2.mp3",
//     battleAxeStrike3:
//       "/assets/audio/sound/attacks/heavy/Battle Axe Strike 3.mp3",
//     battleAxeThrow: "/assets/audio/sound/attacks/heavy/Battle Axe Throw.mp3",
//     axeThrowIntoBody2:
//       "/assets/audio/sound/attacks/heavy/Axe Throw Into Body 2.mp3",
//     axeThrowIntoBody3:
//       "/assets/audio/sound/attacks/heavy/Axe Throw Into Body 3.mp3",
//   },
//   // Skeletal Archer - Multi-shot
//   bowAttack: {
//     bulletsPassBy4: "/assets/audio/sound/attacks/Bullets Pass By 4.mp3",
//     bulletsImpactFlesh26:
//       "/assets/audio/sound/attacks/Bullet Impact Flesh 26.mp3",
//   },
//   shootArrow: {
//     shootArrow1: "/assets/audio/sound/attacks/shoot-arrow-1.wav",
//     shootArrow2: "/assets/audio/sound/attacks/shoot-arrow-2.wav",
//     shootArrow3: "/assets/audio/sound/attacks/shoot-arrow-3.wav",
//     shootArrow4: "/assets/audio/sound/attacks/shoot-arrow-4.wav",
//   },
//   ghostAttack: {
//     ghostAttack1: "/assets/audio/sound/attacks/ghost/ghost-attack-1.mp3",
//     ghostAttack2: "/assets/audio/sound/attacks/ghost/ghost-attack-2.mp3",
//     ghostAttack3: "/assets/audio/sound/attacks/ghost/ghost-attack-3.mp3",
//     ghostAttack4: "/assets/audio/sound/attacks/ghost/ghost-attack-4.mp3",
//   },

//   // ===============================
//   //           MAGIC
//   // ===============================
//   magic: {
//     // EVOCATION
//     shock: "/assets/audio/sound/magic/shock.mp3",
//     frostbite: "/assets/audio/sound/magic/frostbite.mp3",
//     fireball: "/assets/audio/sound/magic/fireball.mp3",
//     firebolt: "/assets/audio/sound/magic/meteor.mp3",
//     blizzard: "/assets/audio/sound/magic/blizzard.mp3",
//     chainLightning: "/assets/audio/sound/magic/chain-lightning.mp3",
//     stormSphere: "/assets/audio/sound/magic/storm-sphere.mp3",
//     stormSphereDamage: "/assets/audio/sound/magic/storm-sphere-damage.mp3",
//     meteor: "/assets/audio/sound/magic/meteor.mp3",
//     // ABJURATION
//     barkskin: "/assets/audio/sound/magic/barkskin.mp3",
//     barrier: "/assets/audio/sound/magic/barrier.mp3",
//     deathWard: "/assets/audio/sound/magic/death-ward.mp3",
//     dispelMagic: "/assets/audio/sound/magic/dispel-magic.mp3",
//     invulnerability: "/assets/audio/sound/magic/invulnerability.mp3",
//     shell: "/assets/audio/sound/magic/shell.mp3",
//     steelskin: "/assets/audio/sound/magic/steelskin.mp3",
//     stoneskin: "/assets/audio/sound/magic/stoneskin.mp3",
//     protectFromEvil: "/assets/audio/sound/magic/protect-from-evil.mp3",
//     // CONJURATION
//     conjure: "/assets/audio/sound/magic/conjure.mp3",
//     summon: "/assets/audio/sound/magic/summon.mp3",
//     // RESTORATION
//     // Skeletal Mage attack
//     iceWand: "/assets/audio/sound/magic/ice-wand.mp3",
//     magicSpellFire1: "/assets/audio/sound/magic/Magic Spell Fire 1.mp3",
//     magicSpellFire2: "/assets/audio/sound/magic/Magic Spell Fire 2.mp3",
//     magicSpellHit2: "/assets/audio/sound/magic/Magic Spell Hit 2.mp3",
//     magicSpellHit4: "/assets/audio/sound/magic/Magic Spell Hit 4.mp3",

//     magicSpellImpact: "/assets/audio/sound/magic/Magic Spell Impact.mp3",
//     magicWandCast8: "/assets/audio/sound/magic/Magic Wand Cast 8.mp3",
//     magicWandCast14: "/assets/audio/sound/magic/Magic Wand Cast 14.mp3",
//     magicSpellPassBy28:
//       "/assets/audio/sound/magic/Magic Spell Pass By 28.mp3",
//     magicSpellWhoosh2: "/assets/audio/sound/magic/Magic Spell Whoosh 2.mp3",
//     magicSpellWhoosh4: "/assets/audio/sound/magic/Magic Spell Whoosh 4.mp3",
//     magicSpellWhoosh9: "/assets/audio/sound/magic/Magic Spell Whoosh 9.mp3",
//     magicSpellWhoosh22:
//       "/assets/audio/sound/magic/Magic Spell Whoosh 22.mp3",
//   },
//   // ===============================
//   //            ABILITIES
//   // ===============================
//   abilities: {
//     cleansingFlame: "/assets/audio/sound/abilities/cleansing-flame.mp3",
//     undyingFlame: "/assets/audio/sound/abilities/undying-flame.mp3",
//     divineGuardian: "/assets/audio/sound/abilities/divine-guardian.mp3",
//     venomStrike: "/assets/audio/sound/abilities/venom-strike.mp3",
//   },

//   // ===============================
//   //            SPAWN
//   // ===============================
//   spawn: {
//     // Skeletons
//     boneCrunchCrack1: "/assets/audio/sound/Bone Crunch Crack 1.mp3",
//     ratSqueak30: "/assets/audio/sound/Rat Squeaks 30.mp3",
//     ratSqueak9: "/assets/audio/sound/Rat Squeaks 9.mp3",
//     swordFromSheath3: "/assets/audio/sound/Sword From Sheath 3.mp3",
//     spiderDaddyLong1: "/assets/audio/sound/Spider Daddy Long 1.mp3",
//     spiderDaddyLong2: "/assets/audio/sound/Spider Daddy Long 2.mp3",
//     ghostAppearance1: "/assets/audio/sound/Ghost Appearance 1.mp3",
//     enemySnarl4: "/assets/audio/sound/Monster Snarl 41.mp3",
//   },
//   // Undead Spawn
//   undeadSpawn: {
//     ghoulBeast1:
//       "/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 01.wav",
//     ghoulBeast2:
//       "/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 02.wav",
//     ghoulBeast3:
//       "/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 03.wav",
//     ghoulBeast4:
//       "/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 04.wav",
//     ghoulBeast5:
//       "/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 05.wav",
//     ghoulBeast6:
//       "/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 06.wav",
//     undeadClassic1: "/assets/audio/sound/spawn/Undead, Classic 1.wav",
//     undeadClassic2: "/assets/audio/sound/spawn/Undead, Classic 2.wav",
//     undeadClassic2: "/assets/audio/sound/spawn/Undead, Classic 3.wav",
//   },
//   shadowSpawn: {
//     shadowSpawn1: "/assets/audio/sound/spawn/shadow-spawn-1.wav",
//     shadowSpawn2: "/assets/audio/sound/spawn/shadow-spawn-2.wav",
//     shadowSpawn3: "/assets/audio/sound/spawn/shadow-spawn-3.wav",
//     shadowSpawn4: "/assets/audio/sound/spawn/shadow-spawn-4.wav",
//   },
//   // Humanoid death
//   fightGrunt: {
//     fightGrunt1: "/assets/audio/sound/Fight Grunt 1.mp3",
//     fightGrunt2: "/assets/audio/sound/Fight Grunt 2.mp3",
//     fightGrunt3: "/assets/audio/sound/Fight Grunt 3.mp3",
//     fightGrunt6: "/assets/audio/sound/Fight Grunt 6.mp3",
//   },
//   // Skeleton death
//   boneBreak: {
//     boneBreak: "/assets/audio/sound/Bone Break.mp3",
//     boneBreak6: "/assets/audio/sound/Bone Break 6.mp3",
//     boneBreak7: "/assets/audio/sound/Bone Break 7.mp3",
//     boneBreak8: "/assets/audio/sound/Bone Break 8.mp3",
//     spineBoneBreak1: "/assets/audio/sound/Spine Bone Break 1.mp3",
//     spineBoneBreak2: "/assets/audio/sound/Spine Bone Break 2.mp3",
//   },
//   armorClankToTheGround: {
//     armorMetalClanksToTheGround:
//       "/assets/audio/sound/Armor Metal Clanks to Ground.mp3",
//     armorMetalClanksToTheGround2:
//       "/assets/audio/sound/Armor Metal Clanks to Ground 2.mp3",
//     armorMetalClanksToTheGround3:
//       "/assets/audio/sound/Armor Metal Clanks to Ground 3.mp3",
//   },
//   // ===============================
//   //          STATUS EFFECTS
//   // ===============================
//   statusEffects: {
//     burning: "/assets/audio/sound/status-effects/burning.mp3",
//     stunned: "/assets/audio/sound/magic/shock.mp3",
//     haunted: "/assets/audio/sound/status-effects/haunted.mp3",
//   },
//   // ===============================
//   //          DEATH
//   // ===============================
//   death: {
//     wispDeath: "/assets/audio/sound/death/wisp-death.mp3",
//     shadowDeath: "/assets/audio/sound/death/shadow-death.mp3",
//     bansheeDeath: "/assets/audio/sound/death/banshee-death.mp3",
//   },
//   // ===============================
//   //            ITEM
//   // ===============================
//   item: {
//     gulpingWater24: "/assets/audio/sound/items/Gulping Water 24.mp3",
//     chewCrackersMouth: "/assets/audio/sound/items/Chew Crackers Mouth.mp3",
//     skeletonKey: "/assets/audio/sound/items/Skeleton Key In 2.mp3",
//     flameLicks2: "/assets/audio/sound/items/Flame Licks 2.mp3",
//     map: "/assets/audio/sound/items/map.wav",
//     // Laughin Coffin
//     coinFlipLand: "/assets/audio/sound/items/Coin Flip Land.mp3",
//   },
//   // ===============================
//   //           EVENT
//   // ===============================
//   event: {
//     metalSqueak21: "/assets/audio/sound/Metal Squeak 21.mp3",
//   },
//   // inventory: {
//   //   cameraBag2: "/assets/audio/sound/misc/Camera Bag 2.mp3",
//   // },
//   // ===============================
//   //            MISC
//   // ===============================
//   misc: {
//     // Continue arrow
//     whooshLowAir: "/assets/audio/sound/Whoosh Low Air.mp3",
//     // RoomSummaryModal
//     hitReverbDark4: "/assets/audio/sound/misc/Hit Reverb Dark 4.mp3",
//     // Reset School Mastery
//     shimmerCrysta: "/assets/audio/sound/misc/Shimmer Crysta.mp3",
//     // Dungeon & Path title
//     enterDungeon: "/assets/audio/sound/misc/enter-dungeon.mp3",
//     // QTE
//     openCoffin: "/assets/audio/sound/misc/open-coffin.mp3",
//     qteStart: "/assets/audio/sound/misc/qte-start.mp3",
//     correct: "/assets/audio/sound/misc/correct.mp3",
//     incorrect: "/assets/audio/sound/misc/incorrect.mp3",
//     encounter: "/assets/audio/sound/misc/encounter.mp3",
//   },
//   openDoor: {
//     openDoor1: "/assets/audio/sound/misc/open-door-1.wav",
//     openDoor2: "/assets/audio/sound/misc/open-door-2.wav",
//   },
//   // ===============================
//   //            DIALOGUE
//   // ===============================
//   dialogue: {
//     dialogue1: "/assets/audio/sound/misc/dialogue-1.wav",
//     dialogue2: "/assets/audio/sound/misc/dialogue-2.wav",
//     dialogue3: "/assets/audio/sound/misc/dialogue-3.wav",
//     dialogue4: "/assets/audio/sound/misc/dialogue-4.wav",
//   },
//   // ===============================
//   //             UI
//   // ===============================
//   ui: {
//     // Attunement
//     magicStone: "/assets/audio/sound/ui/Magic Stone.mp3",
//     // Inc. Attribute & Next Dialogue
//     medievalGUI1:
//       "/assets/audio/sound/ui/Medieval, GUI, Hover Over Menu Buttons 01.mp3",
//     // Dec. Attribute & Prev. Dialogue
//     medievalGUI2:
//       "/assets/audio/sound/ui/Medieval, GUI, Hover Over Menu Buttons 02.mp3",
//     // Confirm enter
//     GUIMenuButton:
//       "/assets/audio/sound/ui/GUI Menu Button, Select OK, Button, Start Game, Airy, Bright, Dark Reverb.mp3",
//     //Modal open & Dialogue open
//     softs: "/assets/audio/sound/ui/Softs.wav",
//     //Modal close & Dialogue close
//     softs2: "/assets/audio/sound/ui/Softs 2.wav",
//     unattune: "/assets/audio/sound/ui/unattune.mp3",
//     trade: "/assets/audio/sound/ui/trade.mp3",
//     selectHero: "/assets/audio/sound/ui/select-hero.mp3",
//   },
//   skill: {
//     coldWhoosh3: "/assets/audio/sound/ui/Cold, Whoosh 03.mp3",
//     coldWhoosh10: "/assets/audio/sound/ui/Cold, Whoosh 10.mp3",
//     coldWhoosh14: "/assets/audio/sound/ui/Cold, Whoosh 14.mp3",
//     coldWhoosh16: "/assets/audio/sound/ui/Cold, Whoosh 16.mp3",
//     coldWhoosh19: "/assets/audio/sound/ui/Cold, Whoosh 19.mp3",
//   },
// };

// // // ===============================
// // //       Player Abilities
// // // ===============================

// // const playerAbilitySounds = {
// //   ghostlyWhoosh: new Howl({
// //     : ["/assets/audio/sound/Ghostly Whoosh.mp3"],
// //   }),
// // };

// // ===============================
// //        Enemy Sounds
// // ===============================

// // const enemySounds = {
// //   biteFleshCrunch1: new Howl({
// //     : ["/assets/audio/sound/Bite Flesh Crunch 1.mp3"],
// //   }),
// //   biteFleshCrunch2: new Howl({
// //     : ["/assets/audio/sound/Bite Flesh Crunch 2.mp3"],
// //   }),
// //   biteFleshCrunch4: new Howl({
// //     : ["/assets/audio/sound/Bite Flesh Crunch 4.mp3"],
// //   }),
// //   spiderBiteFang3: new Howl({
// //     : ["/assets/audio/sound/Spider Bite Fang 3.mp3"],
// //   }),
// //   spiderBiteFang4: new Howl({
// //     : ["/assets/audio/sound/Spider Bite Fang 4.mp3"],
// //   }),
// //   spiderWebShoot7: new Howl({
// //     : ["/assets/audio/sound/Spider Web Shoot 7.mp3"],
// //   }),
// //   larvaEggHatch4: new Howl({
// //     : ["/assets/audio/sound/Larva Egg Hatch 4.mp3"],
// //   }),
// //   fleshRip1: new Howl({
// //     : ["/assets/audio/sound/Flesh Rip 1.mp3"],
// //   }),
// //   bodyShove: new Howl({
// //     : ["/assets/audio/sound/Body Shove.mp3"],
// //   }),
// // };

// // // ===============================
// // //        Enemy Spawn
// // // ===============================

// // // ===============================
// // //        Enemt Attacks
// // // ===============================

// // const monsterAttackSounds = {
// //   skullHitShovel: new Howl({
// //     : ["/assets/audio/sound/Skull Hit Shovel.mp3"],
// //   }),
// //   torchPassBy1: new Howl({
// //     : ["/assets/audio/sound/Torch Pass By 1.mp3"],
// //   }),
// //   fleshStab3: new Howl({
// //     : ["/assets/audio/sound/Flesh Stab 3.mp3"],
// //   }),
// // };

// // // ===============================
// // //           ITEMS
// // // ===============================

// // const itemSounds = {
// //   crystalWhoosh: new Howl({
// //     : ["/assets/audio/sound/Whoosh Crystal.mp3"],
// //   }),
// //   // Wisp
// //   ghostBreathWithReverb: new Howl({
// //     : ["/assets/audio/sound/Ghostly Breath With Reverb.mp3"],
// //   }),
// //   // Whispering Skulls
// //   evilSpell1: new Howl({
// //     : ["/assets/audio/sound/Evil Spell 1.mp3"],
// //   }),
// //   // Demonic Grimoire
// //   energyPresence4: new Howl({
// //     : ["/assets/audio/sound/Energy Presence 4.mp3"],
// //   }),
// // };

// // // ===============================
// // //           EVENTS
// // // ===============================

// // const eventSounds = {
// //   humanLaugh25: new Howl({
// //     : ["/assets/audio/sound/Human Laugh 25.mp3"],
// //   }),
// //   ratsSqueak: new Howl({
// //     : ["/assets/audio/sound/Rats Squeak.mp3"],
// //   }),
// //   crashRockStone: new Howl({
// //     : ["/assets/audio/sound/Crash Rock Stone.mp3"],
// //   }),
// // };

// // // ===============================
// // //           MISC
// // // ===============================

// // const miscSounds = {
// //   cameraBag2: new Howl({
// //     : ["/assets/audio/sound/misc/Camera Bag 2.mp3"],
// //   }),
// //   cameraIntoBag: new Howl({
// //     : ["/assets/audio/sound/misc/Camera Into Bag.mp3"],
// //   }),
// //   cauldronLargeBoil: new Howl({
// //     : ["/assets/audio/sound/misc/Cauldron Large Boil.mp3"],
// //   }),
// //   evilSpellVoice1: new Howl({
// //     : ["/assets/audio/sound/misc/Evil Spell Voice 1.mp3"],
// //   }),
// //   feedbackSwell4: new Howl({
// //     : ["/assets/audio/sound/misc/Feedback Swell 4.mp3"],
// //   }),
// //   ghostEncounter: new Howl({
// //     : ["/assets/audio/sound/misc/Ghost Encounter.mp3"],
// //   }),
// //   ghostlyDemonic: new Howl({
// //     : ["/assets/audio/sound/misc/Ghostly Demonic.mp3"],
// //   }),
// //   ghostlyMagic: new Howl({
// //     : ["/assets/audio/sound/misc/Ghostly Magic.mp3"],
// //   }),
// //   voiceClipMale226: new Howl({
// //     : ["/assets/audio/sound/misc/Voice Clip Male 226.mp3"],
// //   }),
// //   magicMetallic: new Howl({
// //     : ["/assets/audio/sound/misc/Magical Metallic.mp3"],
// //   }),
// //   pitchforkBody: new Howl({
// //     : ["/assets/audio/sound/Pitchfork Body.mp3"],
// //   }),
// //   splashSubmerge2: new Howl({
// //     : ["/assets/audio/sound/misc/Splash Submerge 2.mp3"],
// //   }),
// //   bloodDrips: new Howl({
// //     : ["/assets/audio/sound/misc/Blood Drips.mp3"],
// //   }),
// //   ominousPresence: new Howl({
// //     : ["/assets/audio/sound/misc/Ominous Presence.mp3"],
// //   }),
// //   doorSecretPassage1: new Howl({
// //     : ["/assets/audio/sound/misc/Door Secret Passage 1.mp3"],
// //   }),
// // };

// // // Dungeon
// // enter dungeon
// // room summary
// // next room

// // // Attributes
// // Inc./Dec. Attribute

// // // Hero
// // Hero Select

// // // Spellbook
// // Select Skill
// // Reset Mastery Points

// // // Inventory
// // Consumables
// // Eat
// // Drink

// // Equipment
// // Attune
// // Unattune

// // // Combat
// // Spells
// // Attacks
// // Guard
// // Abilities
// // injury
// // defeat
// // enemy spawn

// // // tome
// // open / close
// // next page

// // // Player
// // level up
// // master tome

// // QTE
// // open
// // answer
// // success
// // incorrect
