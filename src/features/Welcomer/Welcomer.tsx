import styles from './Welcomer.module.css';

import { Box } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import { useTranslation } from 'react-i18next';

const Welcomer = () => {
    const {t} = useTranslation();
    
    return (
        <Box className={styles.container}>
                <h2 className={styles.header}>{t('welcome')} {t('to')} CODELANG!</h2>
                <CodeIcon className={styles.icon} />
        </Box>
    )
}

export { Welcomer }