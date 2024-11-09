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
// import playSoundEffect from "../../../util/audio-util";

export default function Skill({ school, skill, activeExpertise }) {
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

      // playSoundEffect(true, "skill");
    }
  };

  return (
    <div key={skill.name}>
      {(activeExpertise || activeSkill) && (
        <Tooltip>
          <TooltipTrigger>
            <div className="shadow-inner">
              <div
                onClick={
                  activeExpertise
                    ? () => handleSkillClick(school, skill.name)
                    : undefined
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="h-16 w-16 rounded-lg bg-cover bg-center border transition-transform"
                style={{
                  backgroundImage: `url(${skill.image})`,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: isHovered
                    ? "var(--text)"
                    : activeExpertise
                    ? skill.points === skill.max
                      ? "var(--text)"
                      : "var(--secondary)"
                    : skill.points === skill.max
                    ? "var(--text)"
                    : "var(--secondary)",
                  cursor: skill.points < skill.max ? "pointer" : "",
                  pointerEvents: activeExpertise
                    ? skill.points === skill.max
                      ? "none"
                      : "auto"
                    : "none",
                  boxShadow: activeSkill
                    ? "inset 0px 0px 0px rgba(0, 0, 0, 4.8)"
                    : "",
                }}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent
            key={skill.name}
            title={skill.name}
            text={skill.type}
            detailOne={skillDescription}
            {...(isSpell && spellObject
              ? { detailTwo: `Mana Cost: ${spellObject.manaCost}` }
              : {})}
            position="skill"
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
          className="h-16 w-16 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${skill.image})`,
            pointerEvents: "none",
          }}
        />
      )}
      <p className={`text-lg ${activeSkill ? "opacity-100" : "opacity-40"}`}>
        {skill.points} / {skill.max}
      </p>
    </div>
  );
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
