import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionsState } from "./questionsSlice.types";
import { LIMITS } from "../snippetsSlice/snippetsSlice.types";
import { QuestionsResponse } from "../../api/questionsApi/questionsApi.types";
import { Question } from "../../../../entities/Question/Question";

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
    },

    editQuestion(state, action: PayloadAction<Pick<Question, "id" | "title" | "description" | "attachedCode">>) {
        const index = state.questions.findIndex(question => question.id === action.payload.id);
        if (index !== -1) {
            state.questions[index] = {...state.questions[index], ...action.payload};
        }
        else throw new Error("Question wasn't found");
    },
  },
});

const questionsReducer = questionsSlice.reducer;

export const { setQuestions, addQuestion, editQuestion } = questionsSlice.actions;
export default questionsReducer;
