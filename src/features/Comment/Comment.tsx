import styles from "./Comment.module.css";

import { Box, Typography } from "@mui/material"
import { CommentProps } from "./Comment.types";

const Comment: React.FC<CommentProps> = ({ comment }) => {
    return (
        <Box className={styles.comment}>
            <Typography variant="body2">{comment.content}</Typography>
        </Box>
    )
}

export { Comment };