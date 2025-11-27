import { musicPaths, playMusic } from "@/data/audio/music";
import { backgroundMusic } from "@/data/audio/music";
import { currentMusic } from "@/data/audio/music";

export function getRoomMusic(dungeon) {
  let music;

  // Use general dungeon images
  switch (dungeon.name) {
    case "The Great Catacomb":
      {
        music = backgroundMusic.threeThousandYearsOld;
      }
      break;
  }

  // PATH LOGIC
  // // Check for path specific backgrounds (replaces dungeon imageList)
  // if (dungeon.path) {
  //   switch (dungeon.path) {
  //     case "Wailing Warrens":
  //       {
  //         const musicList = [
  //           backgroundMusic.hauntedOutpost,
  //           backgroundMusic.fightThrough,
  //         ];

  //         const index = Math.floor(Math.random() * musicList.length);
  //         music = musicList[index];
  //       }
  //       break;

  //     case "Thieves' Ruin":
  //       music = backgroundMusic.hiddenCapacity;
  //       break;

  //     default:
  //       break;
  //   }
  // }

  // Check for event specific backgrounds (replaces dungeon & path imageList)
  if (dungeon.contents.event) {
    switch (dungeon.contents.event.name) {
      //THE GREAT CATACOMBS
      case "Ambush":
        music = backgroundMusic.unfinishedBusiness;
        break;

      case "Gravestone":
        music = backgroundMusic.pileOfBones;
        break;

      case "Coffin":
        music = backgroundMusic.pileOfBones;
        break;

      case "Bonevault":
        music = backgroundMusic.pileOfBones;
        break;

      case "Unlocking Siggurd":
        music = backgroundMusic.warningSignal;
        break;

      case "Unlocking Liheth":
      case "Candlelight Shrine":
        music = backgroundMusic.mindReading;
        break;

      // WAILING WARRENS
      case "Wailing Warrens":
        music = backgroundMusic.basementNightmare;
        break;

      case "Wailing Warrens Exit":
        music = backgroundMusic.basementNightmare;
        break;

      // THIEVES RUIN
      case "Thieves' Ruin":
        music = backgroundMusic.threeThousandYearsOld;
        break;

      case "Thieves' Ruin Exit":
        music = backgroundMusic.threeThousandYearsOld;
        break;
      case "Laughing Coffin":
        music = backgroundMusic.unfinishedBusiness;
        break;

      default:
        break;
    }
  }

  return music;
}

export function playEncounterMusic() {
  const dungeon = store.getState().dungeon;
  let music;

  // Encounter Music
  switch (dungeon.name) {
    case "The Great Catacomb":
      {
        const musicList = [
          "weCantStopThem",
          "passedDanger",
          "finalBrigade",
          "migrano",
          "warningSignal",
        ];
        const index = Math.floor(Math.random() * musicList.length);
        music = musicList[index];
      }
      break;
  }

  // PATH LOGIC
  // if (dungeon.path) {
  //   switch (dungeon.path) {
  //     case "Wailing Warrens":
  //       {
  //         const musicList = ["hauntedOutpost", "fightThrough"];
  //         const index = Math.floor(Math.random() * musicList.length);
  //         music = musicList[index];
  //       }
  //       break;
  //     case "Thieves' Ruin":
  //       music = "hiddenCapacity";
  //       break;
  //   }
  // }

  // FIX: Error with currentMusic._src returning null
  // if (music) {
  //   const musicURL = `/assets/audio/music/${music}.mp3`;
  //   if (musicURL !== currentMusic._src) {
  //     playMusic(backgroundMusic[music]);
  //     playMusic(backgroundMusic[music]);
  //   }
  // }
}