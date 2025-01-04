"use client";

import store from "@/store/index";

import { uiActions } from "../../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { combatActions } from "../../../store/combat-slice";
import Link from "next/link";

import updateStatTotals from "../../../store/stats-actions";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

import Attributes from "../attribute/Attributes";
// import AttunedItem from "./attuned-item";
import AttunedItem from "../inventory/attuned-item";

import { Repeat } from "lucide-react";

import { getSpell } from "../../../util/spell-util";
import spellDescriptions from "../../../util/spell-descriptions";
import changeStatusEffect from "../../../store/status-effect-actions";
import { checkSkillPoints } from "../../../util/spellbook-util";

import { createArcaneShield } from "@/util/skills";
import { openModal } from "../../../store/ui-actions";

import { backgroundMusic, playMusic } from "@/data/audio/music";
import playSoundEffect from "@/util/audio-util";

export default function ConfirmationModal() {
  const dispatch = useDispatch();
  const spellList = useSelector((state) => state.player.spellList);
  const attunedItems = useSelector(
    (state) => state.player.inventory.attunedItems
  );
  const heroes = useSelector((state) => state.hero.party);
  const player = useSelector((state) => state.player);
  const characters = [...heroes, player];

  const handleConfirmation = () => {
    enterDungeonTransition(dispatch, characters);
  };

  const handleClickChange = (modal) => {
    openModal(dispatch, modal);
  };

  return (
    <div className="relative bg-[var(--background)] h-full min-h-[40rem] w-full flex flex-col justify-between items-center border-4 border-[var(--secondary)] p-4">
      <div className="flex flex-row w-full min-h-[40rem] min-w-[90rem] h-[90%] p-4 gap-2 overflow-visible">
        {/* Heroes Section */}
        <div className="relative h-full w-2/5 flex flex-col justify-between items-center bg-[var(--primary)] rounded-lg">
          <h3 className="text-center text-xl my-4 w-48 border-b border-[var(--text)]">
            Party
          </h3>
          <ul className="w-full h-4/5 flex justify-center overflow-visible">
            {characters.map((hero) => (
              <div key={hero.name} className="w-1/3">
                <img
                  className="w-full h-full object-cover"
                  src={`${hero.image}.png`}
                  alt={hero.name}
                />
                <p className="absolute top-[-1rem] left-1/2 transform -translate-x-1/2 w-32 text-center text-sm opacity-0">
                  {hero.name}
                </p>
              </div>
            ))}
          </ul>
          <Repeat
            className="absolute left-10 top-2 h-6 text-[var(--accent)] my-4 hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => handleClickChange("inventoryModal")}
          />
        </div>

        {/* Player Attributes Section */}
        <div className="relative h-full w-1/5 flex flex-col justify-start items-center gap-2 bg-[var(--primary)] rounded-lg">
          <Attributes />
        </div>

        {/* Spells and Attuned Items Section */}
        <div className="flex flex-col justify-between items-center w-2/5 h-full bg-[var(--primary)] rounded-lg">
          {/* Spell List */}
          <div className="relative flex flex-col justify-start items-center w-full h-2/3">
            <h3 className="text-center text-xl my-4 w-48 border-b border-[var(--text)]">
              Spell List
            </h3>
            <ul className="flex justify-center items-start flex-wrap  h-full w-[90%] p-2 gap-2 overflow-y-auto rounded-lg bg-opacity-30 bg-black">
              {spellList.map((spell, index) => {
                const spellObject = getSpell(spell);
                const snakeCaseSpellName = toSnakeCase(spell);
                const descriptionFunction =
                  spellDescriptions[snakeCaseSpellName];
                const spellDescription = descriptionFunction(
                  player.stats.arcana.spellPower
                );

                return (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      <div
                        className="aspect-square h-16 w-16 cursor-pointer rounded-lg bg-cover bg-center border-2 border-[var(--secondary)] bg-[var(--primary)] hover:scale-110 transition-transform duration-300"
                        style={{ backgroundImage: `url(${spellObject.image})` }}
                      />
                    </TooltipTrigger>
                    <TooltipContent
                      key={spellObject.name}
                      title={spellObject.name}
                      text={spellObject.school}
                      detailOne={spellDescription}
                      detailTwo={`Mana Cost: ${spellObject.manaCost}`}
                      position="right-middle"
                    />
                  </Tooltip>
                );
              })}
              {spellList.length === 0 && <p>No spells prepared!</p>}
            </ul>
            <Repeat
              className="absolute left-10 top-2 h-6 text-[var(--accent)] my-4 hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => handleClickChange("inventoryModal")}
            />
          </div>

          {/* Attuned Items */}
          <div className="relative flex flex-col justify-start items-center w-full h-1/3">
            <h3 className="text-center text-xl my-4 w-48 border-b border-[var(--text)]">
              Attuned Items
            </h3>
            <ul className="flex justify-center items-start flex-wrap w-full max-w-[40rem] h-full p-2 gap-12">
              {Array.from({ length: 5 }).map((_, index) =>
                attunedItems[index] ? (
                  <AttunedItem key={index} item={attunedItems[index]} />
                ) : (
                  <div
                    key={index}
                    className="aspect-square w-16 h-16 border-2 border-secondary cursor-auto rounded-lg bg-opacity-30 bg-black pointer-events-none"
                  />
                )
              )}
            </ul>
            <Repeat
              className="absolute left-10 top-2 h-6 text-[var(--accent)] my-4 hover:scale-110 transition-transform duration-300 cursor-pointer"
              onClick={() => handleClickChange("inventoryModal")}
            />
          </div>
        </div>
      </div>

      {/* Ready Button */}
      <div className="h-10 flex justify-center items-center">
        <Link href="/dungeon">
          <Button
            size="lg"
            variant="secondary"
            className="mb-10 w-[20rem]"
            onClick={handleConfirmation}
          >
            Ready
          </Button>
        </Link>
      </div>
    </div>
  );
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
async function enterDungeonTransition(dispatch, characters) {
  // Fade transition
  await dispatch(uiActions.updateFade({ change: "CALL" }));
  playSoundEffect(false, "ui", "GUIMenuButton");
  playMusic(backgroundMusic.mazeHeist);
  await delay(3000);

  // Ensure event options are not visible
  dispatch(
    uiActions.changeUi({ element: "eventOptionsAreVisible", visible: false })
  );
  // Ensure continue arrow is not visible
  dispatch(
    uiActions.changeUi({ element: "continueIsVisible", visible: false })
  );
  // Ensure modals are not visible
  dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));
  // Change from dashboard to game window
  dispatch(
    uiActions.changeUi({ element: "dashboardIsVisible", visible: false })
  );
  dispatch(
    uiActions.changeUi({ element: "gameWindowIsVisible", visible: true })
  );

  // Add the characters array to the combat-slice order
  dispatch(combatActions.setInitiative({ characters }));

  // Update all characters stats
  for (let i = 0; i < characters.length; i++) {
    updateStatTotals(dispatch, characters[i].id);
  }

  // Max Health
  characters.forEach((character) => {
    dispatch(
      combatActions.updateHealth({
        id: character.id,
        change: "HEAL",
        value: 999,
      })
    );
  });

  // Full Mana
  dispatch(
    combatActions.updateMana({
      change: "ADD",
      value: 999,
    })
  );

  //  Shield - Add status effect to player
  const arcaneShield = checkSkillPoints("Arcane Shield");
  if (arcaneShield) {
    const statusEffect = createArcaneShield();
    const index = characters.findIndex((char) => char.id === "Player");
    changeStatusEffect(dispatch, characters[index], "ADD", statusEffect);
  }

  await dispatch(uiActions.updateFade({ change: "CLEAR" }));

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
