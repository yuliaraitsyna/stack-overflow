import { Comment } from "../../entities/Comment/Comment";

export interface CommentProps {
    comment: Comment;
    snippetId: number;
    onEditClick: (id: number) => void;
    onSuccessfulDelete: (message: string) => void;
}