export const DUNGEON_ENTRANCE_DIALOGUE = {
  PLAYER: [
    [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `“The ancient stones of this entrance seem to whisper tales of old. Time to gather my wits and step into the unknown. There's no turning back now.”`,
      },
    ],
  ],
  SIGGURD: [
    [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `“Spell Scripter, this is where a trial begins. Stay alert and let the light guide us through the darkness.”`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `“Understood, Siggurd. I've got a few tricks up my sleeve to help us through whatever's waiting in there.”`,
      },
    ],
    [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `“The catacomb's entrance stands before us, a silent guardian of its secrets. Are you ready for the challenges ahead?”`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `“Ready as I'll ever be. Just keep your sword at the ready and I'll handle the magic. Together, we'll make it through.”`,
      },
    ],
    [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `“The air grows heavier as we approach. Remember, bravery and caution are our best allies in these depths.”`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `“Bravery I've got in spades. And with your sword by my side, I'm sure we'll face whatever comes our way.”`,
      },
    ],
  ],
  LIHETH: [
    [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Ah, we are about to enter the catacombs. Remember, light can be a beacon in the darkest places. Keep a candle close to guide your way."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Thank you, Liheth. I'll make sure to keep your wisdom in mind. I have a feeling I'll need every bit of light I can get."`,
      },
    ],
    [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"The shadows in the catacombs can be quite deceptive. Trust in the light you carry and stay true to your path."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I'll heed your advice, Liheth. A little light might make all the difference in these treacherous halls."`,
      },
    ],
    [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"The deeper you go, the darker it will get. But remember, even the smallest light can dispel the deepest gloom."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I appreciate the encouragement, Liheth. I'll make sure to keep my light burning bright as I venture forth."`,
      },
    ],
  ],
};

export const COFFIN_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `This coffin looks like it belonged to royalty of some kind. Something of value may be inside.`,
      },
    ],
    responseEnemy: [
      {
        position: `LEFT`,
        speaker: null,
        image: ``,
        text: `As the coffin creaks open, a cloud of stale air escapes, revealing a grim sight: a skeletal hand reaching out from the darkness.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"It seems my treasure is a bit more animated than anticipated."`,
      },
    ],
    afterLeave: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Maybe some mysteries are better left undisturbed."`,
      },
    ],
  },
  SIGGURD: {
    before: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Siggurd, take a look at this—an ornate coffin, just sitting here in the shadows. What do you make of it? Should we risk opening it or leave it be?"`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Ah, a coffin with such intricate design could indeed hide valuable treasures. However, the presence of such an item in these cursed catacombs might also signify danger."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"True, it could be a trap. But then again, it could be filled with something priceless or even useful for our quest."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"The decision remains with you. I shall stand ready in case of any danger."`,
      },
    ],
    responseEnemy: [
      {
        position: `LEFT`,
        speaker: null,
        image: ``,
        text: `As the coffin creaks open, a cloud of stale air escapes, revealing a grim sight: a skeletal hand reaching out from the darkness.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Looks like our curiosity has awakened more than we bargained for.`,
      },
    ],
    afterEnemy: [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `Maybe the dead should remain undisturbed.`,
      },
    ],
  },
  LIHETH: {
    before: [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Ah, a grand coffin amidst the shadows. How curious. It seems to beckon you with an aura of both mystery and temptation."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Temptation indeed. It could be hiding something valuable... or something rather unpleasant. What do you think, Liheth? Should we open it or leave it be?"`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Even in these darkened halls, there is a certain reverence for what lies within. Sometimes, the greatest discoveries come from embracing the unknown. But remember, young wizard, not all secrets are meant to be unearthed."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Ah, wise words as always. But if we always feared the unknown, we'd never have any stories to tell. Perhaps a little risk is just what we need. Besides, what's life without a little adventure?"`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Very well. If you choose to open it, do so with caution. I shall be here to offer guidance, should the need arise. The light may guide us, but it's your courage that will see us through."`,
      },
    ],
    responseEnemy: [
      {
        position: `LEFT`,
        speaker: null,
        image: ``,
        text: `As the coffin creaks open, a cloud of stale air escapes, revealing a grim sight: a skeletal hand reaching out from the darkness.`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Looks like our decision has stirred up quite the unpleasant surprise."`,
      },
    ],
    afterEnemy: [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"That was more excitement than I anticipated."`,
      },
    ],
  },
};

export const AMBUSH_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `Scoundrels suddenly emerge from hiding and quickly surround you, their blades unsheathed and eyes gleaming with greed.`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Hold it right there. Don't move."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Your coin, your valuables, and anything else of worth. Hand them over quietly, and we won't hurt you."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Hold on! Lets just-"`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Don't test my patience! Empty your pockets, now."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"I won't ask again."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `...`,
      },
    ],
    responseRefuse: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I won't give you anything."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"We'll take it off your corpse!`,
      },
    ],
    // No surrender response
    afterSurrender: [
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Good choice."`,
      },
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `"The thieves slip back into the shadows they emerged from and are gone."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I can't believe they stole from me. But at least they didn't attack me."`,
      },
    ],
    afterRefuse: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"It seems no matter where you go, thieves will always be somewhere searching for their next victim."`,
      },
    ],
  },
  SIGGURD: {
    before: [
      {
        position: "RIGHT",
        speaker: null,
        image: ``,
        text: "The shadows part as scoundrels emerge, encircling you with menacing grins and glinting blades.",
      },
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "/assets/images/dialogue/thief-dialogue.png",
        text: "Well, well, what do we have here? Hand over your valuables, and maybe we'll let you walk away with your lives.",
      },
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "/assets/images/dialogue/player-1-dialogue.png",
        text: "Hold on a second! Surely there's a better way to resolve this. Perhaps a little negotiation?",
      },
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "/assets/images/dialogue/thief-dialogue.png",
        text: "Negotiate? The only thing we're interested in is what's in your pockets. Move quickly, or regret it.",
      },
      {
        position: "LEFT",
        speaker: "Siggurd",
        image: "/assets/images/dialogue/siggurd-dialogue.png",
        text: "Fear not, Spell Scripter. We shall not be cowed by these miscreants. Let us face them with honor.",
      },
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "/assets/images/dialogue/thief-dialogue.png",
        text: "Brave words for someone about to lose everything. Now, make a choice!",
      },
    ],
    responseRefuse: [
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "/assets/images/dialogue/player-1-dialogue.png",
        text: "I refuse to give in. We'll see how your blades fare against our resolve.",
      },
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "/assets/images/dialogue/thief-dialogue.png",
        text: "So be it. You'll regret this decision soon enough.",
      },
      {
        position: "LEFT",
        speaker: "Siggurd",
        image: "/assets/images/dialogue/siggurd-dialogue.png",
        text: "Stand firm, Spell Scripter. The light will guide us through this challenge.",
      },
    ],
    afterSurrender: [
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "/assets/images/dialogue/thief-dialogue.png",
        text: "Wise choice. Enjoy the rest of your journey without our company.",
      },
      {
        position: "RIGHT",
        speaker: null,
        image: ``,
        text: "The thieves vanish into the gloom, leaving you relieved yet disheartened.",
      },
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "/assets/images/dialogue/player-1-dialogue.png",
        text: "It's disappointing to be robbed, but at least we avoided further conflict.",
      },
      {
        position: "LEFT",
        speaker: "Siggurd",
        image: "/assets/images/dialogue/siggurd-dialogue.png",
        text: "Indeed. Let us press on, and stay vigilant. There may be more dangers ahead.",
      },
    ],
    afterRefuse: [
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "/assets/images/dialogue/player-1-dialogue.png",
        text: "Thieves will always be lurking, but we stand firm. It's just another test of our resolve.",
      },
      {
        position: "LEFT",
        speaker: "Siggurd",
        image: "/assets/images/dialogue/siggurd-dialogue.png",
        text: "And we shall face it with courage and strength. The light is with us, no matter the challenge.",
      },
    ],
  },
  LIHETH: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `The flickering torchlight casts eerie shadows on the walls as a figure emerges from the darkness. The thief's eyes gleam with a predatory glint as they draw nearer.`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Well, well, what do we have here? A couple of easy marks. Stop right there."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Hand over your valuables and anything of worth. If you cooperate, I promise we'll be on our way without further trouble."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Wait a second. Let's talk this through. There must be another way."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Save your breath. Either you give us what we want, or things will get messy. I'm not in the mood for negotiations."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Do not be hasty. The light guides us, even in the face of greed. Let us find a way to resolve this without conflict."`,
      },
    ],
    responseRefuse: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I'm afraid I can't comply with your demands."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Stubborn, are we? Well, we'll just have to take what we need by force."`,
      },
    ],
    afterSurrender: [
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `/assets/images/dialogue/thief-dialogue.png`,
        text: `"Much better. We wouldn't want any unnecessary harm."`,
      },
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `"The thief collects the valuables and retreats into the shadows, leaving you and Liheth behind."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Though we've lost our belongings, we can take solace in the fact that we avoided unnecessary violence."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Indeed. Let's stay vigilant and not let this setback deter us from our mission."`,
      },
    ],
    afterRefuse: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Seems like the darkness is full of thieves. They're always lurking, waiting for their next opportunity."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"True, but remember, the light within us can ward off such threats. Let us continue forward and keep our resolve strong."`,
      },
    ],
  },
};

export const UNLOCKING_SIGGURD_DIALOGUE = {
  before: [
    {
      position: "LEFT",
      speaker: null,
      image: "",
      text: "The dimly lit catacombs echo with the clashing sounds of battle. As you turn a corner, a fierce light breaks through the shadows. There, a lone paladin fights valiantly against a swarm of skeletons. His armor gleaming despite the grime, and his sword swings with precision and strength.",
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Hyaaa!"`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"With the Light, I will strike you down!"`,
    },
    {
      position: "RIGHT",
      speaker: null,
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: "Siggurd's blade connects with a skeleton, its bones shattering into a pile of dust.",
    },
    {
      position: "LEFT",
      speaker: null,
      image: "",
      text: "Despite his skill and bravery, the skeletons continue to pour in from the dark corners of the catacombs, overwhelming him with their sheer numbers. His breath came in ragged gasps as he fought to keep them at bay.",
    },
    {
      position: "RIGHT",
      speaker: null,
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: "Siggurd notices you approaching and quickly calls out.",
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Stranger, stay back! I'll defeat them alone!"`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `"There are too many!"`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `"I won't stand by and watch. Let's drive them back together!"`,
    },
  ],
  after: [
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Judgment has been delivered."`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"You fought bravely. Who are you?"`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `"A student of the arcana. I'm here to master my skills and become a great spell scripter."`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Well met. I am Siggurd, a paladin on a quest to purify the land of evil, and these catacombs harbor much of it."`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `"We should stick together. Who knows what we may encounter down here?"`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Hmm..."`,
    },
    {
      position: "RIGHT",
      speaker: null,
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `He nods thoughtfully, considering your proposal.`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"A spell scripter would be a useful ally in these catacombs."`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"My journey will have dangers far greater than what we just overcame. Are you sure you want me to accompany you?"`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `"What's a journey without danger?"`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "/assets/images/dialogue/siggurd-dialogue.png",
      text: `"As you wish, spell scripter. Onward then."`,
    },
  ],
};

export const UNLOCKING_LIHETH_DIALOGUE = {
  before: [
    {
      position: "LEFT",
      speaker: null,
      image: "",
      text: `As you navigate through a shadowy corridor, you stumble upon a dimly lit chamber. A solitary figure stands amidst a flickering Candlelight Shrine, their face illuminated by the soft, trembling flame. The Candlelight Priestess, Liheth, is struggling to keep the shrine's light from extinguishing.`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“Hold it right there...”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“Are you here to bask in the candlelight's warmth or to snuff it out?”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `“I'm just passing through. What is this place?”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“This is a Candlelight Shrine, one of the last sanctuaries scattered throughout this catacomb.”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“The sacred flames here are meant to guard against the encroaching darkness and to guide lost souls.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `“I see... But why are you here, in the catacomb?”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“I'm Liheth, one of the few remaining Candlelight Priestesses. My duty is to keep these shrines lit.”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“But with the undead growing in number, many of the other priestesses have fled, or worse. I'm unable to tend to the other shrines.”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“I'm need to tend to the other shrines, but I don't know their locations and the undead make searching for them challenging.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `“I'll be heading further into the catacomb.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `“Come with me and we can search for them together!”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“Are you offering to help me find the other shrines?”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“I didn't expect such kindness in these dark halls.”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“Before we proceed, take a moment to rest. We'll both need our strength, and I need to finish my duties here before we depart.”`,
    },
  ],
  after: [
    {
      position: "LEFT",
      speaker: null,
      image: "",
      text: `You awaken from your rest to find Liheth still at the shrine, her eyes now less weary. The shrine's light shines brightly, casting a warm glow in the chamber. Liheth stands nearby, preparing for the next leg of your journey.`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“Ah, you're up. I've finished what I could here. When you're ready, we can continue our search for the remaining shrines.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `“I'm ready to move on. What's our next step?”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "/assets/images/dialogue/liheth-dialogue.png",
      text: `“Now that we've restored this shrine, we need to find the others hidden throughout the catacomb.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "/assets/images/dialogue/player-1-dialogue.png",
      text: `“Understood. Let's get going.”`,
    },
  ],
};

export const CANDLELIGHT_SHRINE_DIALOGUE = {
  PLAYER: {
    before: [
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"This Candlelight Shrine is a welcome sight. I feel safer already."`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"Finally, a Candlelight Shrine. I can rest and recover here."`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"I've reached a Candlelight Shrine. I should use this time to recover."`,
        },
      ],
    ],
  },
  LIHETH: {
    before: [
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"Finally, a Candlelight Shrine. We can rest and recover here."`,
        },
        {
          position: `RIGHT`,
          speaker: `Liheth`,
          image: `/assets/images/dialogue/liheth-dialogue.png`,
          text: `"The light of the shrine will protect us from the darkness outside. Let's take a moment to gather our strength."`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"This Candlelight Shrine is a welcome sight. I feel safer already."`,
        },
        {
          position: `RIGHT`,
          speaker: `Liheth`,
          image: `/assets/images/dialogue/liheth-dialogue.png`,
          text: `"Indeed. The shrine's light will keep the evil at bay. Let's rest here for a while."`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"We've reached a Candlelight Shrine. We should use this time to recover."`,
        },
        {
          position: `RIGHT`,
          speaker: `Liheth`,
          image: `/assets/images/dialogue/liheth-dialogue.png`,
          text: `"Yes, the shrine's light provides a haven from the darkness. Let's rest and prepare for the challenges ahead."`,
        },
      ],
    ],
  },
  SIGGURD: {
    before: [
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"Siggurd, we've found a Candlelight Shrine. We can rest here safely."`,
        },
        {
          position: `RIGHT`,
          speaker: `Siggurd`,
          image: `/assets/images/dialogue/siggurd-dialogue.png`,
          text: `"The light of this shrine is a beacon of hope. We should take this opportunity to regain our strength."`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"A Candlelight Shrine! We can finally catch our breath here."`,
        },
        {
          position: `RIGHT`,
          speaker: `Siggurd`,
          image: `/assets/images/dialogue/siggurd-dialogue.png`,
          text: `"Indeed. The shrine's holy light will keep us safe. Let's rest and prepare for the battles ahead."`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: `Spell Scripter`,
          image: `/assets/images/dialogue/player-1-dialogue.png`,
          text: `"We've reached a Candlelight Shrine, Siggurd. This is a good place to recover."`,
        },
        {
          position: `RIGHT`,
          speaker: `Siggurd`,
          image: `/assets/images/dialogue/siggurd-dialogue.png`,
          text: `"Yes, the light here will shield us from the catacomb's darkness. Let us rest and be ready for what lies ahead."`,
        },
      ],
    ],
  },
};

export const BONEVAULT_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `You come across a locked door standing as a silent repository of forgotten horrors. Its entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"What's the worst that could happen?"`,
      },
    ],
    response: [],
    after: [],
  },
  LIHETH: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `The air grows colder as you approach the locked door, its surface etched with runes of protection and dark enchantments. The atmosphere is thick with a sense of ancient power and hidden danger.`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"This door guards something beyond our understanding. It is protected by ancient magic, and its presence is unsettling."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Proceed with caution. The forces contained within may be beyond our current strength."`,
      },
    ],
    response: [],
    after: [],
  },
  SIGGURD: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `A heavy silence surrounds the locked door, its presence like a shadow cast over the area. The air seems to hum with a foreboding energy, warning of the dangers that lie behind it.`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"This door is a sentinel of dark secrets. It may stand as a barrier to whatever horrors lie beyond."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"We must be prepared for the worst."`,
      },
    ],
    response: [],
    after: [],
  },
};

export const GRAVESTONE_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `You come across a worn and weathered gravestone, its surface etched with faded inscriptions.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"It's unfortunate to see this gravestone in such disrepair."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I wonder who it once honored, and how long it's been left here?"`,
      },
    ],
    afterPlaceAFlower: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `You place a flower gently on the gravestone, offering a moment of respect.`,
      },
      {
        position: `RIGHT`,
        speaker: null,
        image: `/assets/images/dialogue/wandering-wisp-dialogue.png`,
        text: `Suddenly, a glowing wisp emerges from beneath the gravestone and hovers above the ground.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Ahh! Its a... ghost?"`,
      },
      {
        position: `RIGHT`,
        speaker: null,
        image: `/assets/images/dialogue/wandering-wisp-dialogue.png`,
        text: `The wisp floats playfully, then begins to drift away from the gravestone, leading deeper into the catacombs.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Hey, wait up! If you're leading the way, I'll follow you."`,
      },
    ],
    afterLeave: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"We should have paid our respects, but I suppose we'll have to move on."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I hope whoever rests here finds peace, even if we didn't honor them today."`,
      },
    ],
  },
  LIHETH: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `You come across a worn and weathered gravestone, its surface etched with faded inscriptions.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"This gravestone looks like it's been here for a long time."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I wonder who it was meant to honor, and why it's so neglected."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Gravestones like these are often overlooked, but they hold the memories of those who came before us."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"It's a reminder of our duty to respect the past and ensure their light continues to guide us."`,
      },
    ],
    afterPlaceAFlower: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `You place a flower gently on the gravestone, offering a moment of respect.`,
      },
      {
        position: `RIGHT`,
        speaker: null,
        image: `/assets/images/dialogue/wandering-wisp-dialogue.png`,
        text: `Suddenly, a glowing wisp emerges from beneath the gravestone and hovers above the ground.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Whoa! A ghost!"`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"A wisp... it seems our respect has awakened something. Follow it. It may lead us to something significant."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Alright, I'll follow. Let's see where this wisp leads us."`,
      },
    ],
    afterLeave: [
      {
        position: `LEFT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"It is disheartening to leave without offering our respects."`,
      },
      {
        position: `LEFT`,
        speaker: `Liheth`,
        image: `/assets/images/dialogue/liheth-dialogue.png`,
        text: `"The spirit of this place remains unsettled, but perhaps another time we may show our reverence."`,
      },
    ],
  },
  SIGGURD: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `You come across a worn and weathered gravestone, its surface etched with faded inscriptions.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"This gravestone looks like it's been here for a long time."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I wonder who it was meant to honor, and why it's so neglected."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Gravestones such as these bear silent witness to the sacrifices of those who came before us."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"It is our duty to remember and honor their legacy. Every soul deserves respect, even in these forsaken places."`,
      },
    ],
    afterPlaceAFlower: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `You place a flower gently on the gravestone, offering a moment of respect.`,
      },
      {
        position: `RIGHT`,
        speaker: null,
        image: `/assets/images/dialogue/wandering-wisp-dialogue.png`,
        text: `Suddenly, a glowing wisp emerges from beneath the gravestone and hovers above the ground.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Whoa! A ghost!"`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"A wisp... it seems our act of reverence has drawn its attention. Follow it; it might lead us to something of importance."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Alright, I'll follow. Let's see where this wisp leads us."`,
      },
    ],
    afterLeave: [
      {
        position: `LEFT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"We have neglected to honor the fallen. This is not how I wished to leave this place."`,
      },
      {
        position: `LEFT`,
        speaker: `Siggurd`,
        image: `/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Let us hope that our absence of tribute does not weigh too heavily upon the spirit of this grave."`,
      },
    ],
  },
};
