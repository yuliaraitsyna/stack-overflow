import styles from './Welcomer.module.css';

import { Box, Typography } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import { useTranslation } from 'react-i18next';

const Welcomer = () => {
    const {t} = useTranslation();
    
    return (
        <Box className={styles.container}>
                <Typography variant='h5' className={styles.header}>{t('welcome')} {t('to')} CODELANG!</Typography>
                <CodeIcon className={styles.icon} />
        </Box>
    )
}

export { Welcomer }