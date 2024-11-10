import classes from "./InventoryModal.module.css";

import { useSelector } from "react-redux";

import store from "../../../store/index";

import Tooltip from "../../UI/Tooltip";

export default function Stats() {
  let player;
  const dashboard = useSelector((state) => state.ui.dashboardIsVisible);
  if (!dashboard) {
    const order = store.getState().combat.order;
    player = order.find((char) => char.id === "Player");
  } else if (dashboard) {
    player = store.getState().player;
  }

  return (
    <div className={classes.stats}>
      <h3>Stats</h3>
      <hr />
      <div>
        <h4>{player.name}</h4>
        <p className={classes.text}>Level: {player.level}</p>
      </div>
      <ul>
      {player.statusEffects.map((effect) => {
            if (effect.display) {
              const content = (
                <Tooltip
                  key={effect.name}
                  title={effect.name}
                  text={effect.description}
                  detail={`Duration: ${effect.duration} rounds`}
                >
                  <li className={classes.effect}></li>
                </Tooltip>
              );
              return content;
            }
          })}
      </ul>
      <div className={classes.block}>
        <h4>Strength: {player.stats.strength.totalStrength}</h4>
        <p className={classes.text}>
          HP: {player.currentHealth} / {player.stats.strength.maxHealth}
        </p>
        <p>HP Regeneration: +{player.stats.strength.healthRegen}</p>
        <p className={classes.text}> Attack: {player.stats.strength.attack}</p>
      </div>

      <div className={classes.block}>
        <h4>Agility: {player.stats.agility.totalAgility}</h4>
        <p className={classes.text}>Defense: {player.stats.agility.defense}</p>
        <p className={classes.text}>Hit Chance: +{player.stats.agility.hitChance}</p>
        <p className={classes.text}>Speed: {player.stats.agility.speed}</p>
      </div>

      <div className={classes.block}>
        <h4>Arcana: {player.stats.arcana.totalArcana}</h4>
        <p className={classes.text}>
          MP: {player.currentMana} / {player.stats.arcana.maxMana}
        </p>
        <p>MP Regeneration: +{player.stats.arcana.manaRegen}</p>
        <p className={classes.text}>Spell Power: +{player.stats.arcana.spellPower}</p>
      </div>
    </div>
  );
}
