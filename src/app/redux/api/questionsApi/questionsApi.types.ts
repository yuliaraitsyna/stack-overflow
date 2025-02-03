import { Question } from "../../../../entities/Question/Question"
import { MetaResponse } from "../snippetsApi/parseSnippets/parseSnippets.types";

export interface QuestionsResponse {
    data: {
        data: Question[];
        meta: MetaResponse;
    }
    error?: string;
};