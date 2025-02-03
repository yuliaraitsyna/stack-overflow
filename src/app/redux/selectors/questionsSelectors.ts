import { RootState } from "../store/store";

const questionsSelector = (state: RootState) => state.questions.questions;

export { questionsSelector };