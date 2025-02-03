import styles from './UsersPage.module.css';

import { Box } from "@mui/material"
import { UsersList } from "../../widgets/UsersList/UsersList";

const UsersPage = () => {
    return (
        <Box className={styles.container}>
            <UsersList />
        </Box>
    )
}

export { UsersPage };