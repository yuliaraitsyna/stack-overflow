import styles from './UserCard.module.css';

import { Box, Typography } from "@mui/material";
import { UserCardProps } from "./UserCard.types";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserCard: React.FC<UserCardProps> = ({user}) => {
    return (
        <Box className={styles.card}>
            <AccountCircleIcon  color='info'/>
            <Typography variant='h6'>{user.username}</Typography>
        </Box>
    )
}

export { UserCard };