import styles from './SnippetHeader.module.css';

import { Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

import { SnippetHeaderProps } from './SnippetHeader.types';
import PersonIcon from '@mui/icons-material/Person';

const SnippetHeader: React.FC<SnippetHeaderProps> = ({username, language}) => {
    return (
        <div className={styles.header}>
            <PersonIcon/>
            <span className={styles.username}>{username}</span>
            <Box className={styles.language}>
                <CodeIcon/>
                <p>{language}</p>
            </Box>
        </div>
    )
}

export { SnippetHeader }