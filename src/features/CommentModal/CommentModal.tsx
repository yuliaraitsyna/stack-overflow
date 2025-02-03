import styles from './CommentModal.module.css';

import { Box, Button, TextField, Typography } from "@mui/material";
import { createPortal } from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { CommentModalProps } from './CommentModal.types';
import { useUpdateCommentMutation } from '../../app/redux/api/snippetsApi/snippetsApi';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../app/redux/slices/snippetsSlice/snippetsSlice';
import { commentSelector } from '../../app/redux/selectors/snippetsSelectors';

const CommentModal: React.FC<CommentModalProps> = ({open, onClose, commentId, snippetId, onSuccessfulUpdate, onErroredUpdate}) => {
    const {t} = useTranslation();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [updateCommentMutation] = useUpdateCommentMutation();
    const comment = useSelector(commentSelector(snippetId, commentId));

    const dispatch = useDispatch();

    useEffect(() => {
        if(comment) {
            inputRef.current?.focus();
            inputRef.current!.value = comment.content;
        }
    }, [comment]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const content = inputRef.current?.value;

            if(!commentId || !content || !snippetId) {
                throw new Error('Comment cannot be empty');
            }

            await updateCommentMutation({commentId, content})
            .unwrap()
            .catch(error => {throw new Error(error.message)})
            .then(() => {
                dispatch(updateComment({snippetId, commentId, content}));
                onSuccessfulUpdate("Comment has been updated successfully");
                onClose();
            });
        }
        catch(error) {
            if(error instanceof Error) {
                onErroredUpdate(error.message);
            }
            else {
                onErroredUpdate('Something went wrong');
            }
        }
    }

    return (
        <>
            {
                open && createPortal(
                    <>
                        <div className={styles.overlay} onClick={onClose}></div>
                        <Box className={styles.modal}>
                            <Typography variant='h5'>{t('editComment')}</Typography>
                            <CloseIcon className={styles.closeButton} onClick={onClose} />
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <TextField inputRef={inputRef} fullWidth multiline rows={4} />
                                <Button type='submit' variant='contained'>{t('save')}</Button>
                            </form>
                        </Box>
                    </>,
                    document.body
                )
            }
        </>
    )
}

export { CommentModal };
