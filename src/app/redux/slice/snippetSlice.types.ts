import { Snippet } from "../../../entities/Snippet/Snippet";

export const LIMITS = [1, 5, 10];

export interface SnippetState {
    totalPages: number,
    currentPage: number,
    limit: number,
    snippets: Snippet[];
}