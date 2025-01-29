import styles from './CommentButton.module.css';

import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import { Box, Typography } from '@mui/material';
import { CommentButtonProps } from './CommentButton.types';
import { useNavigate } from 'react-router';

const CommentButton: React.FC<CommentButtonProps> = ({commentsNumber, snippetId}) => {
    const navigate = useNavigate();

    const handleOpenSnippet = () => {
        navigate(`/snippet/${snippetId}`);
    }

    return (
        <Box className={styles.commentButton} onClick={handleOpenSnippet}>
            <Typography variant='body2'>{commentsNumber}</Typography>
            <InsertCommentOutlinedIcon/>
        </Box>
    )
}

export { CommentButton }