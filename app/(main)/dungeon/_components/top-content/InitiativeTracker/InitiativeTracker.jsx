import { useSelector } from "react-redux";
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
    <div className="relative w-1/3 flex justify-center items-center gap-4">
      {order.map((character, index) => (
        <MemoizedIcon key={index} character={character} />
      ))}
      {id && <p className="absolute top-full">{`${character.name}'s Turn!`}</p>}
    </div>
  );
}
