import { useState } from "react";
import TomeAnswers from "./tome-answers";

export default function TomeQuestion({ answers }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      const isCorrect = answers[0] === selectedAnswer;

      setAnswer({
        selectedAnswer,
        isCorrect,
      });
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div className="flex justify-center items-start h-full w-full p-4">
      <TomeAnswers
        answers={answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
