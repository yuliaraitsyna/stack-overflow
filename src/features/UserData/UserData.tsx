import styles from './UserData.module.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { Box, Button, Typography } from "@mui/material";
import { UserDataProps } from "./UserData.types";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {logout as logoutUser} from '../../app/redux/slices/authSlice/authSlice';
import { useDeleteUserMutation, useLogoutMutation } from '../../app/redux/api/authApi/authApi';
import { useTranslation } from 'react-i18next';
import { userSelector } from '../../app/redux/selectors/authSelectors';
import { Loading } from '../../widgets/Loading/Loading';

const UserData: React.FC<UserDataProps> = ({ user }) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();
    const [deleteUser] = useDeleteUserMutation();
    const navigate = useNavigate();
    const authUser = useSelector(userSelector);

    const handleLogout = () => {
        dispatch(logoutUser());
        logout();
        navigate('/');
    }

    const handleDelete = () => {
        deleteUser(user.id);
        dispatch(logoutUser());
        navigate('/');
    }

    if(!authUser) return <Loading />

    return (
        <Box className={styles.container}>
            <AccountCircleIcon className={styles.userIcon}/>
            <Box className={styles.dataContainer}>
                <Box className={styles.data}>
                    <Typography variant="caption">{user.username}</Typography>
                    <Typography variant='body2'>Id: {user.id}</Typography>
                    <Typography variant='body2'>{t('role') + ': ' + user.role}</Typography>
                </Box>
                {
                    (authUser?.id === user.id)
                    &&
                    <Box className={styles.buttons}>
                    <Button variant="contained" color="warning" onClick={handleLogout}>
                        <ExitToAppIcon className={styles.icon}/>
                    </Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>
                        <DeleteOutlineIcon className={styles.icon}/>
                    </Button>
                </Box>
                }
            </Box>
        </Box>
    )
}

export { UserData };