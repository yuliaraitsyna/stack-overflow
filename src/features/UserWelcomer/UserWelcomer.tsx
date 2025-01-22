import styles from './UserWelcomer.module.css';

import { Box } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { UserWelcomerProps } from './UserWelcomer.types';

const UserWelcomer: React.FC<UserWelcomerProps> = ({user}) => {
    const {t} = useTranslation();
    
    return (
        <Box className={styles.container}>
                <h2 className={styles.header}>
                    {t('welcome') + ', ' }
                    <span>{user ? user.username : 'user'}</span>
                    !
                </h2>
        </Box>
    )
}

export { UserWelcomer }