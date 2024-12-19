import { useState } from "react";
import classes from "./QTE.module.css";
import QuestionTimer from "./QuestionTimer.jsx";
import { CopyBlock, dracula } from "react-code-blocks";
import Answers from "./Answers.jsx";
import { setResult } from "@/util/cast-spell";
import { useDispatch } from "react-redux";
import CodeEditor from "@/components/code-editor/code-editor";
import { QUESTIONS } from "@/data/questions";
import { tomeActions } from "@/store/tome-slice";
import { dungeonActions } from "@/store/dungeon-slice";
import playSoundEffect from "@/util/audio-util";

export default function Question({ questionIndex, tomeIndex }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const dispatch = useDispatch();

  const question = QUESTIONS[tomeIndex].questions[questionIndex];
  let timer = 30000;

  // if (answer.selectedAnswer) {
  //   timer = 1000;
  // }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    // setTimeout(() => {
    const isCorrect = question.answers[0] === selectedAnswer;

    if (isCorrect) {
      // Audio
      playSoundEffect(false, "misc", "correct");
      // Mark question as answered
      dispatch(tomeActions.answerQuestion({ tomeIndex, questionIndex }));

      // // Check if a new tome should be unlocked (50%)
      // dispatch(tomeActions.unlock({ tomeIndex }));

      // Unlock next tome and master current tome at the same time
      // Check if the tome has been mastered (100%)
      dispatch(tomeActions.master({ tomeIndex }));
    }

    // Check if answer is wrong and increment threat
    if (!isCorrect) {
      // Audio
      playSoundEffect(false, "misc", "incorrect");

      dispatch(dungeonActions.addThreat(1));
    }

    setAnswer({
      selectedAnswer,
      isCorrect,
    });

    setTimeout(() => {
      setResult(dispatch, isCorrect);
    }, 2000);
    // }, 1000);
  }

  function handleNoAnswer() {
    setAnswer({
      selectedAnswer: null,
      isCorrect: false,
    });

    playSoundEffect(false, "misc", "incorrect");
    dispatch(dungeonActions.addThreat(1));
    setResult(dispatch, false);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div className={classes.question}>
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? handleNoAnswer : null}
        mode={answerState}
      />
      <div className={classes.container}>
        <div className={classes.left}>
          {/* <h1>{QUESTIONS[tomeIndex].name}</h1> */}
          <p>{question.text}</p>
          {question.code && (
            <CodeEditor key={question.text} code={question.code} />
          )}
          {/* {question.code && (
            <div className={classes["code-block"]}>
              {question.code.map((code, index) => (
                <Code className={classes.code} key={index}>
                  {code}
                </Code>
              ))}
            </div>
          )} */}
        </div>
        <div className={classes.right}>
          <Answers
            answers={question.answers}
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
          />
        </div>
      </div>
    </div>
  );
}

// pageContent = (
//   <div className={classes.content}>
//     <h2>Question</h2>
//     <h3>{tome.lesson[index].question}</h3>
//     {tome.lesson[index].js && (
//       <div className={classes["code-block"]}>
//         {tome.lesson[index].js.map((code, index) => (
//           <Code className={classes.code} key={index}>{code}</Code>
//         ))}
//       </div>
//     )}
//     <TomeQuestion answers={tome.lesson[index].answers} />
//   </div>
// );
