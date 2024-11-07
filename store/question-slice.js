import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: [
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
  ],
  reducers: {
    master(state, action) {
      // action.payload is the index of the tome in the state array
      state[action.payload].mastered = true;
    },
    answerCorrectly(state, action) {
      // action.payload is the index of the tome in the state array
      const tomeIndex = action.payload.tomeIndex;
      const questionIndex = action.payload.questionIndex;
      state[tomeIndex].questions[questionIndex] = true;
    },
  },
});

export const questionActions = questionSlice.actions;

export default questionSlice;
