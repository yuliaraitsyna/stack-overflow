import styles from './UserWidget.module.css';

import { UserStatistics } from "../../features/UserStatistic/UserStatistic";
import { useGetStatisticQuery } from '../../app/redux/api/authApi';
import { UserWidgetProps } from './UserWidgetProps.types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store/store';
import { useEffect } from 'react';
import { setStatistics } from '../../app/redux/slice/authSlice';
import { UserData } from '../../features/UserData/UserData';
import { Loading } from '../Loading/Loading';

const UserWidget: React.FC<UserWidgetProps> = ({user}) => {
    const statistic = useSelector((state: RootState) => state.auth.statistic);
    const {data: fetchedStatistic, isLoading} = useGetStatisticQuery(user.id);

    const dispatch = useDispatch();

    useEffect(() => {
        if(fetchedStatistic) {
            dispatch(setStatistics(fetchedStatistic));
        }
    }, [fetchedStatistic, dispatch]);

    return (
        <div className={styles.userWidget}>
            {
                isLoading 
                ? 
                <Loading /> 
                : 
                <>
                    <UserData user={user}/>
                    <UserStatistics statistic={statistic} />
                </>}
        </div>
    )
}

export { UserWidget };