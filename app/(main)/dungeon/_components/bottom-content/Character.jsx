import { Heart } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Progress } from "@/components/ui/progress";

import { useDispatch, useSelector } from "react-redux";

import { combatActions } from "@/store/combat-slice";
// import { logActions } from "../../../store/log-slice";

import { targetType } from "@/util/targeting";
import updateStatTotals from "@/store/stats-actions";
import { setTarget } from "@/store/combat-actions";

import { useEffect, useState } from "react";
// import playSoundEffect from "../../../util/audio-util";
import DamageDisplay from "./DamageDisplay";
import { cn } from "@/util/utils";

export default function Character({ character }) {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.combat.order);
  const characterIndex = order.findIndex((char) => char.id === character.id);
  character = order[characterIndex];
  const isHighlighted = useSelector(
    (state) => state.combat.highlightedCharacter === character.id
  );

  const isCharacterTurn = useSelector((state) => state.combat.isCharacterTurn);

  const [isFadingOut, setIsFadingOut] = useState(false);

  // // Play spawn audio
  // useEffect(() => {
  //   if (character.identifier === "ENEMY" && character.audio) {
  //     playSoundEffect(...character.audio.spawn);

  //     // dispatch(
  //     //   logActions.updateLogs({
  //     //     change: "ADD",
  //     //     text: `${character.name} joins combat!`,
  //     //   })
  //     // );
  //   }
  // }, []);

  useEffect(() => {
    updateStatTotals(dispatch, character.id);
  }, [character]);

  // Handle level up
  useEffect(() => {
    updateStatTotals(dispatch, character.id);
  }, [character.level]);

  const handleMouseEnter = () => {
    dispatch(combatActions.highlightCharacter(character.id));
  };

  const handleMouseLeave = () => {
    dispatch(combatActions.clearHighlight());
  };

  const handleSetTarget = () => {
    if (
      targetType === "ALLIES" &&
      (character.identifier === "HERO" || character.identifier === "PLAYER")
    ) {
      setTarget(character);
    }

    if (targetType === "ENEMIES" && character.identifier === "ENEMY") {
      setTarget(character);
    }
  };

  // Trigger fade out and removal when health reaches 0
  useEffect(() => {
    if (character.currentHealth <= 0) {
      if (character.id !== "Player") {
        removeCharacterHandler(dispatch, character);
      }

      setTimeout(() => {
        // Death Audio
        if (character.audio) playSoundEffect(...character.audio.death);
        setIsFadingOut(true);
      }, 1000);
    }
  }, [character.currentHealth, dispatch, character.id]);

  // Container opens when a character is highlighted to show info
  const container = (
    <div
      className={cn(
        "flex items-center flex-col overflow-visible box-border transition-opacity duration-300 ease-in-out h-[3rem] w-[90%] gap-1",
        character.identifier === "ENEMY"
          ? "absolute top-[-15%] right-1/2 transform -translate-x-1/2 overflow-hidden opacity-0 w-0"
          : "absolute top-[-15%] left-1/2 transform -translate-x-1/2  overflow-hidden opacity-0 w-0",
        isHighlighted && "opacity-100 w-[90%]"
      )}
    >
      {/* Name & Health Info*/}
      <div className="relative flex justify-between transition-opacity duration-1000 w-full h-auto">
        <p className="text-sm text-shadow-md">{character.name}</p>
        <div
          className={`flex items-center gap-1 ${
            character.identifier === "ENEMY" ? "justify-start" : "justify-end"
          }`}
        >
          <Heart size={"1rem"} className="text-red-500" />
          <p className="text-sm">
            <span>{character.currentHealth}</span>/
            <span>{character.stats.strength.maxHealth}</span>
          </p>
        </div>
      </div>

      {/* Health Bar */}
      <Progress
        className="relative mt-[-0.2rem] w-full h-[0.4rem] rounded-md overflow-hidden shadow-inner"
        max={character.stats.strength.maxHealth}
        value={character.currentHealth}
      >
        {/* <div
          className="absolute top-0 left-0 h-full bg-[#ad0505] transition-all duration-100"
          style={{
            width: `${
              (character.currentHealth / character.stats.strength.maxHealth) *
              100
            }%`,
          }}
        ></div> */}
      </Progress>

      {/* Status Effects */}
      <div
        className={`flex justify-center gap-1 h-auto w-full border border-green-500 flex-wrap ${
          character.identifier !== "ENEMY" ? "" : ""
        }`}
      >
        {character.statusEffects.map((effect) => {
          if (effect.display) {
            // const isCharacterEnemy = character.identifier === "ENEMY";

            // Duration logic
            const duration =
              effect.durationType === "ROUND"
                ? `Duration: ${effect.duration} ${
                    effect.duration > 1 ? "rounds" : "round"
                  }`
                : effect.durationType === "ROOM"
                ? `Duration: ${effect.duration} ${
                    effect.duration > 1 ? "rooms" : "room"
                  }`
                : "";

            // Stack logic
            const stack = "stack" in effect;

            return (
              <Tooltip key={effect.name}>
                <TooltipTrigger>
                  <div
                    className="relative h-7 w-7 bg-cover bg-center border-2 border-primary rounded cursor-pointer transition-transform hover:scale-110 hover:border-white"
                    style={{ backgroundImage: `url(${effect.image})` }}
                  >
                    {stack && effect.stack > 1 && (
                      <p className="absolute bottom-0 right-0 text-xs">
                        x{effect.stack}
                      </p>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  title={effect.name}
                  text={effect.description}
                  detailOne={duration}
                  detailTwo={
                    effect.effect
                      ? effect.effect.map((line, index) => (
                          <span key={index}>{line}</span>
                        ))
                      : null
                  }
                  position="effect"
                />
              </Tooltip>
            );
          }
        })}
      </div>
    </div>
  );

  const image = (
    <div
      className={cn(
        "relative w-auto h-[65vh] mb-0 flex justify-start items-end rounded-lg overflow-visible box-border opacity-90",
        isHighlighted && "opacity-100",
        isCharacterTurn === character.id && "opacity-100"
      )}
    >
      <img
        src={`${character.image}.png`}
        alt={character.name}
        className="w-full h-full object-cover z-10"
      />
      <DamageDisplay character={character} />
    </div>
  );

  let content;
  if (character.identifier === "HERO" || character.identifier === "PLAYER") {
    content = (
      <>
        {image}
        {container}
      </>
    );
  } else if (character.identifier === "ENEMY") {
    content = (
      <>
        {container}
        {image}
      </>
    );
  }

  return (
    <div
      className={`relative cursor-pointer transition-opacity duration-500 ${
        character.identifier === "ENEMY" ? "text-red-500" : ""
      } ${isFadingOut ? "opacity-50" : "opacity-100"}`}
      onClick={handleSetTarget}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
}

async function removeCharacterHandler(dispatch, character) {
  setTimeout(() => {
    dispatch(combatActions.removeCharacter({ character }));
  }, 2000); // Duration of the fade-out animation
}