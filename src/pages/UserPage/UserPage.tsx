import styles from './UserPage.module.css';

import { Box } from "@mui/material";
import { UserWidget } from "../../widgets/UserWidget/UserWidget";
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store/store';
import { UserWelcomer } from '../../features/UserWelcomer/UserWelcomer';

const UserPage = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <>
            <Box className={styles.container}>
                <UserWelcomer user={user}/>
                {user && <UserWidget user={user}/>}
            </Box>
        </>
    )
}

export { UserPage };