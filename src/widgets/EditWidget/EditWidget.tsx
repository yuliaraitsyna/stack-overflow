import styles from './EditWidget.module.css';

import { ChangePasswordForm } from '../../features/ChangePasswordForm/ChangePasswordForm';
import { ChangeUsernameForm } from '../../features/ChangeUsernameForm/ChangeUsernameForm';
import { Box, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

const EditWidget = () => {
    const {t} = useTranslation();

    return (
        <Box className={styles.container}>
            <Typography variant='body2'>{t('editProfile')}: </Typography>
            <Box className={styles.forms}>
                <ChangeUsernameForm/>
                <ChangePasswordForm/>
            </Box>
        </Box>
    )
}

export { EditWidget };