import { User } from "../../../../entities/User/User";
import { MetaResponse } from "../../api/snippetsApi/parseSnippets/parseSnippets.types";

export interface UsersState {
    users: User[];
    totalPages: number;
    currentPage: number;
    limit: number;
}

export interface UsersResponse {
    data: {
        data: User[];
        meta: MetaResponse;
    },
}