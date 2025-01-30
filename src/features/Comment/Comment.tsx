import styles from "./Comment.module.css";

import { Box, Typography } from "@mui/material"
import { CommentProps } from "./Comment.types";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ConfirmModal } from "../../widgets/ConfirmModal/ConfirmModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDeleteCommentMutation } from "../../app/redux/api/snippetsApi/snippetsApi";
import { removeComment } from "../../app/redux/slices/snippetsSlice/snippetsSlice";
import { InfoModal } from "../InfoModal/InfoModal";

const Comment: React.FC<CommentProps> = ({ comment, snippetId, onEditClick, onSuccessfulDelete }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    
    const [deleteComment] = useDeleteCommentMutation();
    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleDelete = async () => {
        try {
            await deleteComment(comment.id)
            .unwrap()
            .catch(error => {throw new Error(error.message)})
            .then(() => {
                dispatch(removeComment({commentId: comment.id, snippetId}));
                setIsDeleteModalOpen(false);
                onSuccessfulDelete('Comment has been deleted successfully');
            })
        }
        catch(error) {
            if(error instanceof Error) {
                setErrorMessage(error.message);
            }
            else {
                setErrorMessage('Something went wrong');
            }
        }
    }

    return (
        <>
            <Box className={styles.comment}>
                <Typography variant="body2">{comment.content}</Typography>
                <Box className={styles.buttons}>
                    <EditIcon color='primary' onClick={() => onEditClick(comment.id)} />
                    <DeleteIcon color='error' onClick={() => setIsDeleteModalOpen(true)} />
                </Box>
            </Box>
            <ConfirmModal 
                message='Are you sure you want to delete this comment?' 
                open={isDeleteModalOpen} 
                onClose={() => setIsDeleteModalOpen(false)} 
                onConfirm={handleDelete}
            />
            <InfoModal open={!!errorMessage} message={errorMessage} type="error" />
        </>
    )
}

export { Comment };
