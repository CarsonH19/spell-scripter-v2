import store from "../../../store/index";

import classes from "./QTE.module.css";

import Question from "./Question";
// import { QUESTIONS } from "@/data/questions";

export default function QuickTimeEventModal() {
  const { questionIndex, tomeIndex } = getRandomQuestionIndices();
  return (
    <div className={classes.quiz}>
      <Question questionIndex={questionIndex} tomeIndex={tomeIndex} />
    </div>
  );
}

function getRandomQuestionIndices() {
  const tomes = store.getState().tome;
  let tomeIndex;
  let tomeIndices = [];
  let questionIndices = [];
  let isReviewQuestion;
  let questions;
  let questionIndex;
  let loop;

  while (!loop) {
    questionIndices = [];
    isReviewQuestion = tomes[0].mastered ? Math.random() < 0.4 : null;

    // Finding the tomeIndex
    if (isReviewQuestion) {
      // Collect indices of all unlocked tomes
      for (let i = 0; i < tomes.length; i++) {
        if (tomes[i].unlocked) {
          tomeIndices.push(i);
        }
      }

      // Find random tome for review question
      tomeIndex = tomeIndices[Math.floor(Math.random() * tomeIndices.length)];
    } else {
      // Find indices of unlocked & unmastered tome
      for (let i = 0; i < tomes.length; i++) {
        if (!tomes[i].mastered && tomes[i].unlocked) {
          tomeIndex = i;
        }
      }
    }

    // No tomes available, retry
    if (!tomeIndex && tomeIndex !== 0) {
      continue;
    }

    // Select the questions array from the tomeIndex
    questions = tomes[tomeIndex].questions;

    // Finding the questionIndices
    if (isReviewQuestion) {
      // Collect indices for all answered questions
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].answered) {
          questionIndices.push(i);
        }
      }
    } else {
      // Collect indices for all unanswered questions
      for (let i = 0; i < questions.length; i++) {
        if (!questions[i].answered) {
          questionIndices.push(i);
        }
      }
    }

    if (questionIndices.length === 0) {
      continue; // No questions available, retry
    }

    // Generate a random index from the questionIndices array
    const randomQuestionIndex =
      questionIndices[Math.floor(Math.random() * questionIndices.length)];

    questionIndex = randomQuestionIndex;

    // Exit the while loop
    loop = true;
  }

  // console.log(QUESTIONS[tomeIndex].questions[questionIndex]);
  // console.log(tomes[tomeIndex].questions[questionIndex]);

  // Return tomeIndex & questionIndex
  return {
    questionIndex,
    tomeIndex,
  };
}
