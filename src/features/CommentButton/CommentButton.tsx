import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import { Box } from '@mui/material';
import { CommentButtonProps } from './CommentButton.types';

const CommentButton: React.FC<CommentButtonProps> = ({commentsNumber}) => {
    return (
        <Box>
            <p>{commentsNumber}</p>
            <InsertCommentOutlinedIcon/>
        </Box>
    )
}

export { CommentButton }