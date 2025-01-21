import styles from './MarkButton.module.css';

import { MarkAction, MarkButtonProps, MarkType } from './MarkButton.types';
import { Box } from '@mui/material';
import { icons } from './icons/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store/store';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const getIcon = (state: MarkAction, type: MarkType) => {
    switch(state) {
        case MarkAction.LIKE:
            return icons['like'].on;
        case MarkAction.DISLIKE:
            return icons['dislike'].on;
        default:
            return icons[type].off;
    }
}

const MarkButton: React.FC<MarkButtonProps> = ({type, marksNumber, className, onMarkClick, currentState}) => {
    const [icon, setIcon] = useState(icons[type].off);
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        setIcon(getIcon(currentState, type));
    }, [currentState, type])

    const handleMark = () => {
        if(!user) {
            navigate('/login');
            return;
        }

        const newState = () => {
            switch(currentState) {
                case (MarkAction.LIKE || MarkAction.DISLIKE):
                    return MarkAction.DEFAULT;
                case (MarkAction.DEFAULT): {
                    return type === MarkAction.LIKE ? MarkAction.LIKE : MarkAction.DISLIKE;
                }
                default:
                    return MarkAction.DEFAULT;
            }
        }

        onMarkClick(type, newState());
    }

    return (
        <Box onClick={handleMark} className={styles.mark + ' ' + className}>
            <p>{marksNumber}</p>
            {icon}
        </Box>
    )
}

export {MarkButton}