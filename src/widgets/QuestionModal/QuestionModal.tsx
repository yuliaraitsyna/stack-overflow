import styles from './QuestionModal.module.css';

import { Box, Typography } from "@mui/material";
import { createPortal } from "react-dom";
import { QuestionModalProps } from "./QuestionModal.types";
import CloseIcon from '@mui/icons-material/Close';
import { QuestionForm } from '../../features/QuestionForm/QuestionForm';

const QuestionModal: React.FC<QuestionModalProps> = ({open, onClose, question, type}) => {

    const handleSubmit = () => {
        onClose();
    }

    return (
        <>
            {
                open && createPortal(
                    <>
                        <div className={styles.overlay} onClick={onClose}></div>
                        <Box className={styles.modal}>
                            <Typography variant='h5'>Ask a question</Typography>
                            <CloseIcon className={styles.closeButton} onClick={onClose} />
                            <QuestionForm type={type} onSubmit={handleSubmit} question={question} />
                        </Box>
                    </>,
                    document.body
                )
            }
        </>
    )
}

export { QuestionModal };