import styles from './QuestionHeader.module.css';

import { Box, Typography } from "@mui/material";
import { QuestionHeaderProps } from "./QuestionHeader.types";
import EditIcon from '@mui/icons-material/Edit';
import { QuestionModal } from '../../widgets/QuestionModal/QuestionModal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const QuestionHeader: React.FC<QuestionHeaderProps> = ({question, isOwned}) => {
    const {t} = useTranslation();
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    return (
        <>
            <Box className={styles.header}>
                <span className={styles.icon}>
                    <img src="/public/target.png" />
                </span>
                <Box className={styles.headerContent}>
                    <Typography variant='body1'>{question.title}</Typography>
                    <Typography variant='body2'>{t('askedBy')}
                        <Typography variant='body2'>{question.user.username}</Typography>
                    </Typography>
                </Box>
                <Box justifyContent={'flex-end'} display='flex'>
                    {isOwned && <EditIcon color='primary' onClick={handleOpenModal} />}
                </Box>
            </Box>
            <QuestionModal open={isModalOpen} onClose={() => setIsModalOpen(false)} type='edit' question={question}/>
        </>
    )
}

export { QuestionHeader };