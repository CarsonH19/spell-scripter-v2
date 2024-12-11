import classes from "./BottomContent.module.css";

import Actions from "./Actions/Actions";
import Party from "./Party/Party";
import Enemies from "./Enemies/Enemies";

export default function BottomContent() {
  return (
    <div className={classes.bottom}>
      <Party />
      <Actions />
      <Enemies />
    </div>
  );
}
