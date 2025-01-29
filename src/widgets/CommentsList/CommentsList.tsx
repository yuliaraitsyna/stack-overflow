import styles from './CommentsList.module.css';

import { List } from "@mui/material"
import { CommentsListProps } from "./CommentsList.types";
import { Comment } from "../../features/Comment/Comment";
import { CommentForm } from '../../features/CommentForm/CommentForm';

const CommentsList: React.FC<CommentsListProps> = ({ comments, snippetId }) => {
    return (
        <List className={styles.list}>
            <CommentForm snippetId={snippetId} />
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </List>
    )
}

export { CommentsList };