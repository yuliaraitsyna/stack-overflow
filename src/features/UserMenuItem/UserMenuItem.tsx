import styles from './UserMenuItem.module.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { UserMenuItemProps } from './UserMenuItem.types';

const UserMenuItem: React.FC<UserMenuItemProps> = ({ user, onMenuOpen }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOpening = () => {
        setIsOpen(prev => !prev);
        onMenuOpen();
    }

    return (
        <div>
             <li className={styles.userItem}>
                    {
                        isOpen 
                        && 
                        <>
                            <AccountCircleIcon className={styles.userIcon} />
                            <Typography variant='body2'>{user?.username}</Typography>
                        </>
                    }
                    <Box onClick={handleOpening} className={styles.openIcon}>
                        {isOpen ? <ArrowBackIosNewIcon className={styles.icon} /> : <ArrowForwardIosIcon className={styles.icon} />}
                    </Box>
            </li>
        </div>
    );
}

export { UserMenuItem };