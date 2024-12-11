import { memo } from "react";
import { useDispatch } from "react-redux";
import { combatActions } from "../../../store/combat-slice";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import classes from "./DamageDisplay.module.css";

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
    <TransitionGroup component="ul" className={classes["damage-display"]}>
      {character.damageDisplay
        .slice()
        .reverse()
        .map((item) => {
          return (
            <CSSTransition
              key={item.id}
              timeout={500}
              classNames={{
                enter: classes["damage-enter"],
                enterActive: classes["damage-enter-active"],
                exit: classes["damage-exit"],
                exitActive: classes["damage-exit-active"],
              }}
            >
              <li className={classes[item.style]}>{item.item}</li>
            </CSSTransition>
          );
        })}
    </TransitionGroup>
  );
});

export default DamageDisplay;
