import classes from "./TradeModal.module.css"
import Icon from "../../UI/Icon";
import { calculateItemFavor } from "./TradeModal";

export default function Item({ item, count, onTrade, favorAvailable }) {
  const notEnoughFavor =
    favorAvailable < calculateItemFavor(item) ? classes["no-favor"] : "";

  return (
    <Icon
      onClick={() => onTrade(item)}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
      className={notEnoughFavor}
    >
      <span>{count > 1 ? `x${count}` : ""}</span>
    </Icon>
  );
}
