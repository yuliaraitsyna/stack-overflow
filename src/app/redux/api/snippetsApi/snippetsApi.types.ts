import { Mark } from "../../../../entities/Mark/Mark";
import { Snippet } from "../../../../entities/Snippet/Snippet";
import { User } from "../../../../entities/User/User";

export interface AddCommentResponse {
    data: {
        id: number;
        content: string;
        snippet: Snippet;
        user: User;
    }
}

export interface AddMarkResponse {
    data: {
        type: Mark['type'];
        snippet: Partial<Snippet>;
        user: User;
        id: number;
    }
}

export interface AddSnippetResponse {
    data: {
        code: string;
        language: string;
        user: User;
        id: number;
    }
}