import styles from './CommentButton.module.css';

import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

import { Box, Typography } from '@mui/material';
import { CommentButtonProps } from './CommentButton.types';

const CommentButton: React.FC<CommentButtonProps> = ({commentsNumber}) => {
    return (
        <Box className={styles.commentButton}>
            <Typography variant='body2'>{commentsNumber}</Typography>
            <InsertCommentOutlinedIcon/>
        </Box>
    )
}

export { CommentButton }