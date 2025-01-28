import { useTranslation } from 'react-i18next';
import styles from './ChangeUsernameForm.module.css';

import { Box, Button, TextField, Typography } from "@mui/material";

const ChangeUsernameForm = () => {
    const {t} = useTranslation();

    return (
        <Box className={styles.container}>
            <Typography variant='body2'>{t('changeUsername')}</Typography>
            <form>
                <TextField label={t('newUsername')} />
                <Button color='success' variant='contained' type='submit'>{t('save')}</Button>
            </form>
        </Box>
    )
}

export { ChangeUsernameForm };