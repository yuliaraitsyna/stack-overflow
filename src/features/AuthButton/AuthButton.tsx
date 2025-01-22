import styles from './AuthButton.module.css';

import { useNavigate } from "react-router"
import { useAuth } from '../../app/hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { logout as storeLogout } from '../../app/redux/slice/authSlice';
import { useTranslation } from 'react-i18next';
import { useLogoutMutation } from '../../app/redux/api/authApi';
import { useEffect, useState } from 'react';
import { RootState } from '../../app/redux/store/store';

const AuthButton = () => {
    const {t} = useTranslation();
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const [buttonText, setButtonText] = useState(t('signIn'));
    const {isAuthenticated, loading} = useAuth();

    useEffect(() => {
        setButtonText(isAuthenticated ? t('signOut') : t('signIn'));
    }, [isAuthenticated, t, user]);

    const handleClick = () => {
        if(isAuthenticated) {
            dispatch(storeLogout());
            logout({});
            setButtonText(t('signIn'));
            navigate('/');
        }
        else {
            navigate('/login');
        }
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            {loading ? t('signIn') : buttonText}
        </button>
    )
}

export { AuthButton }
