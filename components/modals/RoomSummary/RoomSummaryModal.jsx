import { useDispatch, useSelector } from "react-redux";
import classes from "./RoomSummaryModal.module.css";

// import Tooltip from "../../UI/Tooltip";
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

import store from "@/store/index";

export default function RoomSummaryModal() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.dungeon.contents.event);
  const enemies = useSelector((state) => state.dungeon.contents.enemies);
  const itemsLooted = useSelector((state) => state.dungeon.contents.items);

  // Check for summon removal
  checkForSummonEnd(dispatch);

  const order = useSelector((state) => state.combat.order);

  useEffect(() => {
    // Play music after clearing room
    playMusic(backgroundMusic.threeThousandYearsOld);

    // Check for quest progression
    progressActiveQuests(dispatch, "EVENT");

    // Ensure event options are not visible (needed for TRADE events)
    dispatch(
      uiActions.changeUi({
        element: "eventOptionsAreVisible",
        visible: false,
      })
    );

    // Clear dialogue
    dispatch(dialogueActions.clearDialogue("ALL"));

    // Clear any lingering narrations
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));

    // Toggle off danger
    dispatch(dungeonActions.dangerToggle({ danger: false }));

    // Add items looted from room/enemies to player's inventory in the combat-slice
    for (let i = 0; i < itemsLooted.length; i++) {
      dispatch(
        combatActions.changePlayerInventory({
          item: itemsLooted[i],
          change: "ADD",
        })
      );
    }

    for (let i = 0; i < order.length; i++) {
      // Regen Health for Player & Heroes
      if (order[i].identifier === "HERO" || order[i].identifier === "PLAYER") {
        changeHealth(
          dispatch,
          order[i],
          "HEAL",
          order[i].stats.strength.healthRegen
        );

        // Regen Mana for Player
        if (order[i].identifier === "PLAYER") {
          dispatch(
            combatActions.updateMana({
              change: "ADD",
              value: order[i].stats.arcana.manaRegen,
            })
          );
        }

        // Decrement Status Effects
        checkStatusEffect(dispatch, order[i].id, "DECREMENT", "ROOM");
        checkStatusEffect(dispatch, order[i].id, "REMOVE");
        // Remove Round & Action durationType status effects
        checkStatusEffect(dispatch, order[i].id, "END");
      }
    }

    // SKILL - Improved Arcane Shield - Add minimum temp. hit points to shield
    const improvedArcaneShield = checkSkillPoints("Improved Arcane Shield");
    if (improvedArcaneShield) {
      const player = order.find((char) => char.id === "Player");
      const arcaneShieldFunction = statusEffectFunctions["ARCANE_SHIELD"];
      arcaneShieldFunction(dispatch, null, player, "RESET", null);
    }
  }, [dispatch]);

  return (
    <div className={classes.summary}>
      <h1>Room Cleared!</h1>
      <div className={classes.container}>
        {/* <div>TOME PROGRESS BAR</div>
        <div>QTE QUESTIONS</div> */}
        {event && (
          <div className={classes.event}>
            <h2>Event</h2>
            <p>{event.outcome}</p>
          </div>
        )}
        {enemies.length > 0 && (
          <div className={classes.enemies}>
            <h2>Enemies Defeated</h2>
            <ul>
              {enemies.map((enemy) => {
                return (
                  <Tooltip key={enemy.id}>
                    <TooltipTrigger>
                      <li
                        style={{
                          backgroundImage: enemy.icon
                            ? `url(${enemy.icon}.png)`
                            : "none",
                        }}
                      ></li>
                    </TooltipTrigger>
                    <TooltipContent
                      key={enemy.id}
                      position="room-summary-icon"
                      title={enemy.name}
                    />
                  </Tooltip>
                );
              })}
            </ul>
          </div>
        )}
        {itemsLooted.length > 0 && (
          <div className={classes.items}>
            <h2>Items Looted</h2>
            <ul>
              {itemsLooted.map((item) => {
                return (
                  <Tooltip key={item.id}>
                    <TooltipTrigger>
                      <li
                        style={{
                          backgroundImage: item.image
                            ? `url(${item.image}.png)`
                            : "none",
                        }}
                      ></li>
                    </TooltipTrigger>
                    <TooltipContent
                      key={item.id}
                      position="room-summary-icon"
                      title={item.name}
                    />
                  </Tooltip>
                );
              })}
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
