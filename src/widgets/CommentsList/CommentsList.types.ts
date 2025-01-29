import { Comment } from '../../entities/Comment/Comment';

export interface CommentsListProps {
    comments: Comment[];
    snippetId: number;
}