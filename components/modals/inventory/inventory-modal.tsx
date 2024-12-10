"use client";

import { useState } from "react";
import { useSelector } from "react-redux";

import Item from "./item";
import AttunedItem from "./attuned-item";
import Attributes from "./../attribute/Attributes"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { RootState } from "@/store";

export default function InventoryModal() {
  const [active, setActive] = useState(1);
  const order = useSelector((state: RootState) => state.combat.order);
  const inDungeon = useSelector(
    (state: RootState) => state.ui.gameWindowIsVisible
  );
  const playerSlice = useSelector((state: RootState) => state.player);

  let player;
  if (inDungeon) {
    player = order.find((char) => char.id === "Player");
  } else {
    player = playerSlice;
  }

  const handleButtonClick = (index) => {
    setActive(index);
  };

  let itemGroup;
  const attunedItems = player.inventory.attunedItems;

  switch (active) {
    case 1:
      itemGroup = player.inventory.equipment;
      break;
    case 2:
      itemGroup = player.inventory.consumables;
      break;
    case 3:
      itemGroup = player.inventory.miscItems;
      break;
  }

  // Counter logic
  const counters = [];
  itemGroup.map((item) => {
    let existingItem = counters.find((obj) => obj.name === item.name);
    if (existingItem) {
      existingItem.counter++;
    } else {
      counters.push({ ...item, counter: 1 });
    }
  });

  // Counting Set Pieces
  let setCounts = {};
  // Iterate over the attuned items and count the occurrences of each set
  player.inventory.attunedItems.forEach((item) => {
    if (item.set) {
      if (setCounts[item.set]) {
        setCounts[item.set]++;
      } else {
        setCounts[item.set] = 1;
      }
    }
  });

  return (
    <div className="h-[100%] w-[100%] min-w-[60rem] min-h-[40rem] bg-background flex flex-col items-center border-2 border-secondary p-4 rounded-lg">
      <h1>Inventory</h1>
      <div className="flex gap-4 w-full mb-4 h-[90%]">
        <div className="flex flex-col w-[30%] p-4 border border-secondary rounded-lg bg-primary mt-10">
          {/* STATS */}
          <Attributes />
        </div>
        <div className="flex flex-col justify-between w-[70%]">
          <div className="flex flex-col justify-start h-full">
            <div className="flex justify-evenly mt-4 w-full h-[5%]">
              <button
                className={`w-32 text-xs border border-secondary bg-background text-text cursor-pointer ${
                  active === 1 ? "bg-secondary" : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Equipment
              </button>
              <button
                className={`w-32 text-xs border border-secondary bg-background text-text cursor-pointer ${
                  active === 2 ? "bg-secondary" : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                Consumables
              </button>
              <button
                className={`w-32 text-xs border border-secondary bg-background text-text cursor-pointer ${
                  active === 3 ? "bg-secondary" : ""
                }`}
                onClick={() => handleButtonClick(3)}
              >
                Misc. Items
              </button>
            </div>
            <ul className="w-full h-[95%] bg-primary border border-secondary rounded-lg p-4 flex flex-wrap justify-center items-start gap-4 overflow-visible ">
              {counters.map((item) => {
                // Calculate set pieces for tooltip
                let completeSet;
                let setPieces = 0;
                if (item.set && setCounts[item.set]) {
                  setPieces = setCounts[item.set];
                }
                if (setPieces === 3) completeSet = true;

                return (
                  <Tooltip key={item.id}>
                    <TooltipTrigger>
                      <Item key={item.id} item={item} count={item.counter} />
                    </TooltipTrigger>
                    <TooltipContent
                      key={item.id}
                      position="item"
                      title={item.name}
                      text={item.rarity}
                      detailOne={item.description}
                      // detailTwo={item.effect.map((line, index) => (
                      //   <span key={index} className="item-effect">
                      //     {line}
                      //   </span>
                      // ))}
                      detailThree={
                        item.set ? `${item.set} Bonus (${setPieces}/3)` : null
                      }
                      detailFour={
                        item.setBonus
                          ? item.setBonus.map((line, index) => (
                              <span
                                key={index}
                                className="item-effect"
                                style={
                                  completeSet
                                    ? {}
                                    : { color: "rgb(97, 97, 97)" }
                                }
                              >
                                {line}
                              </span>
                            ))
                          : null
                      }
                    />
                  </Tooltip>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[70%] min-w-[33rem] self-center h-[25%] bg-background text-center flex flex-col mt-4">
        <h3 className="text-lg mb-0">Attuned</h3>
        <ul className="border border-secondary m-0 p-4 flex justify-evenly items-center gap-4 h-32 bg-primary rounded-lg">
          {/* ITEM 1 */}
          {attunedItems[0] ? (
            <AttunedItem item={attunedItems[0]} setCounts={setCounts} />
          ) : (
            <div className="aspect-square w-16 h-16 border-2 border-secondary cursor-auto rounded-lg bg-opacity-30 bg-black pointer-events-none"></div>
          )}
          {/* ITEM 2 */}
          {attunedItems[1] ? (
            <AttunedItem item={attunedItems[1]} setCounts={setCounts} />
          ) : (
            <div className="aspect-square w-16 h-16 border-2 border-secondary cursor-auto rounded-lg bg-opacity-30 bg-black pointer-events-none"></div>
          )}
          {/* ITEM 3 */}
          {attunedItems[2] ? (
            <AttunedItem item={attunedItems[2]} setCounts={setCounts} />
          ) : (
            <div className="aspect-square w-16 h-16 border-2 border-secondary cursor-auto rounded-lg bg-opacity-30 bg-black pointer-events-none"></div>
          )}
          {/* ITEM 4 */}
          {attunedItems[3] ? (
            <AttunedItem item={attunedItems[3]} setCounts={setCounts} />
          ) : (
            <div className="aspect-square w-16 h-16 border-2 border-secondary cursor-auto rounded-lg bg-opacity-30 bg-black pointer-events-none"></div>
          )}
          {/* ITEM 5 */}
          {attunedItems[4] ? (
            <AttunedItem item={attunedItems[4]} setCounts={setCounts} />
          ) : (
            <div className="aspect-square w-16 h-16 border-2 border-secondary cursor-auto rounded-lg bg-opacity-30 bg-black pointer-events-none"></div>
          )}
        </ul>
      </div>
    </div>
  );
}
