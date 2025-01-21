import styles from './CommentButton.module.css';

import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import { Box } from '@mui/material';
import { CommentButtonProps } from './CommentButton.types';

const CommentButton: React.FC<CommentButtonProps> = ({commentsNumber}) => {
    return (
        <Box className={styles.commentButton}>
            <p>{commentsNumber}</p>
            <InsertCommentOutlinedIcon/>
        </Box>
    )
}

export { CommentButton }