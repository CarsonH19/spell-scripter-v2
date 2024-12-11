import { useSelector } from "react-redux";

import classes from "./InitiativeTracker.module.css";
import MemoizedIcon from "./Icon";

export default function InitiativeTracker() {
  const order = useSelector((state) => state.combat.order);
  const id = useSelector((state) => state.combat.isCharacterTurn);

  const findCharacterById = (id) => {
    return order.find((char) => char.id === id);
  };

  let character = findCharacterById(id);

  if (!character) {
    character = "";
  }

  return (
    <div className={classes.tracker}>
      {order.map((character, index) => (
        <MemoizedIcon key={index} character={character} />
      ))}
      {id && <p>{`${character.name}'s Turn!`}</p>}
    </div>
  );
}
