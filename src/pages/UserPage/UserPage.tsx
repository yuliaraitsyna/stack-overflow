import styles from './UserPage.module.css';

import { Box } from "@mui/material";
import { UserWidget } from "../../widgets/UserWidget/UserWidget";
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store/store';
import { UserWelcomer } from '../../features/UserWelcomer/UserWelcomer';
import { Loading } from '../../widgets/Loading/Loading';
import { useLocation, useParams } from 'react-router';
import { useGetConcreteUserQuery } from '../../app/redux/api/usersApi/usersApi';
import { EditWidget } from '../../widgets/EditWidget/EditWidget';
import { User } from '../../entities/User/User';
import React from 'react';

const AuthUserContent: React.FC<{user: User}> = ({user}) => {
    return (
        <>
            <UserWelcomer user={user} />
            <UserWidget user={user} />
            <EditWidget />
        </>
    )
}

const UserPage = () => {
    const authUser = useSelector((state: RootState) => state.auth.user);
    const location = useLocation();
    const params = useParams();

    const { data: fetchedUser, isLoading } = useGetConcreteUserQuery(Number(params.id));

    const isAuthUserPage = location.pathname.includes('/account');

    return (
        <Box className={styles.container}>
            {
                isAuthUserPage
                ?
                <>
                    { !authUser ? <Loading /> : <AuthUserContent user={authUser} /> }
                </>
                :
                <>
                    { (isLoading || !fetchedUser) ? <Loading /> : <UserWidget user={fetchedUser.data} /> }
                </>
            }
        </Box>
    );
};

export { UserPage };
