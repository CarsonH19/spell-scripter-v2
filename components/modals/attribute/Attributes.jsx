"use client";

// import { useSelector } from "react-redux";
import store from "../../../store/index";

// TODO: Add Tooltips to each stat to explain what they change/do
export default function Attributes() {
  let player;
  // const isInventoryOpen = useSelector((state) => state.ui.modal.inventoryModal);
  const dashboard = store.getState().ui.dashboardIsVisible;

  if (!dashboard) {
    const order = store.getState().combat.order;
    player = order.find((char) => char.id === "Player");
  } else {
    // player = useSelector((state) => state.player);
    player = store.getState().player
  }

  return (
    <div className="flex flex-col justify-evenly w-full h-full bg-primary rounded-lg">
      {/* {!isInventoryOpen && (
        <div
          className={`flex items-center justify-center gap-4 text-2xl font-semibold ${
            player.attributePoints > 0 ? "text-accent" : "text-text"
          }`}
        >
          <h4>{player.attributePoints}</h4>
        </div>
      )} */}

      {/* Strength Section */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center">
          <h4 className="w-40 text-center text-lg font-medium border-b border-text mt-4">
            Strength
          </h4>
          <div className="flex items-center gap-6 mt-2">
            <p className="text-lg font-semibold text-text ">
              {player.stats.strength.totalStrength}
            </p>
          </div>
        </div>
        <p className="text-sm text-text ">
          Max HP: {player.stats.strength.maxHealth}
        </p>
        <p className="text-sm text-text ">
          Attack: {Math.floor(player.stats.strength.attack / 2)} -{" "}
          {player.stats.strength.attack}
        </p>
        <p className="text-sm text-text ">
          HP Regeneration: {player.stats.strength.healthRegen}
        </p>
      </div>

      {/* Agility Section */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center">
          <h4 className="w-40 text-center text-lg font-medium border-b border-text mt-4">
            Agility
          </h4>
          <div className="flex items-center gap-6 mt-2">
            <p className="text-lg font-semibold text-text ">
              {player.stats.agility.totalAgility}
            </p>
          </div>
        </div>
        <p className="text-sm text-text ">
          Defense: {player.stats.agility.defense}
        </p>
        <p className="text-sm text-text ">
          Hit Chance Bonus: +{player.stats.agility.hitChance}
        </p>
        <p className="text-sm text-text ">
          Speed Bonus: +{player.stats.agility.speed}
        </p>
      </div>

      {/* Arcana Section */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center">
          <h4 className="w-40 text-center text-lg font-medium border-b border-text mt-4">
            Arcana
          </h4>
          <div className="flex items-center gap-6 mt-2">
            <p className="text-lg font-semibold text-text ">
              {player.stats.arcana.totalArcana}
            </p>
          </div>
        </div>
        <p className="text-sm text-text ">
          Max MP: {player.stats.arcana.maxMana}
        </p>
        <p className="text-sm text-text ">
          Spell Power: {player.stats.arcana.spellPower}
        </p>
        <p className="text-sm text-text ">
          MP Regeneration: {player.stats.arcana.manaRegen}
        </p>
      </div>
    </div>
  );
}