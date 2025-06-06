"use client";
import { CircleAlert, Lock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Progress } from "@/components/ui/progress";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/store/ui-slice";
import { openModal } from "@/store/ui-actions";
import { TOMES } from "@/data/tomes";

import { RootState } from "@/store";

import { Button } from "@/components/ui/button";

export default function TomeColumn() {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const tomeSlice = useSelector((state: RootState) => state.tome);

  const handleOpenTome = (tome) => {
    // update the current open tome
    dispatch(uiActions.updateActiveTome(tome));
    // Open tome modal
    openModal(dispatch, "tomesModal");
  };

  return (
    <div className="shadow-xl relative flex flex-col items-center w-1/3 h-full border-[3px] border-secondary p-4 bg-background rounded-lg hover:bg-[#33395b] transition duration-300">
      <CircleAlert
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute right-0 mr-2 text-secondary z-30"
      />

      <h1 className="text-center border-b-2 border-primary mb-4">Tomes</h1>
      <div className="w-full p-4 gap-4 overflow-y-auto scrollbar-custom">
        {tomeSlice.map((tome, index) => {
          const tomeInfo = TOMES[index];
          if (tome.unlocked) {
            const percentage = calculatePercentage(tome.questions);

            return (
              <Button
                size="lg"
                variant="secondary"
                className="w-full h-[5rem] mb-2 transition-transform duration-300 hover:scale-105"
                onClick={() => handleOpenTome(tomeInfo)}
                key={tome.name}
              >
                <div className="w-full h-full flex flex-col justify-evenly items-center flex-wrap">
                  <p className="text-black">{tome.name}</p>
                  <Progress
                    className="w-full h-1 bg-[#b0aaaa] rounded-md hover:text-black z-[0]"
                    value={percentage}
                    // max="100"
                  />
                  <p
                    className={`text-center text-md ${
                      percentage === 100 ? "text-lightgreen" : "text-black"
                    }`}
                  >
                    {percentage === 100 ? "Mastered" : `${percentage}%`}
                  </p>
                </div>
              </Button>
            );
          }

          if (!tome.unlocked) {
            return (
              <div
                key={tome.name}
                className="relative w-full h-[5rem] border-2 border-text/50 rounded-lg flex flex-col items-center justify-center transition duration-300 ease-in-out bg-primary mb-2 opacity-50 gap-1"
              >
                <h3 className="text-md font-serif text-text/50">{tome.name}</h3>
                <Lock className="" />
              </div>
            );
          }
        })}
      </div>

      {/* TIP */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isHovered
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background opacity-85 rounded-md transition-opacity duration-500" />
        <p className="relative text-[1.5rem] z-20 text-center text-white p-2 transition-opacity duration-500">
          Study tomes to learn different JavaScript concepts to aid you in spell
          casting. By successfully casting spells within a dungeon you can
          master tomes and acquire mastery points.
        </p>
      </div>
    </div>
  );
}

function calculatePercentage(questionsArray) {
  let totalQuestions = 0;
  let answeredQuestions = 0;

  questionsArray.forEach((question) => {
    totalQuestions++;
    if (question.answered) {
      answeredQuestions++;
    }
  });

  return totalQuestions > 0
    ? Math.round((answeredQuestions / totalQuestions) * 100)
    : 0;
}
