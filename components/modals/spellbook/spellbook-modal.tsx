"use client";

import { CircleAlert } from "lucide-react";

import { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RotateCcw } from "lucide-react";
import Skill from "./skill";
import School from "./school";
import { spellbookActions } from "@/store/spellbook-slice";
import { playerActions } from "@/store/player-slice";

import playSoundEffect from "@/util/audio-util";
import { RootState } from "@/store";

import { Button } from "@/components/ui/button";

export default function SpellbookModal() {
  const [isHovered, setIsHovered] = useState(false);
  const [school, setSchool] = useState("evocation");
  const dispatch = useDispatch();

  // Retrieve state
  const player = useSelector((state: RootState) => state.player);
  const spellbook = useSelector((state: RootState) => state.spellbook);

  // Calculate pointsExpended using useMemo for performance
  const pointsExpended = useMemo(
    () => calculateSchoolPoints(spellbook[school]),
    [school, spellbook]
  );

  // Callback to handle school change
  const handleSchoolChange = useCallback((name) => {
    setSchool(name);
  }, []);

  // Callback to handle reset button
  const handleResetButton = useCallback(() => {
    playSoundEffect(false, "misc", "shimmerCrysta", 0.3);
    const totalPoints = calculateSchoolPoints(spellbook[school]);
    dispatch(spellbookActions.resetSkillTree({ school, totalPoints }));
    dispatch(
      playerActions.changeMasteryPoints({
        change: "INCREASE",
        quantity: totalPoints,
      })
    );
    dispatch(playerActions.changeSpellList({ change: "RESET", school }));
  }, [dispatch, spellbook, school]);

  // School data
  const schools = useMemo(
    () => [
      { name: "Evocation", levelRequired: 1 },
      { name: "Abjuration", levelRequired: 2 },
      { name: "Conjuration", levelRequired: 3 },
      { name: "Restoration", levelRequired: 4 },
      { name: "Enchantment", levelRequired: 5 },
      { name: "Necromancy", levelRequired: 6 },
    ],
    []
  );

  // Expertise levels
  const expertiseLevels = useMemo(
    () => [
      { name: "Expert", threshold: 15, maxPoints: 16 },
      { name: "Adept", threshold: 8, maxPoints: 15 },
      { name: "Apprentice", threshold: 3, maxPoints: 8 },
      { name: "Novice", threshold: 0, maxPoints: 3 },
    ],
    []
  );

  return (
    <div className="h-[100%] w-[100%] min-w-[50rem] bg-[var(--background)] flex flex-col items-center border-2 border-[var(--secondary)] p-4 overflow-visible">
      <h1 className="text-center p-0 border-b-2 border-[var(--secondary)] w-[30%]">
        Spellbook
      </h1>
      <div className="flex p-4 h-full w-full">
        <div className="relative mr-8 ml-0 p-0 list-none w-[30%]">
          <h3 className="text-center text-[3vh] mb-4 border-b-2 border-[var(--secondary)]">
            Schools of Magic
          </h3>
          <ol className="flex flex-col justify-start ml-0 p-0 list-none w-full">
            {schools.map((schoolData) =>
              player.level >= schoolData.levelRequired ? (
                <School
                  key={schoolData.name}
                  text={schoolData.name}
                  active={school === schoolData.name.toLowerCase()}
                  onChangeSchool={() =>
                    handleSchoolChange(schoolData.name.toLowerCase())
                  }
                />
              ) : (
                // TO DO: Update & Style button for locked school
                <School key={schoolData.name} text={"?"} />
              )
            )}
          </ol>
          <div className="absolute bottom-[0.5%] w-full flex flex-col gap-4 justify-between items-center">
            <h3 className="m-0 text-lg">Mastery Points</h3>
            <div
              className={`flex justify-center items-center gap-4 text-lg ${
                player.masteryPoints > 0
                  ? "text-[var(--accent)]"
                  : "text-[var(--text)]"
              }`}
            >
              <RotateCcw />
              <p>{player.masteryPoints}</p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleResetButton}
              className="w-[80%] h-[5rem] mb-2 transition-transform duration-300 hover:scale-95"
              disabled={pointsExpended === 0}
            >
              Reset School Mastery
            </Button>
          </div>
        </div>

        <div className=" relative flex flex-col justify-between items-center w-[90%] gap-0.5 bg-[var(--background)] rounded-md">
          {/* TIP */}
          <CircleAlert
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="absolute right-2 top-2 text-secondary z-30"
          />
          {expertiseLevels.map((level) => {
            const expertise = level.name;

            return (
              <div
                key={level.name}
                className={`relative h-[25%] w-full bg-[var(--primary)] rounded-md ${
                  pointsExpended >= level.threshold ? "" : "bg-opacity-20"
                }`}
              >
                {pointsExpended >= level.threshold && (
                  <h3 className="absolute top-[1.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
                    {level.name}
                  </h3>
                )}
                {pointsExpended >= level.threshold && (
                  <h4 className="absolute top-[1.5rem] right-0 transform -translate-x-1/2 -translate-y-1/2 text-base">
                    {pointsExpended} / {level.maxPoints}
                  </h4>
                )}
                <ul className="m-0 p-0 h-full list-none flex justify-around items-center">
                  {spellbook[school][level.name.toLowerCase()].map((skill) => {
                    const activeExpertise =
                      skill.points < skill.max &&
                      pointsExpended >= level.threshold &&
                      pointsExpended < level.maxPoints;

                    return (
                      <Skill
                        key={skill.name}
                        skill={skill}
                        school={school}
                        expertise={expertise}
                        activeExpertise={activeExpertise}
                      />
                    );
                  })}
                </ul>
              </div>
            );
          })}

          {/* TIP */}
          <div
            className={`absolute h-full inset-0 flex items-center justify-center transition-opacity duration-500 ${
              isHovered
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-background opacity-85 rounded-md transition-opacity duration-500" />
            <ul className="relative flex h-full flex-col justify-around text-[1.5rem] z-20 text-center text-white p-2 transition-opacity duration-500">
              <li>
                Expend Mastery Points to acquire new spells and powers from your
                spellbook.
              </li>
              <li>
                Unlock greater expertise by expending more Mastery Points.
              </li>
              <li>
                Reset your Mastery Points to try different schools of magic.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function calculateSchoolPoints(school) {
  let totalPoints = 0;

  for (let expertise in school) {
    const skill = school[expertise];
    skill.forEach((skill) => {
      totalPoints += skill.points;
    });
  }

  return totalPoints;
}
