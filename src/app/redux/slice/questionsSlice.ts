import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionsState } from "./questionsSlice.types";
import { LIMITS } from "./snippetSlice.types";
import { QuestionsResponse } from "../api/questionsApi.types";
import { Question } from "../../../entities/Question/Question";

const initialState: QuestionsState = {
  questions: [],
  totalPages: 1,
  currentPage: 1,
  limit: LIMITS[0],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<QuestionsResponse>) {
        state.questions = action.payload.data.data;
        state.totalPages = action.payload.data.meta.totalPages;
        state.currentPage = action.payload.data.meta.currentPage;
    },

    addQuestion(state, action: PayloadAction<Question>) {
        state.questions.push(action.payload);
    }
  },
});

export const { setQuestions, addQuestion } = questionsSlice.actions;
export default questionsSlice;
