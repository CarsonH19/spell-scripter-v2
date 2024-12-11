import classes from "./Enemies.module.css";

import Character from "../Character";

import { useSelector } from "react-redux";

export default function Enemies() {
  const order = useSelector((state) => state.combat.order);

  return (
    <div className={classes.enemies}>
      {order.map((enemy) => {
        if (enemy.identifier === "ENEMY") {
          return <Character key={enemy.id} character={enemy} />;
        }
      })}
    </div>
  );
}
