// import HeroStats from "./HeroStats";

import { RootState } from "@/store";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { heroActions } from "@/store/hero-slice";

import { constructStats } from "@/util/dungeon-util";

import playSoundEffect from "@/util/audio-util";

import Image from "next/image";

export default function HeroesModal() {
  const dispatch = useDispatch();
  const heroes = useSelector((state: RootState) => state.hero.heroes);
  const party = useSelector((state: RootState) => state.hero.party);
  const hasHero = heroes.find((hero) => hero.unlocked);
  const [hoveredElement, setHoveredElement] = useState(hasHero ? hasHero : "");

  const handleHoveredHero = (hero) => {
    const baseStats = constructStats(hero.stats);
    const updatedHero = {
      ...hero,
      stats: baseStats,
      damageDisplay: [],
    };

    setHoveredElement(updatedHero);
  };

  const handleChangeParty = (hero) => {
    const isInParty = party.find((char) => char.id === hero.id);

    if (isInParty) {
      dispatch(heroActions.changeParty({ change: "REMOVE", hero }));
      playSoundEffect(false, "ui", "unattune");
    } else {
      const baseStats = constructStats(hero.stats);
      const updatedHero = {
        ...hero,
        stats: baseStats,
        damageDisplay: [],
      };

      dispatch(heroActions.changeParty({ change: "ADD", hero: updatedHero }));
      playSoundEffect(false, "ui", "selectHero");
    }
  };

  return (
    <div className="hero w-[80%] h-[90%] min-h-[42rem] min-w-[60rem] bg-[var(--background)] flex flex-col items-center border-2 border-[var(--secondary)] p-4 rounded-lg">
      <h1 className="text-center text-2xl m-0 border-b-2 border-[var(--secondary)] w-[30%]">
        Heroes
      </h1>
      {hasHero ? (
        <div className="container flex gap-4 w-full h-[90%] mt-8">
          <div className="left flex flex-col items-center w-[50%] p-4">
            <ul className="heroes flex items-center justify-center gap-8 m-0">
              {heroes.map((hero) => {
                if (hero.unlocked) {
                  const isInParty = party.find((char) => char.id === hero.id);
                  return (
                    <li
                      key={hero.name}
                      style={{
                        backgroundImage: `url(${hero.icon}.png)`,
                        borderColor: isInParty
                          ? "var(--primary)"
                          : "var(--accent)",
                      }}
                      className={`aspect-square list-none h-16 w-16 border-2 rounded-[10%] bg-center bg-no-repeat bg-cover cursor-pointer ${
                        isInParty
                          ? "pointer-events-none border-[var(--primary)] opacity-50"
                          : ""
                      }`}
                      onMouseEnter={() => handleHoveredHero(hero)}
                      onClick={() => handleChangeParty(hero)}
                    />
                  );
                }
              })}
            </ul>
            <Image
              src={`${hoveredElement.image}.png`}
              alt={hoveredElement.name}
              fill
              className="w-auto h-[67%] object-contain border-b border-[var(--secondary)]"
            />
            <div className="party flex flex-col items-center w-full p-2">
              <p className="border-b-2 border-[var(--secondary)] w-[90%] text-center">
                Selected Party Members
              </p>
              <ul className="flex justify-center items-center m-6 p-0 gap-8">
                {/* PARTY MEMBER 1 */}
                {(party[0] && (
                  <li
                    className="chosen h-16 w-16 border-2 border-[var(--accent)] rounded-[10%] bg-center bg-no-repeat bg-cover list-none"
                    style={{
                      backgroundImage: `url(${party[0].icon}.png)`,
                    }}
                    onMouseEnter={() => handleHoveredHero(party[0])}
                    onClick={() => handleChangeParty(party[0])}
                  />
                )) || (
                  <li className="empty h-16 w-16 bg-[rgba(0,0,0,0.3)] border-2 border-[var(--secondary)] pointer-events-none rounded-[10%] list-none bg-center bg-no-repeat bg-cover" />
                )}
                {/* PARTY MEMBER 2 */}
                {(party[1] && (
                  <li
                    className="chosen h-16 w-16 border-2 border-[var(--accent)] rounded-[10%] bg-center bg-no-repeat bg-cover list-none"
                    style={{
                      backgroundImage: `url(${party[1].icon}.png)`,
                    }}
                    onMouseEnter={() => handleHoveredHero(party[1])}
                    onClick={() => handleChangeParty(party[1])}
                  />
                )) || (
                  <li className="empty h-16 w-16 bg-[rgba(0,0,0,0.3)] border-2 border-[var(--secondary)] pointer-events-none rounded-[10%] list-none bg-center bg-no-repeat bg-cover" />
                )}
                {/* PARTY MEMBER 3 */}
                {(party[2] && (
                  <li
                    className="chosen h-16 w-16 border-2 border-[var(--accent)] rounded-[10%] bg-center bg-no-repeat bg-cover list-none"
                    style={{
                      backgroundImage: `url(${party[2].icon}.png)`,
                    }}
                    onMouseEnter={() => handleHoveredHero(party[2])}
                    onClick={() => handleChangeParty(party[2])}
                  />
                )) || (
                  <li className="empty h-16 w-16 bg-[rgba(0,0,0,0.3)] border-2 border-[var(--secondary)] pointer-events-none rounded-[10%] list-none bg-center bg-no-repeat bg-cover" />
                )}
              </ul>
            </div>
          </div>
          <div className="right flex flex-col justify-evenly flex-wrap gap-4 items-center w-[50%] min-w-[30rem] h-full border border-[var(--secondary)] bg-[var(--primary)] rounded-lg p-4 text-center">
            {/* <HeroStats hero={hoveredElement} /> */}
          </div>
        </div>
      ) : (
        <p className="no-heroes absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
          No heroes available.
        </p>
      )}
    </div>
  );
}
