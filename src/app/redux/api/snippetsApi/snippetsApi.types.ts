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