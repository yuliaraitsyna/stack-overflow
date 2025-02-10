import styles from './Question.module.css';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CodeMirror from "@uiw/react-codemirror";
import { QuestionHeader } from "../QuestionHeader/QuestionHeader";
import { QuestionProps } from "./Question.types";
import { Box } from "@mui/material";
import { FC, useState } from 'react';

const Question: FC<QuestionProps> = ({question, isOwned}) => {
    const [isShownCode, setIsShownCode] = useState(false);
    
    const handleToggleCode = () => {
        setIsShownCode(prev => !prev);
    }
    
    return (
        <Box className={styles.question}>
            <QuestionHeader question={question} isOwned={isOwned} />
            {
                question.attachedCode && 
                <>
                    <RemoveRedEyeIcon color='primary' onClick={handleToggleCode} className={styles.showIcon} />
                    {isShownCode && <CodeMirror value={question.attachedCode} height='50px' readOnly />}
                </>    
            }
        </Box>
    )
}

export { Question };