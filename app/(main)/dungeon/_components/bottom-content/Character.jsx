import classes from "./Character.module.css";
import { Heart } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  const container = (
    <div
      className={cn(
        "relative flex items-center overflow-visible box-border transition-opacity duration-1000 ease-in",
        character.identifier === "ENEMY"
          ? "absolute top-1/3 right-20 transform -translate-x-1/2 overflow-hidden opacity-0 w-0"
          : "absolute top-1/3 left-20 transform -translate-x-1/2 overflow-hidden opacity-0 w-0"
      )}
    >
      <p
        className={`text-shadow-md text-sm font-medium ${
          character.identifier === "ENEMY" ? "text-right" : ""
        }`}
      >
        {character.name}
      </p>

      <div className="relative flex items-center overflow-visible box-border transition-opacity duration-1000">
        {/* Character container */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 overflow-hidden opacity-0 transition-all duration-300 ${
            character.identifier === "ENEMY" ? "right-20" : "left-20"
          } group-hover:w-48 group-hover:opacity-100`}
        >
          {/* Status effects container */}
          <div className="flex gap-1 flex-wrap justify-center opacity-0 mt-[-1.8rem] transition-opacity duration-1000 group-hover:opacity-100">
            {character.statusEffects.map((effect) => (
              <div
                key={effect.id}
                className="h-7 w-7 border-2 border-primary rounded bg-cover bg-center cursor-pointer hover:scale-110 hover:border-white transition-transform"
                style={{ backgroundImage: `url(${effect.imageUrl})` }}
              >
                {effect.stack > 1 && (
                  <span className="absolute bottom-0 right-0 text-xs">
                    {effect.stack}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Name */}
          <p className="text-sm text-shadow-md">{character.name}</p>

          {/* Info */}
          <div
            className={`flex gap-4 mb-[-0.8rem] ${
              character.identifier === "ENEMY" ? "justify-start" : "justify-end"
            }`}
          >
            <p>
              <Heart /> {character.currentHealth}/
              {character.stats.strength.maxHealth}
            </p>
          </div>

          {/* Health Bar */}
          <progress
            className="w-full h-1 appearance-none bg-gray-400 border border-red-700"
            max={character.stats.strength.maxHealth}
            value={character.currentHealth}
          >
            Health Bar
          </progress>
        </div>
      </div>

      {/* 
      // 
      // 
       */}
      <div
        className={`flex flex-wrap justify-center gap-1 ${
          character.identifier !== "ENEMY" ? "mt-[-1.8rem]" : ""
        }`}
      >
        {character.statusEffects.map((effect) => {
          if (effect.display) {
            const isCharacterEnemy = character.identifier === "ENEMY";

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
      className={`relative ${isHighlighted ? "ring-4 ring-yellow-500" : ""} ${
        isCharacterTurn === character.id ? "animate-pulse" : ""
      }`}
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
      className={`cursor-pointer transition-opacity duration-500 ${
        character.identifier === "ENEMY" ? "text-red-500" : ""
      } ${isFadingOut ? "opacity-50" : "opacity-100"}`}
      onClick={handleSetTarget}
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
