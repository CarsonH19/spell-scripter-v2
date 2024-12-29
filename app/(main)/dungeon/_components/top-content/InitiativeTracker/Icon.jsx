import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combatActions } from "@/store/combat-slice";

const Icon = ({ character }) => {
  const dispatch = useDispatch();

  const isHighlighted = useSelector(
    (state) => state.combat.highlightedCharacter === character.id
  );

  const isCharacterTurn = useSelector(
    (state) => state.combat.isCharacterTurn === character.id
  );

  const handleMouseEnter = () => {
    dispatch(combatActions.highlightCharacter(character.id));
  };

  const handleMouseLeave = () => {
    dispatch(combatActions.clearHighlight());
  };

  return (
    <div
      className={`h-10 w-10 rounded border-2 bg-cover bg-primary 
        ${isHighlighted ? "border-text" : "border-secondary"} 
        ${isCharacterTurn ? "border-[#f6b17a] bg-accent" : ""}`}
      style={{
        backgroundImage: `url(${character.icon}.png)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
};

const MemoizedIcon = memo(Icon);

export default MemoizedIcon;
