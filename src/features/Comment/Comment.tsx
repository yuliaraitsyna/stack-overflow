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

const Comment: React.FC<CommentProps> = ({ comment, snippetId, onEditClick, onSuccessfulDelete, onErroredDelete }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    
    const [deleteComment] = useDeleteCommentMutation();
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            await deleteComment(comment.id)
            .unwrap()
            .then(() => {
                dispatch(removeComment({commentId: comment.id, snippetId}));
                setIsDeleteModalOpen(false);
                onSuccessfulDelete('Comment has been deleted successfully');
            })
            .catch(error => {throw new Error(error.message)})
        }
        catch(error) {
            setIsDeleteModalOpen(false);

            if(error instanceof Error) {
                onErroredDelete(error.message);
            }
            else {
                onErroredDelete('Something went wrong');
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
        </>
    )
}

export { Comment };
