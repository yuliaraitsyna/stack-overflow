import { Answer } from "../Answer/Answer";
import { User } from "../User/User";

export interface Question {
    id: number;
    title: string;
    description: string;
    attachedCode: string;
    answers: Answer[];
    user: User;
    isResolved: boolean;
}