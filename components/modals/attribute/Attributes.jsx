"use client";

// import { useSelector } from "react-redux";
import store from "../../../store/index";
import { useState } from "react";

import { CircleAlert } from "lucide-react";
import { Heart } from "lucide-react";
import { Sparkles } from "lucide-react";

import { Progress } from "@/components/ui/progress";

// TODO: Add Tooltips to each stat to explain what they change/do
export default function Attributes() {
  const [isHovered, setIsHovered] = useState(false);

  let player;
  // const isInventoryOpen = useSelector((state) => state.ui.modal.inventoryModal);
  const dashboard = store.getState().ui.dashboardIsVisible;

  if (!dashboard) {
    const order = store.getState().combat.order;
    player = order.find((char) => char.id === "Player");
  } else {
    // player = useSelector((state) => state.player);
    player = store.getState().player;
  }

  return (
    <div className=" relative flex flex-col justify-between w-full h-full p-2 bg-[#424769] rounded-lg">
      <div className="flex justify-between items-start ">
        <p className="color-text text-md text-shadow-md">
          Level: {player.level}
        </p>

        <div
          className={`flex items-center gap-1 ${
            player.identifier === "ENEMY" ? "justify-start" : "justify-end"
          }`}
        >
          <Heart size={"1rem"} className="text-red-500" />
          <p className="text-md">
            <span>{player.currentHealth}</span>/
            <span>{player.stats.strength.maxHealth}</span>
          </p>
        </div>
        <div
          className={`flex items-center gap-1 ${
            player.identifier === "ENEMY" ? "justify-start" : "justify-end"
          }`}
        >
          <Sparkles size={"1rem"} className="text-blue-500" />

          <p className="text-md">
            <span>{player.currentMana}</span>/
            <span>{player.stats.arcana.maxMana}</span>
          </p>
        </div>

        <CircleAlert
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-secondary z-30"
        />
      </div>

      {/* Strength Section */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center">
          <h4 className="w-40 text-center text-lg font-medium border-b border-text mt-2 text-shadow-sm">
            Strength
          </h4>
          <div className="flex items-center gap-6 ">
            <p className="text-[1.5rem] font-semibold text-text text-shadow-sm">
              {player.stats.strength.totalStrength}
            </p>
          </div>
        </div>
        <p className="text-sm text-text text-shadow-sm">
          Max Health: {player.stats.strength.maxHealth}
        </p>
        <p className="text-sm text-text text-shadow-sm">
          Attack: {Math.floor(player.stats.strength.attack / 2)} -{" "}
          {player.stats.strength.attack}
        </p>
        <p className="text-sm text-text text-shadow-sm">
          Health Regeneration: {player.stats.strength.healthRegen}
        </p>
      </div>

      {/* Agility Section */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center">
          <h4 className="w-40 text-center text-shadow-sm text-lg font-medium border-b border-text mt-2">
            Agility
          </h4>
          <div className="flex items-center gap-6">
            <p className="text-[1.5rem] text-shadow-sm font-semibold text-text ">
              {player.stats.agility.totalAgility}
            </p>
          </div>
        </div>
        <p className="text-sm text-text text-shadow-sm">
          Defense: {player.stats.agility.defense}
        </p>
        <p className="text-sm text-text text-shadow-sm">
          Hit Chance: {player.stats.agility.hitChance}
        </p>
        <p className="text-sm text-text text-shadow-sm">
          Speed: {player.stats.agility.speed}
        </p>
      </div>

      {/* Arcana Section */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center">
          <h4 className="w-40 text-center text-lg text-shadow-sm font-medium border-b border-text mt-2">
            Arcana
          </h4>
          <div className="flex items-center gap-6">
            <p className="text-[1.5rem] font-semibold text-text text-shadow-sm">
              {player.stats.arcana.totalArcana}
            </p>
          </div>
        </div>
        <p className="text-sm text-text text-shadow-sm">
          Max Mana: {player.stats.arcana.maxMana}
        </p>
        <p className="text-sm text-text text-shadow-sm">
          Spell Power: {player.stats.arcana.spellPower}
        </p>
        <p className="text-sm text-text text-shadow-sm">
          Mana Regeneration: {player.stats.arcana.manaRegen}
        </p>
      </div>

      {/* TIP */}
      <div
        className={`absolute h-full inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isHovered
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-col justify-evenly w-full h-full inset-0 bg-background opacity-100 rounded-md transition-opacity duration-500">
          {/* Level Section */}
          <div className="relative flex flex-col items-center w-full">
            <h4 className="w-40 text-center text-lg font-medium border-b border-text mt-4 text-shadow-sm">
              Level
            </h4>
            <p className="text-center">
              With each level your stats increase slightly but your attribute
              scores remain the same.
            </p>
          </div>

          {/* Strength Section */}
          <div className="relative flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <h4 className="w-40 text-center text-lg font-medium border-b border-text mt-4 text-shadow-sm">
                Strength
              </h4>
              {/* <div className="flex items-center gap-6 mt-2">
                <p className="text-[1.5rem] font-semibold text-text text-shadow-sm">
                  {player.stats.strength.totalStrength}
                </p>
              </div> */}
            </div>
            <p className="text-sm text-text text-shadow-sm">
              Increases Max Health
            </p>
            <p className="text-sm text-text text-shadow-sm">
              Increases Basic Attack Damage
            </p>
            <p className="text-sm text-text text-shadow-sm">
              Health Recovered Each Room
            </p>
          </div>

          {/* Agility Section */}
          <div className="relative flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <h4 className="w-40 text-center text-shadow-sm text-lg font-medium border-b border-text mt-4">
                Agility
              </h4>
              {/* <div className="flex items-center gap-6 mt-2">
                <p className="text-[1.5rem] text-shadow-sm font-semibold text-text ">
                  {player.stats.agility.totalAgility}
                </p>
              </div> */}
            </div>
            <p className="text-sm text-text text-shadow-sm">
              Increases Chance For Attacks To Miss
            </p>
            <p className="text-sm text-text text-shadow-sm">
              Increases Chance For Attacks To Hit
            </p>
            <p className="text-sm text-text text-shadow-sm">
              More Likely To Start Earlier In Initiative
            </p>
          </div>

          {/* Arcana Section */}
          <div className="relative flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <h4 className="w-40 text-center text-lg text-shadow-sm font-medium border-b border-text mt-4">
                Arcana
              </h4>
              {/* <div className="flex items-center gap-6 mt-2">
                <p className="text-[1.5rem] font-semibold text-text text-shadow-sm">
                  {player.stats.arcana.totalArcana}
                </p>
              </div> */}
            </div>
            <p className="text-sm text-text text-shadow-sm">
              Increases Max Mana
            </p>
            <p className="text-sm text-text text-shadow-sm">
              Bonus Damaging & Healing With Spells
            </p>
            <p className="text-sm text-text text-shadow-sm">
              Mana Recovered Each Room
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
