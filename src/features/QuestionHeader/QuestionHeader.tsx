import styles from './QuestionHeader.module.css';

import { Box, Typography } from "@mui/material";
import { QuestionHeaderProps } from "./QuestionHeader.types";

const QuestionHeader: React.FC<QuestionHeaderProps> = ({question}) => {
    return (
        <Box className={styles.header}>
            <span className={styles.icon}>
                <img src="/public/target.png" />
            </span>
            <Box className={styles.headerContent}>
                <Typography variant='body1'>{question.title}</Typography>
                <Typography variant='body2'>asked by :
                     <Typography variant='body2'>{question.user.username}</Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export { QuestionHeader };