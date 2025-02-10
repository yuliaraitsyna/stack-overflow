import styles from './UserWelcomer.module.css';

import { FC } from 'react';
import { Box, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { UserWelcomerProps } from './UserWelcomer.types';

const UserWelcomer: FC<UserWelcomerProps> = ({user}) => {
    const {t} = useTranslation();
    
    return (
        <Box className={styles.container}>
                <Typography variant='h5' className={styles.header}>
                    {t('welcome') + ', ' }
                    <span className={styles.username}>{user ? user.username : 'user'}</span>
                    !
                </Typography>
        </Box>
    )
}

export { UserWelcomer }