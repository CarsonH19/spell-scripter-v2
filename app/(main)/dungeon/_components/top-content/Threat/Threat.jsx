"use client"

import { useSelector } from "react-redux";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ArrowRight, Skull } from "lucide-react";

export default function Threat() {
  const dungeon = useSelector((state) => state.dungeon);
  const threat = useSelector((state) => state.dungeon.threat);

  return (
    <div className="w-1/3 flex justify-end items-center text-[var(--text)] gap-12">
      {/* FOLLOWING ICON */}
      {dungeon.followCounter > 0 && (
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger>
              <ArrowRight size={"12rem"} className="text-text" />
            </TooltipTrigger>
            <TooltipContent
              position={"bottom-left"}
              title={"Following"}
              text={dungeon.following}
              detailOne={`${
                dungeon.followCounter > 1
                  ? `${dungeon.followCounter} rooms`
                  : `${dungeon.followCounter} room`
              } away.`}
            />
          </Tooltip>
        </div>
      )}

      {/* THREAT ICON */}
      <div className="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger>
            <Skull size={"3rem"} className="text-text" />
          </TooltipTrigger>
          <TooltipContent
            position={"bottom-left"}
            title={"Threat"}
            text={threat}
            detailOne={
              "Threat determines the difficulty of the encounters you will face. Threat is raised after each cleared room, when you fail to cast a spell, and in other specific instances."
            }
          />
        </Tooltip>
      </div>
    </div>
  );
}
