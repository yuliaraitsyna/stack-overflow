import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import CodeIcon from '@mui/icons-material/Code';
import TranslateIcon from '@mui/icons-material/Translate';
import { AuthButton } from '../../features/AuthButton/AuthButton';
import { useTranslation } from "react-i18next";
import { Language } from './Header.types';
import { useState } from 'react';
import { Typography } from '@mui/material';

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
            <Link className={styles.logo} to="/">
                <Typography variant="h6">CODELANG</Typography>
            </Link>
            <AuthButton></AuthButton>
            <div className={styles.language}  onClick={handleLanguageChange}>
                <TranslateIcon className={styles.languageIcon} />
                <p className={styles.logo}>{currentLanguage}</p>
            </div>
        </header>
    )
}

export { Header }