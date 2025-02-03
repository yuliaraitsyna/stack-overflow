import { Snippet } from "../../../entities/Snippet/Snippet";

export const LIMITS = [5, 10, 15];

export interface SnippetState {
    totalPages: number,
    currentPage: number,
    limit: number,
    snippets: Snippet[];
}