import { Snippet } from "../../../../entities/Snippet/Snippet";

export const LIMITS = [5, 10, 15];

export interface SnippetsState {
    totalPages: number,
    currentPage: number,
    limit: number,
    snippets: Snippet[];
}