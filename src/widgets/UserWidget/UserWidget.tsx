import styles from './UserWidget.module.css';

import { FC } from 'react';
import { UserStatistics } from "../../features/UserStatistic/UserStatistic";
import { useGetStatisticQuery } from '../../app/redux/api/authApi/authApi';
import { UserWidgetProps } from './UserWidgetProps.types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setStatistics } from '../../app/redux/slices/authSlice/authSlice';
import { UserData } from '../../features/UserData/UserData';
import { Loading } from '../Loading/Loading';
import { statisticSlector } from '../../app/redux/selectors/authSelectors';

const UserWidget: FC<UserWidgetProps> = ({user}) => {
    const statistic = useSelector(statisticSlector);
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