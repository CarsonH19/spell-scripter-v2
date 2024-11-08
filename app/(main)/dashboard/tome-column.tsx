"use client";

import { CircleAlert } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "@/store/ui-slice";
import { openModal } from "@/store/ui-actions";
import { TOMES } from "@/data/tomes";

import { RootState } from "@/store";

export default function TomeColumn() {
  const dispatch = useDispatch();
  const tomeSlice = useSelector((state: RootState) => state.tome);

  const handleOpenTome = (tome) => {
    console.log(tome);
    // update the current open tome
    dispatch(uiActions.updateActiveTome(tome));
    // Open tome modal
    openModal(dispatch, "tomesModal");
  };

  return (
    <div className="shadow-xl relative flex flex-col items-center w-1/3 h-full border-3 border-secondary p-4 bg-background rounded-lg hover:bg-[#33395b] transition duration-300">
      <Tooltip>
        <TooltipTrigger>
          <CircleAlert className="absolute right-0 mr-2 text-secondary" />
        </TooltipTrigger>
        <TooltipContent
          title="What Are Tomes?"
          containerStyles="tomes-info-container"
          position="tomes-info"
          detailOne="Study tomes to learn different JavaScript concepts to aid you in spell casting. By successfully casting spells within a dungeon you can master tomes and acquire mastery points."
        />
      </Tooltip>
      <h1 className="text-center border-b-2 border-primary mb-4">Tomes</h1>
      <div className="w-full p-4 gap-4 overflow-y-auto">
        {tomeSlice.map((tome, index) => {
          const tomeInfo = TOMES[index];
          if (tome.unlocked) {
            const percentage = calculatePercentage(tome.questions);

            return (
              <div
                key={tome.name}
                className="relative w-full h-24 border-2 border-accent rounded-lg flex flex-col items-center justify-center gap-0 transition duration-300 ease-in-out bg-primary mb-2 hover:bg-accent hover:cursor-pointer"
                onClick={() => handleOpenTome(tomeInfo)}
              >
                <h3 className="text-lg font-semibold font-serif hover:text-primary transition-colors duration-300">
                  {tome.name}
                </h3>
                {/* <div className="w-4/5 h-1 bg-[#b0aaaa] rounded-md shadow-inner overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-100 rounded-md"
                    style={{ width: `${percentage}%` }}
                  />
                </div> */}
                <Progress
                  className="w-4/5 h-1 bg-[#b0aaaa] rounded-md"
                  value={percentage}
                  // max="100"
                />
                <p
                  className={`text-center text-lg ${
                    percentage === 100 ? "text-lightgreen" : "text-lightcoral"
                  }`}
                >
                  {percentage === 100 ? "Mastered" : `${percentage}%`}
                </p>
              </div>
            );
          }
          return null;
        })}
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
