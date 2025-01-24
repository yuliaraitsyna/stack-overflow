import { Box, Typography } from '@mui/material';
import styles from './PostSnippetPage.module.css';
import { LanguageSelect } from '../../features/LanguageSelect/LanguageSelect';

const PostSnippetPage = () => {
    return (
        <Box className={styles.container}>
            <Typography className={styles.header} variant='h5'>Create new snippet!</Typography>
            <LanguageSelect />
        </Box>
    )
}

export { PostSnippetPage };