import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionsState } from "./questionsSlice.types";
import { LIMITS } from "./snippetSlice.types";
import { QuestionsResponse } from "../api/questionsApi.types";

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
    }
  },
});

export const { setQuestions } = questionsSlice.actions;
export default questionsSlice;
