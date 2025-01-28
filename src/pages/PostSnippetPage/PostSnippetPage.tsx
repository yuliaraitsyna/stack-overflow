import styles from './PostSnippetPage.module.css';

import { Box, Typography } from '@mui/material';
import { PostSnippetForm } from '../../widgets/PostSnippetForm/PostSnippetForm';
import { useTranslation } from 'react-i18next';

const PostSnippetPage = () => {
    const {t} = useTranslation();

    return (
        <Box className={styles.container}>
            <Typography className={styles.header} variant='h5'>{t('createSnippetHeader')}</Typography>
            <PostSnippetForm />
        </Box>
    )
}

export { PostSnippetPage };