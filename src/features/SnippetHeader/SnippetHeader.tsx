import styles from './SnippetHeader.module.css';

import { Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import EditIcon from '@mui/icons-material/Edit';
import { SnippetHeaderProps } from './SnippetHeader.types';
import PersonIcon from '@mui/icons-material/Person';
import { RootState } from '../../app/redux/store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const SnippetHeader: React.FC<SnippetHeaderProps> = ({user: snippetUser, language, snippetId}) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();

    const handleEditSnippet = () => {
        navigate(`/edit_snippet/${snippetId}`);
    }

    return (
        <div className={styles.header}>
            <PersonIcon/>
            <Typography variant='body2' className={styles.username}>{snippetUser.username}</Typography>
            <Box className={styles.language}>
                <CodeIcon/>
                <Typography variant='caption'>{language}</Typography>
                {user?.id === snippetUser.id && <EditIcon color='primary' onClick={handleEditSnippet} />}
            </Box>
        </div>
    )
}

export { SnippetHeader }