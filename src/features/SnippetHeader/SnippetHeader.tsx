import styles from './SnippetHeader.module.css';

import { Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

import { SnippetHeaderProps } from './SnippetHeader.types';
import PersonIcon from '@mui/icons-material/Person';

const SnippetHeader: React.FC<SnippetHeaderProps> = ({username, language}) => {
    return (
        <div className={styles.header}>
            <PersonIcon/>
            <Typography variant='body2' className={styles.username}>{username}</Typography>
            <Box className={styles.language}>
                <CodeIcon/>
                <Typography variant='caption'>{language}</Typography>
            </Box>
        </div>
    )
}

export { SnippetHeader }