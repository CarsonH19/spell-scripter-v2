"use client";

import Character from "../Character";

import { useSelector } from "react-redux";

export default function Party() {
  const order = useSelector((state) => state.combat.order);
  console.log(order);
  return (
    <div className="w-[40%] flex justify-start items-end gap-2 overflow-visible h-full">
      {order.map((hero) => {
        console.log(hero);
        if (hero.identifier === "HERO" || hero.identifier === "PLAYER") {
          return <Character key={hero.id} character={hero} />;
        }
      })}
    </div>
  );
}
