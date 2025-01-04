import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Item from "./item";

export default function AttunedItem(obj) {
  const item = obj.item;
  const setCounts = obj.setCounts;
  let completeSet;
  let setPieces = 1;
  if (item.set && setCounts[item.set]) {
    setPieces = setCounts[item.set];
  }

  if (setPieces === 3) completeSet = true;


  return (
    <Tooltip key={item.id}>
      <TooltipTrigger>
        <Item key={item.id} item={item} />
      </TooltipTrigger>
      <TooltipContent
        key={item.id}
        type={"ITEM"}
        position={"TOP"}
        title={item.name}
        detailOne={item.rarity}
        count={item.counter}
        detailTwo={item.description}
        detailThree={item.effect}
        detailFour={item.set ? `${item.set} Bonus (${setPieces}/3)` : null}
        detailFive={
          item.setBonus
            ? item.setBonus.map((line, index) => (
                <span
                  key={index}
                  className="item-effect"
                  style={completeSet ? {} : { color: "rgb(97, 97, 97)" }}
                >
                  {line}
                </span>
              ))
            : null
        }
      />
    </Tooltip>
  );
}
