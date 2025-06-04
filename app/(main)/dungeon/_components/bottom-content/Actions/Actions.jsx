"use client";
// import { setPlayerAction } from "../../../../store/combat-actions";
import { setPlayerAction } from "@/store/combat-actions";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "@/store/ui-slice";

import { setSelect } from "@/store/combat-actions";

// import Item from "../../../Modals/Inventory/Item";
import Item from "../../../../../../components/modals/inventory/item";
import castSpell, {
  checkForSummonInOrder,
} from "../../../../../../util/cast-spell";
import { getSpell } from "../../../../../../util/spell-util";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../../../../components/ui/tooltip";

import spellDescriptions from "../../../../../../util/spell-descriptions";
import { useEffect, useState } from "react";

import { X, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Actions() {
  const dispatch = useDispatch();
  // Dialogue - is dialogue.active the action are not rendered
  const isDialogue = useSelector((state) => state.dialogue.active);
  // isQTE - is the player in a QTE
  const isModal = useSelector((state) => state.ui.modalIsVisible);

  // Player
  const player = findCharacterById();
  const party = useSelector((state) => state.combat.order).filter(
    (char) => char.identifier !== "ENEMY"
  );
  // Event
  const event = useSelector((state) => state.dungeon.event);
  const entrance = event && event.type === "ENTRANCE";
  //Spells
  const spellUI = useSelector((state) => state.ui.spellListIsVisible);
  const spellList = useSelector((state) => state.player.spellList);
  // Items
  const itemUI = useSelector((state) => state.ui.itemListIsVisible);

  // Used to determine if buttons should be disabled or not
  const playerID = useSelector((state) => state.player.id);
  const isCharacterTurn = useSelector(
    (state) => state.combat.isCharacterTurn === playerID
  );
  const isDanger = useSelector((state) => state.dungeon.danger);
  // Disable during combat & not player's turn and during events
  const isDisabled = (!isCharacterTurn && isDanger) || event;

  const [search, setSearch] = useState("BEFORE COMBAT");

  useEffect(() => {
    setSearch(isDanger ? "DURING COMBAT" : "BEFORE COMBAT");
  }, [isDanger]);

  const handlePlayerChoice = (action) => {
    setPlayerAction(action);

    if (action === "CAST SPELL") {
      dispatch(
        uiActions.changeUi({ element: "spellListIsVisible", visible: true })
      );
    }

    if (action === "USE ITEM") {
      dispatch(
        uiActions.changeUi({ element: "itemListIsVisible", visible: true })
      );
    }
  };

  const handleSelectChoice = (choice, modal) => {
    setSelect(choice);

    // Call castSpell here when not in combat
    if (modal === "spellListIsVisible" && !isDanger) {
      castSpell(dispatch, choice);
    }

    // NOTE: item logic is handled in Item component

    // Close spell/item select window
    dispatch(uiActions.changeUi({ element: modal, visible: false }));
  };

  const handleCloseList = (modal) => {
    setSelect(null);
    dispatch(uiActions.changeUi({ element: modal, visible: false }));
  };

  let content;

  if (spellUI) {
    const playerMana = player.currentMana;

    content = (
      <div className="relative w-1/5 h-[70%] p-4 mx-4 overflow-visible bg-black/50 rounded-lg z-5 flex flex-col items-center">
        {/* Mana */}
        <div className="w-full flex flex-col items-center mb-1 text-white">
          <span className="w-full flex justify-start items-center gap-2 text-sm text-shadow">
            <Sparkles className="mb-1" />
            {player.currentMana} / {player.stats.arcana.maxMana}
          </span>
          <progress
            max={player.stats.arcana.maxMana}
            value={player.currentMana}
            className="w-full h-2 appearance-none border border-primary rounded bg-secondary shadow-inner"
            style={{
              "--tw-border-color": "var(--primary)",
              "--tw-bg-color": "var(--secondary)",
            }}
          ></progress>
        </div>
        <h3 className="w-full border-b border-white text-center text-shadow">
          Spell List
        </h3>
        <ul className="w-full flex flex-wrap justify-center items-center gap-2 p-2 overflow-y-auto">
          {spellList.map((spell) => {
            const spellObject = getSpell(spell);
            const snakeCaseSpellName = toSnakeCase(spell);
            const descriptionFunction = spellDescriptions[snakeCaseSpellName];
            const spellDescription = descriptionFunction(
              player.stats.arcana.spellPower
            );

            return (
              <Tooltip key={spellObject.name}>
                <TooltipTrigger>
                  <div
                    key={spellObject.name}
                    onClick={() =>
                      handleSelectChoice(spellObject, "spellListIsVisible")
                    }
                    className={`w-16 h-16 bg-center bg-no-repeat bg-cover rounded-lg border-2 ${
                      playerMana >= spellObject.manaCost
                        ? "border-primary opacity-100 cursor-pointer"
                        : "border-gray-600 opacity-60 pointer-events-none"
                    }`}
                    style={{
                      backgroundImage: `url(${spellObject.image})`,
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent
                  key={spellObject.name}
                  type={"SKILL"}
                  title={spellObject.name}
                  text={spellObject.school}
                  detailOne={spellDescription}
                  detailTwo={`Mana Cost: ${spellObject.manaCost}`}
                  position="TOP"
                />
              </Tooltip>
            );
          })}
        </ul>
        <X
          onClick={() => handleCloseList("spellListIsVisible")}
          className="absolute top-2 right-2 text-xl text-white hover:scale-110 cursor-pointer"
        />
      </div>
    );
  } else if (itemUI) {
    let counters = [];
    const itemList = player.inventory.consumables;

    itemList.map((item) => {
      let existingItem = counters.find((obj) => obj.name === item.name);
      if (existingItem) {
        existingItem.counter++;
      } else {
        counters.push({ ...item, counter: 1 });
      }
    });

    content = (
      <div className="relative w-1/5 h-[70%] p-4 mx-4 overflow-auto bg-black/50 rounded-lg z-5 flex flex-col items-center">
        <h3 className="w-full border-b border-white text-center text-shadow">
          Item List
        </h3>
        <ul className="w-full flex flex-wrap justify-center items-center gap-2 p-2 overflow-y-auto">
          {counters.map((item) => {
            if (item.useInCombat) {
              return (
                <Item
                  key={item.id}
                  item={item}
                  count={item.counter}
                  onClick={() => handleSelectChoice(item, "itemListIsVisible")}
                  className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-lg border-2 border-primary hover:scale-110 cursor-pointer"
                />
              );
            }
          })}
        </ul>
        <X
          onClick={() => handleCloseList("itemListIsVisible")}
          className="absolute top-2 right-2 text-xl text-white hover:scale-110 cursor-pointer"
        />
      </div>
    );
  } else {
    content = (
      <div className="relative w-1/5 h-[85%] mx-4 mb-[4.5rem] flex flex-col justify-end items-center gap-2">
        {(!isDisabled || entrance) && (
          <Button
            size="lg"
            variant="secondary"
            disabled={isDisabled}
            onClick={() => handlePlayerChoice("CAST SPELL")}
            className={`mb-2 w-3/5  ${
              isDisabled ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <div className="transition-transform duration-200 hover:scale-125">
              Cast Spell
            </div>
          </Button>
        )}
        {!isDisabled && isCharacterTurn && (
          <>
            {/* ATTACK BUTTON */}
            <Button
              size="lg"
              variant="secondary"
              disabled={isDisabled}
              onClick={() => handlePlayerChoice("ATTACK")}
              className={`mb-2 w-3/5  ${
                isDisabled ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <div className="transition-transform duration-200 hover:scale-125">
                Attack
              </div>
            </Button>

            {/* GUARD BUTTON */}
            <Button
              size="lg"
              variant="secondary"
              disabled={isDisabled}
              onClick={() => handlePlayerChoice("GUARD")}
              className={`mb-2 w-3/5  ${
                isDisabled ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <div className="transition-transform duration-200 hover:scale-125">
                Guard
              </div>
            </Button>

            {/* USE ITEM BUTTON */}
            <Button
              size="lg"
              variant="secondary"
              disabled={isDisabled}
              onClick={() => handlePlayerChoice("USE ITEM")}
              className={`mb-2 w-3/5 ${
                isDisabled ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <div className="transition-transform duration-200 hover:scale-125">
                Use Item
              </div>
            </Button>
          </>
        )}
      </div>
    );
  }

  if (!event) {
    return (
      !isDialogue &&
      !isModal &&
      ((isDanger && isCharacterTurn) || !isDanger) &&
      content
    );
  }
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}

const findCharacterById = () => {
  // mana tracking for spell button disabled
  const order = useSelector((state) => state.combat.order);
  return order.find((char) => char.id === "Player");
};
