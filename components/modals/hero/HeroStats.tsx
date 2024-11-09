import classes from "./HeroesModal.module.css";

import { BEHAVIORS } from "../../../util/behaviors";
import Tooltip from "../../UI/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function HeroStats({ hero }) {
  const behavior = capitalizeFirstLetter(hero.behavior);

  let abilityA;
  let abilityB;

  if (hero.level >= 3) {
    abilityA = (
      <div className={classes.unlocked}>
        <h4>{hero.abilityA.name}</h4>
        <p>{hero.abilityA.description}</p>
      </div>
    );
  } else {
    abilityA = (
      <div className={classes.locked}>
        <h4>Ability Locked</h4>
        <p>Unlock this ability at level 3.</p>
      </div>
    );
  }

  if (hero.level >= 6) {
    abilityB = (
      <div className={classes.unlocked}>
        <h4>{hero.abilityB.name}</h4>
        <p>{hero.abilityB.description}</p>
      </div>
    );
  } else {
    abilityB = (
      <div className={classes.locked}>
        <h4>Ability Locked</h4>
        <p>Unlock this ability at level 6.</p>
      </div>
    );
  }

  return (
    <>
      <div className={classes.name}>
        <h3>{hero.name}</h3>
        <Tooltip
          title="Behavior"
          detailOne={BEHAVIORS[hero.behavior].description}
          position="right-middle"
        >
          <h5>{behavior}</h5>
        </Tooltip>
        <p className={classes.level}>Level: {hero.level}</p>
      </div>
      <div>
        <h4>Attributes</h4>
        <div className={classes.attributes}>
          <p>Strength: {hero.stats.baseStrength}</p>
          <p>Agility: {hero.stats.baseAgility}</p>
          <p>Arcana: {hero.stats.baseArcana}</p>
        </div>
      </div>
      {/* <div className={classes.abilities}> */}
      <div className={classes.unlocked}>
        <h4>Passive</h4>
        <p>{hero.passive.description}</p>
      </div>
      {abilityA}
      {abilityB}
      {/* </div> */}
    </>
  );
}
function capitalizeFirstLetter(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}
