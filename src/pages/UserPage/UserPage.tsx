import styles from './UserPage.module.css';

import { Box } from "@mui/material";
import { UserWidget } from "../../widgets/UserWidget/UserWidget";
import { useSelector } from 'react-redux';
import { UserWelcomer } from '../../features/UserWelcomer/UserWelcomer';
import { Loading } from '../../widgets/Loading/Loading';
import { useLocation, useParams } from 'react-router';
import { useGetConcreteUserQuery } from '../../app/redux/api/usersApi/usersApi';
import { EditWidget } from '../../widgets/EditWidget/EditWidget';
import { User } from '../../entities/User/User';
import React from 'react';
import { userSelector } from '../../app/redux/selectors/authSelectors';

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
    const authUser = useSelector(userSelector);
    const params = useParams();
    const location = useLocation();
    
    const userId = params.id ? Number(params.id) : null;
    const isAuthUserPage = location.pathname.includes('/account');

    const { data: fetchedUser, isLoading } = useGetConcreteUserQuery(userId!, {
        skip: !userId
    });

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
