import { useRef } from "react";

export default function TomeAnswers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="w-[20rem] flex flex-col justify-center gap-4">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "bg-orange-300"; 
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass =
            answerState === "correct"
              ? "bg-green-400"
              : "bg-red-400";
        }

        return (
          <li key={answer} className="mb-4">
            <button
              onClick={() => onSelect(answer)}
              className={`w-full p-4 rounded-md ${
                cssClass || "bg-gray-100 hover:bg-orange-300"
              }`}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
