import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import CodeIcon from '@mui/icons-material/Code';
import TranslateIcon from '@mui/icons-material/Translate';
import { AuthButton } from '../../features/AuthButton/AuthButton';
import { useTranslation } from "react-i18next";
import { Typography } from '@mui/material';
import { Language } from './Header.types';
import { useState } from 'react';

const Header = () => {
    const { i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<Language>(language as Language);

    const handleLanguageChange = () => {
        const newLanguage: Language = currentLanguage === 'en' ? 'de' : 'en'
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }
    return (
        <header className={styles.header}>
            <Link to="/"><CodeIcon className={styles.icon} /></Link>
            <p className={styles.logo}>CODELANG</p>
            <AuthButton></AuthButton>
            <div className={styles.language}  onClick={handleLanguageChange}>
                <TranslateIcon className={styles.languageIcon} />
                <Typography className={styles.logo}>{currentLanguage}</Typography>
            </div>
        </header>
    )
}

export { Header }