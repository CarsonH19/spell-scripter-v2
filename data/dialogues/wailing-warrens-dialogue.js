export const WAILING_WARRENS_ENTRANCE_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: "RIGHT",
        speaker: null,
        image: `/assets/images/dialogue/wandering-wisp-dialogue.png`,
        text: "The wisp comes to a stop in front of a massive, ancient door. The faint sound of ghostly whispers seeps through the cracks.",
      },
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "/assets/images/dialogue/player-1-dialogue.png",
        text: `"This... this doesn't look good. What's behind this door?"`,
      },
      {
        position: "RIGHT",
        speaker: null,
        image: `/assets/images/dialogue/wandering-wisp-dialogue.png`,
        text: "The wisp floats closer to the door, its glow intensifying as the whispers grow louder.",
      },
      {
        position: "RIGHT",
        speaker: null,
        image: "",
        text: "You lose sight of the wisp as it phases through the door.",
      },
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "/assets/images/dialogue/player-1-dialogue.png",
        text: `"I guess there's only one way to find out what's in there."`,
      },
    ],
    responseEnter: [
      {
        position: "LEFT",
        speaker: null,
        image: "",
        text: "Unsettling whispers seem to emanate from the walls of this place. Shadows twist and stretch unnaturally, as if alive, while distant, mournful wails drift through the passageways. The walls are slick with moisture, and the air is thick with an unnatural chill that bites at your skin.",
      },
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "/assets/images/dialogue/player-1-dialogue.png",
        text: `"This place gives me the creeps..."`,
      },
    ]
  },
  SIGGURD: {
    before: [],
  },
  LIHETH: {
    before: [],
  },
};
