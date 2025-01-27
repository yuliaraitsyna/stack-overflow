import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'
import CodeIcon from '@mui/icons-material/Code';
import TranslateIcon from '@mui/icons-material/Translate';
import { AuthButton } from '../../features/AuthButton/AuthButton';
import { useTranslation } from "react-i18next";
import { Language } from './Header.types';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { AskQuestionButton } from '../../features/AskQuestionButton/AskQuestionButton';
import { QuestionModal } from '../QuestionModal/QuestionModal';

const Header = () => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<Language>(language as Language);

    const handleLanguageChange = () => {
        const newLanguage: Language = currentLanguage === 'en' ? 'de' : 'en'
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    return (
        <header className={styles.header}>
            <Link to="/"><CodeIcon className={styles.icon} /></Link>
            <Link className={styles.logo} to="/">
                <Typography variant="h6">CODELANG</Typography>
            </Link>
            <Box className={styles.buttons}>
                {location.pathname === '/questions' && <AskQuestionButton onClick={handleOpenModal} />}
                <AuthButton></AuthButton>
            </Box>
            <div className={styles.language}  onClick={handleLanguageChange}>
                <TranslateIcon className={styles.languageIcon} />
                <p className={styles.logo}>{currentLanguage}</p>
            </div>
            <QuestionModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    )
}

export { Header }