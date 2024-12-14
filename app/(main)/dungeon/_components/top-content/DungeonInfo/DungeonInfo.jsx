"use client"

import { useSelector } from "react-redux";

export default function DungeonInfo() {
  const dungeon = useSelector((state) => state.dungeon);

  return (
    <div className="w-1/3 flex flex-col justify-start items-start gap-2 md:gap-0">
      <h2 className="text-xl md:text-[4vh]">{dungeon.name}</h2>
      <h4 className="m-0 text-lg md:text-[3vh]">Rooms Cleared: {dungeon.roomCounter}</h4>
    </div>
  );
}
