import styles from './MarkButton.module.css';

import { SnippetState, MarkButtonProps } from './MarkButton.types';
import { Box, Typography } from '@mui/material';
import { icons } from './icons/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store/store';
import { useNavigate } from 'react-router';

const MarkButton: React.FC<MarkButtonProps> = ({type, value, onClick, isOn}) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();

    const handleMark = () => {
        if(!user) {
            navigate('/login');
            return;
        }

        onClick(type, isOn ? SnippetState.DEFAULT : (type === 'like' ? SnippetState.LIKE : SnippetState.DISLIKE));
    }

    return (
        <Box onClick={handleMark} className={styles.mark}>
            <Typography variant='body2'>{value}</Typography>
            {isOn ? icons[type].on : icons[type].off}
        </Box>
    )
}

export {MarkButton}