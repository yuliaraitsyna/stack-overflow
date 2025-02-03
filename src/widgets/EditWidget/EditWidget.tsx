import styles from './EditWidget.module.css';

import { ChangePasswordForm } from '../../features/ChangePasswordForm/ChangePasswordForm';
import { ChangeUsernameForm } from '../../features/ChangeUsernameForm/ChangeUsernameForm';
import { Box, Typography } from "@mui/material";

const EditWidget = () => {
    return (
        <Box className={styles.container}>
            <Typography variant='body2'>Edit your profile: </Typography>
            <Box className={styles.forms}>
                <ChangeUsernameForm/>
                <ChangePasswordForm/>
            </Box>
        </Box>
    )
}

export { EditWidget };