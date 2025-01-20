import { User } from "../../../entities/User/User";
import { MarkType } from "../../../features/MarkButton/MarkButton.types";

export interface ApiResponse {
    data: {
        data: SnippetResponse[];
    };
}

export interface SnippetResponse {
    id: string;
    code: string;
    language: string;
    comments: CommentsResponse[];
    marks: MarksResponse[];
    user: User;
}

interface CommentsResponse {
    id: number;
    content: string;
}

interface MarksResponse {
    id: number;
    type: MarkType;
    user: User;
}