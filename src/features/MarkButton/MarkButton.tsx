import styles from './MarkButton.module.css';

import { useState } from 'react';
import { MarkButtonProps } from './MarkButton.types';
import { Box } from '@mui/material';
import { icons } from './icons/icons';

const MarkButton: React.FC<MarkButtonProps> = ({type, marksNumber, className}) => {
    const [isOn, setIsOn] = useState<boolean>(false);
    const [count, setCount] = useState<number>(marksNumber);

    const handleMark = () => {
        if(type === 'comment') return;

        setIsOn(prev => !prev);
        setCount(prev => isOn ? --prev : ++prev);
    }

    const icon = icons[type];

    return (
        <Box onClick={handleMark} className={styles.mark + ' ' + className}>
            <p>{count}</p>
            {isOn ? icon.on : icon.off}
        </Box>
    )
}

export {MarkButton}