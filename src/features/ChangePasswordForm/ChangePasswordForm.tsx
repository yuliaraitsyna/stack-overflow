import styles from './ChangePasswordForm.module.css';

import { Box, Button, TextField, Typography } from "@mui/material";

const ChangePasswordForm = () => {
    return (
        <Box className={styles.container}>
            <Typography variant='body2'>Change your password: </Typography>
            <form>
                <TextField label="Old password" />
                <TextField label="New password" />
                <TextField label="Confirm password" />
                <Button color='success' variant='contained' type='submit'>Change password</Button>
            </form>
        </Box>
    )
}

export { ChangePasswordForm };