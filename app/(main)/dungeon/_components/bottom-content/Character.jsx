import classes from "./Character.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "../../UI/Tooltip";

import { useDispatch, useSelector } from "react-redux";

import { combatActions } from "../../../store/combat-slice";
import { logActions } from "../../../store/log-slice";

import { targetType } from "../../../util/targeting";
import { setTarget } from "../../../store/combat-actions";
import updateStatTotals from "../../../store/stats-actions";

import { useEffect, useState } from "react";
import playSoundEffect from "../../../util/audio-util";
import DamageDisplay from "./DamageDisplay";

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

  // Play spawn audio
  useEffect(() => {
    if (character.identifier === "ENEMY" && character.audio) {
      playSoundEffect(...character.audio.spawn);

      // dispatch(
      //   logActions.updateLogs({
      //     change: "ADD",
      //     text: `${character.name} joins combat!`,
      //   })
      // );
    }
  }, []);

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
      className={`${classes.container} ${
        character.identifier === "ENEMY"
          ? classes.enemyContainer
          : classes.heroContainer
      }`}
    >
      <p
        className={`${classes.name} ${
          character.identifier === "ENEMY" ? classes.enemyName : ""
        }`}
      >
        {character.name}
      </p>

      <div className={classes.health}>
        <div
          className={`${classes.info} ${
            character.identifier === "ENEMY"
              ? classes.enemyInfo
              : classes.heroInfo
          }`}
        >
          <p>
            <FontAwesomeIcon icon={faHeart} /> {character.currentHealth}/
            {character.stats.strength.maxHealth}
          </p>
        </div>
        <progress
          max={character.stats.strength.maxHealth}
          value={character.currentHealth}
        >
          Health Bar
        </progress>
      </div>
      <div
        className={`${classes.statusEffects} ${
          character.identifier !== "ENEMY" ? classes.heroStatusEffects : ""
        }`}
      >
        {character.statusEffects.map((effect) => {
          if (effect.display) {
            const isCharacterEnemy = character.identifier === "ENEMY";
            // Duration logic
            let duration;
            if (effect.durationType === "ROUND") {
              duration = `Duration: ${effect.duration} ${
                effect.duration > 1 ? "rounds" : "round"
              }`;
            } else if (effect.durationType === "ROOM") {
              duration = `Duration: ${effect.duration} ${
                effect.duration > 1 ? "rooms" : "room"
              }`;
            }

            // Stack logic
            let stack;
            if ("stack" in effect) {
              stack = true;
            } else {
              stack = false;
            }

            return (
              <Tooltip
                key={effect.name}
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
                position={"effect"}
              >
                <div
                  // src={`url(${effect.image})`}
                  className={classes.effect}
                  style={{
                    backgroundImage: `url(${effect.image})`,
                  }}
                ></div>
                {stack && effect.stack > 1 && (
                  <p className={classes["effect-stack"]}>x{effect.stack}</p>
                )}
              </Tooltip>
            );
          }
        })}
      </div>
    </div>
  );

  const image = (
    <div
      className={`${classes.image} ${
        isHighlighted ? classes.highlighted : ""
      } ${isCharacterTurn === character.id ? classes.turn : ""}`}
    >
      <img src={`${character.image}.png`} alt={character.name} />
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
      className={`${classes.character} ${
        character.identifier === "ENEMY" ? classes.enemy : ""
      } ${isFadingOut ? classes["character-fading"] : ""}`}
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
