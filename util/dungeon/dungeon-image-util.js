import { getImageFromList } from "../misc-util";

export function getRoomImage(dungeon) {
  let backgroundImage;

  // Use general dungeon images
  switch (dungeon.name) {
    case "The Great Catacomb":
      backgroundImage = getImageFromList(
        "/assets/images/backgrounds/the-great-catacomb/catacomb",
        26
      );
      break;
  }

  // PATH LOGIC
  // // Check for path specific backgrounds (replaces dungeon imageList)
  // if (dungeon.path) {
  //   switch (dungeon.path) {
  //     case "Wailing Warrens":
  //       backgroundImage = getImageFromList(
  //         "/assets/images/backgrounds/wailing-warrens/wailing-warrens",
  //         12
  //       );
  //       break;

  //     case "Thieves' Ruin":
  //       backgroundImage = getImageFromList(
  //         "/assets/images/backgrounds/thieves-ruin/thieves-ruin",
  //         9
  //       );
  //       break;

  //     default:
  //       break;
  //   }
  // }

  // Check for event specific backgrounds (replaces dungeon & path imageList)
  if (dungeon.contents.event) {
    switch (dungeon.contents.event.name) {
      //THE GREAT CATACOMBS
      case "Gravestone":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/events/gravestone",
          5
        );
        break;

      case "Coffin":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/events/coffin",
          7
        );
        break;

      case "Bonevault":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/events/bonevault-door",
          6
        );
        break;

      case "Unlocking Liheth":
      case "Candlelight Shrine":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/events/candlelight-shrine",
          7
        );
        break;

      // WAILING WARRENS
      case "Wailing Warrens":
      case "Wailing Warrens Exit":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/wailing-warrens/wailing-warrens-door",
          1
        );
        break;

      // THIEVES RUIN
      case "Thieves' Ruin":
      case "Thieves' Ruin Exit":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/thieves-ruin/thieves-ruin-door",
          2
        );
        break;

      case "Laughing Coffin":
        backgroundImage = getImageFromList(
          "/assets/images/backgrounds/thieves-ruin/laughing-coffin-tavern",
          1
        );
        break;

      default:
        break;
    }
  }

  return backgroundImage;
}