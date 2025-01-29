import { Comment } from "../../../../../entities/Comment/Comment";
import { Mark } from "../../../../../entities/Mark/Mark";
import { User } from "../../../../../entities/User/User";

export interface ApiResponse {
    data: {
        data: SnippetResponse[];
        meta: MetaResponse;
    };
}

export interface MetaResponse {
    itemsPerPage: number,
    totalItems: number,
    currentPage: number,
    totalPages: number,
}

export interface SnippetResponse {
    id: string;
    code: string;
    language: string;
    comments: Comment[];
    marks: MarksResponse[];
    user: User;
}

type MarksResponse = Mark