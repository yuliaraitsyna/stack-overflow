import styles from './QuestionsPage.module.css';

import { QuestionList } from "../../widgets/QuestionList/QuestionList"
import { Box } from '@mui/material';

const QuestionsPage = () => {
    return (
        <Box className={styles.container}>
            <QuestionList />
        </Box>
    )
}

export { QuestionsPage };