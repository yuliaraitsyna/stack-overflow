import styles from './ChangeUsernameForm.module.css';

import { Box, Button, TextField, Typography } from "@mui/material";

const ChangeUsernameForm = () => {
    return (
        <Box className={styles.container}>
            <Typography variant='body2'>Change your username: </Typography>
            <form>
                <TextField label="New username" />
                <Button color='success' variant='contained' type='submit'>Save</Button>
            </form>
        </Box>
    )
}

export { ChangeUsernameForm };