import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { combatActions } from "@/store/combat-slice";

const DamageDisplay = memo(({ character }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(combatActions.removeDamageDisplayItem({ id: character.id }));
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [character.damageDisplay, dispatch, character.id]);

  console.log(character.damageDisplay);

  return (
    <ul className="absolute top-70 left-1/2 transform -translate-x-1/2 w-4/5 h-full flex flex-col items-center justify-start pt-12 z-5">
      {character.damageDisplay
        .slice()
        .reverse()
        .map((item) => {
          console.log(item);
          return (
            <li
              key={item.id}
              className={`text-[3rem] text-text animate-bounce`}
              style={{ animation: "fadeInAndOut 1.5s ease-in-out" }}
            >
              {item.item}
            </li>
          );
        })}
    </ul>
  );
});

DamageDisplay.displayName = "DamageDisplay";

export default DamageDisplay;
