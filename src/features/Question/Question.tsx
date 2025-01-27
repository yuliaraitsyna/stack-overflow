import styles from './Question.module.css';

import CodeMirror from "@uiw/react-codemirror";
import { QuestionHeader } from "../QuestionHeader/QuestionHeader";
import { QuestionProps } from "./Question.types";
import { Box } from "@mui/material";

const Question: React.FC<QuestionProps> = ({question}) => {
    return (
        <Box className={styles.question}>
            <QuestionHeader question={question} />
            {question.attachedCode && <CodeMirror value={question.attachedCode} height='50px' readOnly />}
        </Box>
    )
}

export { Question };