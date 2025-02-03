import { Question } from "../../entities/Question/Question";

export interface QuestionHeaderProps {
    question: Question;
    isOwned: boolean;
};