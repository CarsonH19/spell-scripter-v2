"use client";

import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "@/store/player-slice";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { spellbookActions } from "../../../store/spellbook-slice";

import spellDescriptions from "@/util/spell-descriptions";
import { getSpell } from "@/util/spell-util";

import { useState } from "react";
import { RootState } from "@/store";

import playSoundEffect from "@/util/audio-util";

export default function Skill({ school, skill, expertise, activeExpertise }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const spellPower = useSelector(
    (state: RootState) => state.player.stats.arcana.spellPower
  );

  const activeSkill = skill.points > 0;
  const isSpell = skill.type === "Spell";
  let spellObject;
  let skillDescription;
  let descriptionFunction;

  if (isSpell) {
    spellObject = getSpell(skill.name);
    const snakeCaseSpellName = toSnakeCase(skill.name);
    descriptionFunction = spellDescriptions[snakeCaseSpellName];
    skillDescription = descriptionFunction(spellPower);
  } else {
    let descriptionIndex;
    if (skill.points < skill.max) {
      descriptionIndex = skill.points;
    } else {
      descriptionIndex = skill.max - 1;
    }
    skillDescription = skill.description[descriptionIndex];
  }

  console.log(expertise);

  const handleSkillClick = (school, name) => {
    // Check if point is available and add point to skill
    if (player.masteryPoints > 0) {
      const added = dispatch(spellbookActions.expendPoint({ school, name }));

      // If point was added successfully deduct the point from the player-slice
      if (added) {
        dispatch(
          playerActions.changeMasteryPoints({ change: "DECREASE", quantity: 1 })
        );

        if (isSpell) {
          dispatch(
            playerActions.changeSpellList({
              change: "ADD",
              spellName: skill.name,
            })
          );
        }
      }

      playSoundEffect(true, "skill");
    }
  };

  return (
    <div key={skill.name}>
      {(activeExpertise || activeSkill) && (
        <Tooltip>
          <TooltipTrigger>
            <div
              className="h-16 w-16 bg-secondary list-none cursor-pointer rounded-md border-2 border-secondary hover:scale-110 hover:border-text transition-transform bg-center bg-no-repeat bg-cover flex justify-end items-end pr-1"
              onClick={
                activeExpertise
                  ? () => handleSkillClick(school, skill.name)
                  : undefined
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundImage: `url(${skill.image})`,
              }}
            ></div>
          </TooltipTrigger>
          <TooltipContent
            key={skill.name}
            type={"SKILL"}
            title={skill.name}
            detailOne={skill.type}
            detailTwo={skillDescription}
            {...(isSpell && spellObject
              ? { detailThree: `Mana Cost: ${spellObject.manaCost}` }
              : {})}
            position={
              expertise === "Expert" || expertise === "Adept" ? "BOTTOM" : "TOP"
            }
          />
        </Tooltip>
      )}
      {!activeExpertise && !activeSkill && (
        <div
          onClick={
            activeExpertise
              ? () => handleSkillClick(school, skill.name)
              : undefined
          }
          className="h-16 w-16 bg-cover bg-center rounded-lg pointer-events-none border-2 border-secondary opacity-40"
          style={{
            backgroundImage: `url(${skill.image})`,
          }}
        />
      )}
      <p
        className={`text-sm text-center ${
          activeSkill ? "opacity-100" : "opacity-40"
        }`}
      >
        {skill.points} / {skill.max}
      </p>
    </div>
  );
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
