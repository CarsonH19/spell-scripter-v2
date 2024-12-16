"use client";

import Character from "../Character";
import { useSelector } from "react-redux";

export default function Enemies() {
  const order = useSelector((state) => state.combat.order);

  return (
    <div className="w-2/5 h-full flex justify-end items-end gap-4">
      {order.map((enemy) => {
        if (enemy.identifier === "ENEMY") {
          return <Character key={enemy.id} character={enemy} />;
        }
      })}
    </div>
  );
}
