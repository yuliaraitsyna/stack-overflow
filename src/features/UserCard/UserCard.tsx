import styles from './UserCard.module.css';

import { FC } from 'react';
import { Box, Typography } from "@mui/material";
import { UserCardProps } from "./UserCard.types";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userSelector } from '../../app/redux/selectors/authSelectors';

const UserCard: FC<UserCardProps> = ({user}) => {
    const authUser = useSelector(userSelector);
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