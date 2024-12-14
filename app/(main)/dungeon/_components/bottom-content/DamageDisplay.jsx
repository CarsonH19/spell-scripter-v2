import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { combatActions } from "@/store/combat-slice";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

  return (
    <TransitionGroup component="ul" className="absolute top-70 left-1/2 transform -translate-x-1/2 w-4/5 h-full flex flex-col items-center justify-start">
      {character.damageDisplay
        .slice()
        .reverse()
        .map((item) => (
          <CSSTransition
            key={item.id}
            timeout={500}
            classNames={{
              enter: "opacity-0 transform translate-y-5",
              enterActive: "opacity-100 transform translate-y-0",
              exit: "opacity-0 transform translate-y-5",
              exitActive: "opacity-0 transform translate-y-5",
            }}
          >
            <li className={`text-center ${item.style}`}>
              {item.item}
            </li>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
});

DamageDisplay.displayName = "DamageDisplay";

export default DamageDisplay;
