import styles from './MarkButton.module.css';

import { SnippetState, MarkButtonProps } from './MarkButton.types';
import { Box, Typography } from '@mui/material';
import { icons } from './icons/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userSelector } from '../../app/redux/selectors/authSelectors';

const MarkButton: React.FC<MarkButtonProps> = ({type, value, onClick, isOn}) => {
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    const handleMark = () => {
        if(!user) {
            navigate('/login');
            return;
        }

        console.log(type, isOn)

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