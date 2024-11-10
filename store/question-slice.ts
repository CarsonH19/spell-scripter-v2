import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a question
interface Question {
  id: string;
  answered: boolean;
}

// Define the structure of a tome (lesson or section)
interface Tome {
  name: string;
  mastered: boolean;
  questions: Question[];
}

// Define the state structure
type QuestionState = Tome[];

// Define the payload for the answerCorrectly action
interface AnswerCorrectlyPayload {
  tomeIndex: number;
  questionIndex: number;
}

const initialState: QuestionState = [
  {
    name: "Introduction",
    mastered: false,
    questions: [
      { id: "q1", answered: false },
      { id: "q2", answered: false },
      { id: "q3", answered: false },
    ],
  },
  {
    name: "JavaScript in HTML",
    mastered: false,
    questions: [
      { id: "q1", answered: false },
      { id: "q2", answered: false },
      { id: "q3", answered: false },
    ],
  },
  {
    name: "Simple Operations",
    mastered: false,
    questions: [
      { id: "q1", answered: false },
      { id: "q2", answered: false },
      { id: "q3", answered: false },
    ],
  },
];

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    master(state, action: PayloadAction<number>) {
      // action.payload is the index of the tome in the state array
      state[action.payload].mastered = true;
    },
    answerCorrectly(state, action: PayloadAction<AnswerCorrectlyPayload>) {
      // action.payload is the index of the tome and question in the state array
      const { tomeIndex, questionIndex } = action.payload;
      state[tomeIndex].questions[questionIndex].answered = true;
    },
  },
});

export const questionActions = questionSlice.actions;

export default questionSlice.reducer;
