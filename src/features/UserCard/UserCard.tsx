import styles from './UserCard.module.css';

import { Box, Typography } from "@mui/material";
import { UserCardProps } from "./UserCard.types";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store/store';
import { useNavigate } from 'react-router';

const UserCard: React.FC<UserCardProps> = ({user}) => {
    const authUser = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(authUser?.id === user.id ? '/account' : `/user/${user.id}`);
    }

    return (
        <Box className={styles.card} onClick={handleCardClick}>
            <AccountCircleIcon  color='info'/>
            <Typography variant='h6'>{user.username}</Typography>
        </Box>
    )
}

export { UserCard };