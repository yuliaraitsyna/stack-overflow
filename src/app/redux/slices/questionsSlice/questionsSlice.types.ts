import { Question } from "../../../../entities/Question/Question";

export interface QuestionsState {
    questions: Question[];
    totalPages: number;
    currentPage: number;
    limit: number;
}