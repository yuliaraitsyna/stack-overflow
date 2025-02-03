import styles from './CommentForm.module.css';

import { Button, TextField } from "@mui/material"
import AddCommentIcon from '@mui/icons-material/AddComment';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAddCommentMutation } from '../../app/redux/api/snippetsApi/snippetsApi';
import { CommentFormProps } from './CommentForm.types';
import { InfoModal } from '../InfoModal/InfoModal';
import { addComment as addCommentToSnippet} from '../../app/redux/slices/snippetsSlice/snippetsSlice';
import { RootState } from '../../app/redux/store/store';

const CommentForm: React.FC<CommentFormProps> = ({snippetId, commentId}) => {
    const commentRef = useRef<HTMLInputElement | null>(null);
    const comment = useSelector((state: RootState) => state.snippets.snippets.find(snippet => snippet.id === snippetId)?.comments.find(comment => comment.id === commentId));
    const [addComment] = useAddCommentMutation();
    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if(comment) {
            commentRef.current?.focus();
            commentRef.current!.value = comment.content;
        }
    }, [comment]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const content = commentRef.current?.value;

        try {
            if(content) {
                await addComment({content, snippetId})
                .unwrap()
                .catch(error => {throw new Error(error.message)})
                .then(response => {
                    dispatch(addCommentToSnippet({
                        comment: {
                            id: response.data.id,
                            content: response.data.content,
                            user: response.data.user,
                        },
                        snippetId,
                    }));
                    commentRef.current!.value = '';
                })
            }
            else throw new Error('Comment cannot be empty');
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
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField inputRef={commentRef} multiline rows={2} fullWidth />
            <Button variant="contained" color="success" type="submit" className={styles.button}>
                <AddCommentIcon color="inherit" />
            </Button>
            <InfoModal message={errorMessage} type="error" open={!!errorMessage} />
        </form>
    )
}

export { CommentForm };