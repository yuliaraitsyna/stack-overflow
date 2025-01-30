import styles from './CommentsList.module.css';

import { List } from "@mui/material"
import { CommentsListProps } from "./CommentsList.types";
import { Comment } from "../../features/Comment/Comment";
import { CommentForm } from '../../features/CommentForm/CommentForm';
import { useState } from 'react';
import { CommentModal } from '../../features/CommentModal/CommentModal';
import { InfoModal } from '../../features/InfoModal/InfoModal';

const CommentsList: React.FC<CommentsListProps> = ({ comments, snippetId }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editCommentId, setEditCommentId] = useState<number>();
    const [successfulMessage, setSuccessfulMessage] = useState<string>('');

    const handleEdit = (id: number) => {
        setEditCommentId(id);
        setIsEditModalOpen(true);
    }

    const handleSuccessfulAction = (message: string) => {
        setSuccessfulMessage(message);
    }

    return (
        <>
            <List className={styles.list}>
                <CommentForm snippetId={snippetId} commentId={editCommentId} />
                {comments.map(comment => <Comment key={comment.id} comment={comment} snippetId={snippetId} onEditClick={handleEdit} onSuccessfulDelete={handleSuccessfulAction} />)}
            </List>
            <CommentModal 
                open={isEditModalOpen} 
                onClose={() => setIsEditModalOpen(false)} 
                commentId={editCommentId} 
                snippetId={snippetId} 
                onSuccessfulUpdate={handleSuccessfulAction}
            />
            <InfoModal open={!!successfulMessage} message={successfulMessage} type="success" />
        </>
    )
}

export { CommentsList };