import { Snippet } from "../../entities/Snippet/Snippet";

export interface SnippetProps {
    snippet: Snippet;
    onSuccessfulDelete: (message: string) => void;
    onErroredDelete: (message: string) => void;
}