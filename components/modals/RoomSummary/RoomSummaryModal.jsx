import { useDispatch, useSelector } from "react-redux";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { dungeonActions } from "@/store/dungeon-slice";
import { logActions } from "@/store/log-slice";
import { playerActions } from "@/store/player-slice";
import { combatActions } from "@/store/combat-slice";
import { dialogueActions } from "@/store/dialogue-slice";
import { uiActions } from "@/store/ui-slice";

import { useEffect } from "react";
import { changeHealth } from "@/store/health-actions";
import { checkStatusEffect } from "@/store/status-effect-actions";
import { checkSkillPoints } from "@/util/spellbook-util";
import statusEffectFunctions from "@/util/status-effect-functions";

import progressActiveQuests from "@/util/quest-util";

import { backgroundMusic, playMusic } from "@/data/audio/music";

import Item from "../inventory/item";

export default function RoomSummaryModal() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.dungeon.contents.event);
  const enemies = useSelector((state) => state.dungeon.contents.enemies);
  const itemsLooted = useSelector((state) => state.dungeon.contents.items);
  const order = useSelector((state) => state.combat.order);

  useEffect(() => {
    playMusic(backgroundMusic.threeThousandYearsOld);
    progressActiveQuests(dispatch, "EVENT");

    dispatch(
      uiActions.changeUi({
        element: "eventOptionsAreVisible",
        visible: false,
      })
    );

    dispatch(dialogueActions.clearDialogue("ALL"));
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));

    dispatch(dungeonActions.dangerToggle({ danger: false }));

    for (let i = 0; i < itemsLooted.length; i++) {
      dispatch(
        combatActions.changePlayerInventory({
          item: itemsLooted[i],
          change: "ADD",
        })
      );
    }

    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "HERO" || order[i].identifier === "PLAYER") {
        changeHealth(
          dispatch,
          order[i],
          "HEAL",
          order[i].stats.strength.healthRegen
        );

        if (order[i].identifier === "PLAYER") {
          dispatch(
            combatActions.updateMana({
              change: "ADD",
              value: order[i].stats.arcana.manaRegen,
            })
          );
        }

        checkStatusEffect(dispatch, order[i].id, "DECREMENT", "ROOM");
        checkStatusEffect(dispatch, order[i].id, "REMOVE");
        checkStatusEffect(dispatch, order[i].id, "END");
      }
    }

    const improvedArcaneShield = checkSkillPoints("Improved Arcane Shield");
    if (improvedArcaneShield) {
      const player = order.find((char) => char.id === "Player");
      const arcaneShieldFunction = statusEffectFunctions["ARCANE_SHIELD"];
      arcaneShieldFunction(dispatch, null, player, "RESET", null);
    }
  }, [dispatch]);

  return (
    <div
      className="
      h-[90%] w-[30%] min-w-[40rem]
      bg-[var(--background)]
      flex flex-col items-center justify-start
      border-2 border-[var(--secondary)]
      p-4 gap-4 rounded-[10px]
      text-center
    "
    >
      <h1 className="text-2xl m-0 p-0 w-1/2 border-b-2 border-[var(--secondary)]">
        Room Cleared!
      </h1>

      <div className="flex flex-col items-center justify-center w-full">
        {event && (
          <div className="w-full my-4">
            <h2 className="border-b border-[var(--secondary)]">Event</h2>
            <p className="m-4">{event.outcome}</p>
          </div>
        )}

        {enemies.length > 0 && (
          <div className="w-full my-4">
            <h2 className="mb-12 border-b border-[var(--secondary)]">
              Enemies Defeated
            </h2>
            <ul className="flex justify-center gap-4">
              {enemies.map((enemy) => (
                <Tooltip key={enemy.id}>
                  <TooltipTrigger>
                    <li
                      className="
                        w-16 h-16 
                        border-2 border-[var(--secondary)] 
                        rounded 
                        bg-[var(--primary)]
                        bg-center bg-no-repeat bg-contain
                        list-none transition-transform
                        hover:scale-110 hover:border-[var(--text)]
                      "
                      style={{
                        backgroundImage: enemy.icon
                          ? `url(${enemy.icon}.png)`
                          : "none",
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    title={enemy.name}
                    type="SUMMARY"
                    position="TOP"
                    detailOne={enemy.level}
                  />
                </Tooltip>
              ))}
            </ul>
          </div>
        )}

        {itemsLooted.length > 0 && (
          <div className="w-full my-4">
            <h2 className="mb-12 border-b border-[var(--secondary)]">
              Items Looted
            </h2>
            <ul className="flex justify-center gap-4">
              {itemsLooted.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger>
                    <Item item={item} count={item.counter} />
                  </TooltipTrigger>
                  <TooltipContent
                    type="ITEM"
                    position="TOP"
                    title={item.name}
                    detailOne={item.rarity}
                    // count={item.counter}
                    detailTwo={item.description}
                    detailThree={item.effect}
                  />
                </Tooltip>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Remove Summons
function checkForSummonEnd(dispatch) {
  const order = store.getState().combat.order;

  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < order[i].statusEffects.length; j++) {
      if (order[i].statusEffects[j].name === "Summon") {
        if (order[i].statusEffects[j].duration <= 1) {
          dispatch(combatActions.removeCharacter({ character: order[i] }));
        }
      }
    }
  }
}
