import { User } from "../../entities/User/User";

export interface SnippetHeaderProps {
    user: User;
    language: string;
    snippetId: number;
    onDelete: () => void;
}