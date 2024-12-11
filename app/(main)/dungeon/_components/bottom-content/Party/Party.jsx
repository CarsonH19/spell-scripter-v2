import classes from "./Party.module.css";

import Character from "../Character";

import { useSelector } from "react-redux";

export default function Party() {
  const order = useSelector((state) => state.combat.order);

  return (
    <div className={classes.party}>
      {order.map((hero) => {
        if (hero.identifier === "HERO" || hero.identifier === "PLAYER") {
          return <Character key={hero.id} character={hero} />;
        }
      })}
    </div>
  );
}
