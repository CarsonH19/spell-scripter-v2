import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for the questions and tomes
interface Question {
  id: string;
  answered: boolean;
}

interface Tome {
  name: string;
  unlocked: boolean;
  mastered: boolean;
  questions: Question[];
}

interface AnswerQuestionPayload {
  tomeIndex: number;
  questionIndex: number;
}

interface MasterPayload {
  tomeIndex: number;
}

// Define initial state type
const initialState: Tome[] = [
  {
    name: "Introduction",
    unlocked: true,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "Comments",
    unlocked: false,
    mastered: false,
    questions: Array(6).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "Simple Operations",
    unlocked: false,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "Variables",
    unlocked: false,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "Data Types",
    unlocked: false,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "Arithmetic Operators",
    unlocked: false,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "Assignment Operators",
    unlocked: false,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "Strings",
    unlocked: false,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "Template Literals",
    unlocked: false,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
  {
    name: "String Concatenation",
    unlocked: false,
    mastered: false,
    questions: Array(10).fill({ id: '', answered: false }).map((_, idx) => ({ id: `q${idx + 1}`, answered: false })),
  },
];

// Create the slice
const tomeSlice = createSlice({
  name: 'tome',
  initialState,
  reducers: {
    complete(state, action: PayloadAction<number>) {
      // action.payload is the index of the tome in the state array
      state[action.payload].mastered = true;
    },
    answerQuestion(state, action: PayloadAction<AnswerQuestionPayload>) {
      // action.payload contains tomeIndex and questionIndex
      const { tomeIndex, questionIndex } = action.payload;
      state[tomeIndex].questions[questionIndex].answered = true;
    },
    master(state, action: PayloadAction<MasterPayload>) {
      const { tomeIndex } = action.payload;

      // Check if all questions are answered
      const allAnswered = state[tomeIndex].questions.every((q) => q.answered);

      if (allAnswered) {
        state[tomeIndex].mastered = true;
        if (tomeIndex + 1 < state.length) {
          state[tomeIndex + 1].unlocked = true;
        }
      }
    },
  },
});

export const tomeActions = tomeSlice.actions;
export default tomeSlice.reducer;
