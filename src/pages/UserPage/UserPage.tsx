import styles from './UserPage.module.css';

import { Box } from "@mui/material";
import { UserWidget } from "../../widgets/UserWidget/UserWidget";
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store/store';
import { UserWelcomer } from '../../features/UserWelcomer/UserWelcomer';
import { EditWidget } from '../../widgets/EditWidget/EditWidget';

const UserPage = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <>
            <Box className={styles.container}>
                <UserWelcomer user={user}/>
                {user && <UserWidget user={user}/>}
                <EditWidget />
            </Box>
        </>
    )
}

export { UserPage };