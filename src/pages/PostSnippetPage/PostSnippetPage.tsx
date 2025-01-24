import { Box, Typography } from '@mui/material';
import styles from './PostSnippetPage.module.css';
import { PostSnippetForm } from '../../widgets/PostSnippetForm/PostSnippetForm';

const PostSnippetPage = () => {
    return (
        <Box className={styles.container}>
            <Typography className={styles.header} variant='h5'>Create new snippet!</Typography>
            <PostSnippetForm />
        </Box>
    )
}

export { PostSnippetPage };