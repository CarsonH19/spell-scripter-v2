"use client";

import { RootState } from "@/store";
// import quests from "../../../data/quests";
import quests from "@/data/quests";

// import Icon from "../../UI/Icon";
import HeroQuests from "./hero-quests";

import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function QuestsModal() {
  const [index, setIndex] = useState(0);
  const heroes = useSelector((state: RootState) => state.hero.heroes);

  const hasHero = heroes.find((hero) => hero.unlocked);
  const [hoveredElement, setHoveredElement] = useState(
    hasHero ? hasHero : null
  );

  let lowercaseName;
  let activeQuests;

  if (hoveredElement) {
    lowercaseName = hoveredElement.name.toLowerCase();
    activeQuests = quests[lowercaseName];
    activeQuests = activeQuests.filter((quest) => quest.unlocked).reverse();
  }

  const handleHoveredHero = (hero) => {
    setHoveredElement(hero);
  };

  const handleNextPage = () => {
    if (index < activeQuests.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative h-[90%] w-[60%] min-w-[50rem] bg-[var(--background)] flex flex-col justify-between items-center border-2 border-[var(--secondary)] p-8 rounded-lg">
      <h1 className="text-center text-[1.5rem] p-0 m-0 border-b-2 border-[var(--secondary)] w-[30%]">
        Quests
      </h1>
      <ul className="m-0 flex items-center justify-center gap-8">
        {heroes.map((hero) => {
          if (hero.unlocked) {
            return (
              <li
                key={hero.name}
                style={{
                  backgroundImage: `url(${hero.icon}.png)`,
                }}
                // alt={hero.name}
                onMouseEnter={() => handleHoveredHero(hero)}
                className="aspect-square h-16 w-16 list-none border-2 border-[var(--accent)] cursor-pointer rounded-[10%] bg-center bg-no-repeat bg-cover"
              />
            );
          }

          if (heroes.length === 0) {
            return (
              <li
                key={0}
                className="aspect-square h-16 w-16 list-none bg-opacity-30 border-2 border-[var(--secondary)] cursor-default rounded-[10%] bg-center bg-no-repeat bg-cover"
              />
            );
          }
        })}
      </ul>

      {hoveredElement ? (
        <div className="flex justify-between gap-4 w-[90%] h-[80%] rounded-lg">
          <div className="flex flex-col items-center justify-between w-[40%] bg-[var(--primary)] rounded-md">
            <h3 className="text-center self-center w-[50%] border-b border-[var(--text)] my-4 text-[1.2rem]">
              {hoveredElement.name}
            </h3>
            <Image
              src={`${hoveredElement.image}.png`}
              alt={hoveredElement.name}
              fill
              className="w-auto h-[80%] object-contain"
            />
          </div>
          <HeroQuests
            index={index}
            quests={activeQuests}
            onLeftClick={handlePrevPage}
            onRightClick={handleNextPage}
          />
        </div>
      ) : (
        <p className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-[1.5rem]">
          No quests available.
        </p>
      )}
    </div>
  );
}
