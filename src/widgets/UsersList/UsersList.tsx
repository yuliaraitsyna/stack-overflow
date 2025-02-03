import styles from './UsersList.module.css';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/redux/store/store";
import { UserCard } from "../../features/UserCard/UserCard";
import { useGetUsersQuery } from "../../app/redux/api/usersApi/usersApi";
import { Loading } from "../Loading/Loading";
import { useEffect } from "react";
import { setUsers } from "../../app/redux/slices/usersSlice/usersSlice";
import { setCurrentPage, setLimit } from "../../app/redux/slices/usersSlice/usersSlice";
import { Box, Pagination } from "@mui/material";
import { LimitButtons } from "../../features/LimitButtons/LimitButtons";

const UsersList = () => {
    const users = useSelector((state: RootState) => state.users.users);
    const totalPages = useSelector((state: RootState) => state.users.totalPages);
    const currentPage = useSelector((state: RootState) => state.users.currentPage);
    const limit = useSelector((state: RootState) => state.users.limit);

    const {data: fetchedUsers, isLoading} = useGetUsersQuery({page: currentPage, limit});

    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchedUsers) {
            dispatch(setUsers(fetchedUsers));
        }
    }, [fetchedUsers, dispatch]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
    }
    
    const handleLimitChange = (limit: number) => {
        dispatch(setLimit(limit));
    }
    
    return (
        <>
            {
                isLoading
                ?
                <Loading />
                :
                <>
                    <Box className={styles.pagination}>
                        <LimitButtons onLimitChange={handleLimitChange}></LimitButtons>
                    </Box>
                    <Pagination count={totalPages} page={currentPage} onChange={handlePageChange}/>
                    {users.map(user => <UserCard key={user.id} user={user} />)}
                </>
            }
        </>
    )
}

export { UsersList };
